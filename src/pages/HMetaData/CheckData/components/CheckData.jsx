import React, { Component } from 'react';
import { Table, Icon, Button, Pagination, Balloon } from '@icedesign/base';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getTableDataAxios } from '../../../../api/hmetadata'

@withRouter
class CheckData extends Component {

  // onRowMouseEnter = (record, index, e) => {
  //   console.log("鼠标进入一行");
  //   this.setState({
  //     ballonVisible: true
  //   },function(){
  //     console.log(this.state.ballonVisible);
  //   })
  // }

  // onRowMouseLeave = (record, index, e) => {
  //   console.log("鼠标离开一行");
  //   this.setState({
  //     ballonVisible: false
  //   },function(){
  //     console.log(this.state.ballonVisible);
  //   })
  // }

  // handleSort = (dataIndex, order) => {
  //   const dataSource = this.state.dataSource.sort((a, b) => {
  //     const result = a[dataIndex] - b[dataIndex];
  //     if (order === 'asc') {
  //       return result > 0 ? 1 : -1;
  //     }
  //     return result > 0 ? -1 : 1;
  //   });

  //   this.setState({
  //     dataSource,
  //   });
  // };

  getTables = () => {
    getTableDataAxios('a').then(function (response) {
      console.log(response);
    })
  }

  componentDidMount() {
     this.getTables();
  }

  // componentWillUnmount() {
  //   this.props.resetTable();
  // }

  render() {
    return (
      <div>
        <div style={styles.IceContainer}>
          <span style={styles.formTitle}>元数据查看</span>
        </div>
        {/*<div style={styles.tableContainer}>
          <Table
            dataSource={dataSource}
            // onSort={this.handleSort}
            hasBorder={false}
            className="custom-table"
          >
            <Table.Column
              width={100}
              lock="left"
              title="操作者序号"
              dataIndex="operatorId"
              // sortable
              align="center"
              align="center"
            />
            <Table.Column 
              width={100} 
              title="操作日志序号" 
              dataIndex="operationLogId" 
              align="center"
              // sortable 
            />
            <Table.Column 
              width={200} 
              title="操作" 
              dataIndex="operation" 
              align="center"
            />
            <Table.Column 
              width={200} 
              title="操作时间" 
              dataIndex="operateTime" 
              align="center"
            />
          </Table>
          <Pagination
            style={styles.pagination}
            onChange={this.props.onChange}
            total={this.props.total}
          />
        </div>*/}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     dataSource: state.aduitForm.logs,
//     current: state.aduitForm.current,
//     total: state.aduitForm.total
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   getLogs() {
//     var current = 1;
//     dispatch(actionCreators.getSubUserOperation(current));
//   },
//   //分页
//   onChange(current) {
//     dispatch(actionCreators.getSubUserOperation(current));
//   },
//   resetTable() {
//     dispatch(actionCreators.clearTable());
//   }
// })

export default CheckData;
// export default Home;

const styles = {
  formTitle: {
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '24px',
  },
  btnContainer: {
    float: 'right',
  },
  batchBtn: {
    marginRight: '10px',
    fontSize: '14px',
    height: '26px',
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
