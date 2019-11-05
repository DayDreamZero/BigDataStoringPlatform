/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Grid, Pagination, Search, Radio } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder/lib';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { withRouter } from 'react-router';
import { getSearchDataAxios } from '../../../../api/search';


const { Row, Col } = Grid;

const RadioGroup = Radio.Group;
const radioList = [
  {
    value: 'fuzzy',
    label: '模糊查询'
  }, {
    value: 'accurate',
    label: '精确查询'
  }
];


@withRouter
class SearchOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [
        {
            text: 'all',
            value: 'all',
            default: true
        },
        {
            text: 'q1',
            value: 'q1'
        },
        {
            text: 'q2',
            value: 'q2'
        },
        {
            text: 'q3',
            value: 'q3'
        }
      ],
      filterValue: 'all',
      searchValue: '',
      radio: 'fuzzy'
    };
  }

  handleSearch(filterValue,searchValue,radio) {
    this.props.onSearch(filterValue,searchValue,radio);
  }

  onChange(value) {
    this.setState({
      searchValue: value
    });
  }

  // value为filter的值，obj为search的全量值
  onFilterChange(value) {
    this.setState({
      filterValue: value
    });
  }

  onRadioChange(value) {
    this.setState({
      radio: value
    });
  }

  // getdata = () => {
  //   getSearchDataAxios("fuzzy","all","address",1).then(function (response) {
  //     console.log(response);
  //   });
  // }

  // componentDidMount(){
  //   this.getdata();
  //   this.props.onSearch("all","","fuzzy");
  // }

  render(){
    const tableData = [{...this.props.tableData}];
    const { filterValue,searchValue,radio,filter } = this.state;

    return(
      <div className="user-form">
        <IceContainer>
          <IceFormBinderWrapper
            ref="form">
            <div style={styles.formContent}>
              <div style={styles.titleContainer}>
                <h2 style={styles.formTitle}>全局搜索</h2>
              </div>
              <Row justify="center">
                <Col xxs="24" s="8" l="12">
                <Search
                  autoWidth
                  onChange={this.onChange.bind(this)}
                  onSearch={()=>{this.handleSearch(filterValue,searchValue,radio)}}
                  filter={filter}
                  onFilterChange={this.onFilterChange.bind(this)}
                />
                </Col>
              </Row>
              <Row justify="center" style={{marginTop:"10px"}}>
                <Col s="8" >
                  <RadioGroup aria-labelledby="radio-a11y"
                    dataSource={radioList}
                    value={this.state.radio}
                    onChange={this.onRadioChange.bind(this)}>
                  </RadioGroup> 
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </IceContainer>
        <div style={styles.tableContainer}>
        <Table
          dataSource={tableData}
          // onSort={this.handleSort}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column 
            width={200} 
            title="q1" 
            dataIndex="q1" 
            align="center"
            // sortable 
          />
          <Table.Column 
            width={200} 
            title="q2" 
            dataIndex="q2" 
            align="center"
          />
          <Table.Column 
            width={200} 
            title="q3" 
            dataIndex="q3" 
            align="center"
          />
        </Table>
        <Pagination
          style={styles.pagination}
          onChange={this.props.onPageChange}
          total={this.props.total}
        />
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tableData: state.SearchPanel.data,
    current: state.SearchPanel.current,
    total: state.SearchPanel.total
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSearch(filterValue,searchValue,radio) {
    var current = 1;
    dispatch(actionCreators.getSearchDataOperation(filterValue,searchValue,radio,current));
  },
  //分页
  onChange(filterValue,searchValue,radio,current) {
    dispatch(actionCreators.getSearchDataOperation(filterValue,searchValue,radio,current));
  },
  resetTable() {
    dispatch(actionCreators.clearTable());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchOperation)

const styles = {
  formContent: {
    width: '100%',
    position: 'relative',
  },
  btnContainer: {
    float: 'right',
  },
  batchBtn: {
    marginRight: '10px',
    fontSize: '14px',
    height: '26px',
  },
  formItem: {
    marginBottom: 25,
  },
  formLabel: {
    height: '32px',
    lineHeight: '32px',
    textAlign: 'right',
  },
  formTitle: {
    marginTop: '0',
    display: 'inline-block',
  },
  titleContainer: {
    borderBottom: '1px solid #eee',
    margin: '0 0 20px',
  },
  IceContainer: {
    background: 'rgb(255, 255, 255)',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '20px',
    minHeight: 'auto',
    justifyContent: 'space-between',
  },
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  };