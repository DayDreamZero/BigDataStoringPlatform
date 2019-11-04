import React, { Component } from 'react';
import {moment, Table, Pagination, DatePicker} from '@icedesign/base';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { withRouter } from 'react-router';



@withRouter
class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      ballonVisible: false
    }
  }

  onRowMouseEnter = (record, index, e) => {
    console.log("鼠标进入一行");
    this.setState({
      ballonVisible: true
    },function(){
      console.log(this.state.ballonVisible);
    })
  }
  
  disabledDate = function(calendarDate) {
    const { year, month, date } = calendarDate;
    const theDate = moment(`${year}-${month + 1}-${date}`, "YYYY-M-D");
  
    return theDate >= new Date().getTime();
  };

  onRowMouseLeave = (record, index, e) => {
    console.log("鼠标离开一行");
    this.setState({
      ballonVisible: false
    },function(){
      console.log(this.state.ballonVisible);
    })
  }

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

  componentDidMount() {
    this.props.getLogs();
  }

  componentWillUnmount() {
    this.props.resetTable();
  }

  render() {
    const { dataSource, startDate, endDate } = this.props;
    const {RangePicker} = DatePicker;
    return (
      <div>
        <div style={styles.IceContainer}>
          <span style={styles.formTitle}>操作审计</span>
          <div style={styles.date}>
            <span>按日期查询：</span>
            <RangePicker  
              onChange={(val, str)=>{
                  this.props.getLogsByDate(str[0], str[1]);
              }}
              onStartChange={(val, str) =>{
                const d = new Date();
                const dateString = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
                this.props.getLogsByDate(str, dateString);
              }}
              // onEndChange={(val, str) => {
              //   this.props.getLogsByDate("", str)
              // }}
              disabledDate={this.disabledDate}
            ></RangePicker>
          </div>
        </div>
        <div style={styles.tableContainer}>
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
            onChange={(current, e)=>{
              return this.props.onChange(current, startDate, endDate)
            }}
            total={this.props.total}
          />
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataSource: state.aduitForm.logs,
    current: state.aduitForm.current,
    total: state.aduitForm.total,
    startDate: state.aduitForm.startDate,
    endDate: state.aduitForm.endDate
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLogs() {
    var current = 1;
    var startDate = '';
    var endDate = '';
    dispatch(actionCreators.getSubUserOperation(current, startDate, endDate));
  },
  //分页
  onChange(current, startDate, endDate) {
    dispatch(actionCreators.getSubUserOperation(current, startDate, endDate));
  },
  resetTable() {
    dispatch(actionCreators.clearTable());
  },
  getLogsByDate(startDate, endDate) {
    var current = 1;
    dispatch(actionCreators.getSubUserOperation(current, startDate, endDate))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

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
  date: {
    float: 'right',
    fontSize: '14px',
  }
};
