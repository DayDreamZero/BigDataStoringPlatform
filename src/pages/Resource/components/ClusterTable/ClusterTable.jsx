import React, { Component } from 'react';
import { Table, Pagination, Button, Dialog, Balloon, Feedback, Loading,Dropdown, Menu } from '@icedesign/base';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


@withRouter

class Home extends Component {
  static displayName = 'Home';
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //   };
  // }

  onRowClick = (record, index, e) => {
    localStorage.setItem('onRowClickClusterName', record.clusterName);
    console.log(record.clusterName);
    this.props.history.push({
      pathname: '/Resource/ClusterResourceManage',
    })
  }
  renderHint = (value) => {
    return (
      <Balloon
        align="lt"
        closable={false}
        style={{ lineHeight: '24px' }}
        trigger={<div style={{ margin: '5px' }}>{value}</div>}
      >
        单击一行查看集群信息
      </Balloon>
    );
  };
  //   //悬浮在表格每一行的时候触发,提醒用户点击
  // onRowMouseEnter = (record, index, e) => {
  //   console.log('mouse111111111111');
  //   console.log(e.target);
  //   const Tooltip = Balloon.Tooltip;
  //   return(
  //     <Tooltip trigger={e.target} align='t' text="text text" />
  //   )
  // }

  bindUserCluster = (clusterName) => {
    localStorage.setItem('bindClusterName',clusterName);
    this.props.history.push({
      pathname:'/Resource/AssignClusterUser',
    })
  }
  
  unbindUserCluster = (clusterName) => {
    localStorage.setItem('unbindClusterName',clusterName);
    this.props.history.push({
      pathname: '/Resource/UnassignClusterUser',
    })
  }

  recycleCluster = (clusterName, userName, current) => {
    const that = this;
    Dialog.confirm({
      content: "回收后数据将无法恢复，是否确认回收？",
      title: "警告",
      onOk: () => {
        // localStorage.setItem('recycleClusterName',clusterName);
        that.props.recycleCluster(clusterName, userName, current);  
      }
    });
  }
  
  // renderOperation = (value, index, record) => {
  //   return(
  //     <Table.Column width={200} title="操作" cell={this.renderOperationButton} />
  //   )
  // }

  renderOperationButton = (value, index, record) => {
    const userLevel = localStorage.getItem('userLevel');
    if(userLevel==1) {
      const that = this;
      const userName = localStorage.getItem('userName');
      console.log(userName);
      return (
        <Dropdown trigger={<Button>选择操作</Button>} triggerType="click">
          <Menu style={styles.dropdown}>
            <Menu.Item
              type="primary" 
              onClick={
                ()=>{ 
                  that.bindUserCluster(record.clusterName);
                }
              }
              style={{color: '#000'}}
            >绑定</Menu.Item>
            <Menu.Item
              type="secondary"
              onClick={
                ()=>{    
                  that.unbindUserCluster(record.clusterName);
                }
              }
              style={{color: '#000'}}
            >解绑</Menu.Item>
            <Menu.Item
              type="primary"
              shape="warning"
              onClick={
                ()=>{    
                  that.recycleCluster(record.clusterName, userName, that.props.current);
                }
              }
              style={{color: '#000'}}
            >回收</Menu.Item>
            <Menu.Item>
              <Link to='/hbaseMetaData' style={{color: '#000'}}>元数据查看</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/globalSearch' style={{color: '#000'}}>全局搜索</Link>
            </Menu.Item>
          </Menu>
        </Dropdown>
      )
    }
  }

  render() {
    console.log(this.props);
    const { clusterList } = this.props;
    console.log(clusterList);
    return (
      <div style={styles.tableContainer}>
        <Loading visible={this.props.visible} shape="fusion-reactor" tip=" 正在回收，请耐心等待...">
          <Table
            dataSource={Array.from(clusterList)}
            onSort={this.handleSort}
            onRowClick={this.onRowClick}
            onRowMouseEnter={this.onRowMouseEnter}
            hasBorder={false}
            className="custom-table"
            style={styles.customTable}
          >
            <Table.Column width={100} title="集群ID" dataIndex="clusterId" cell={this.renderHint}/>
            <Table.Column width={100} title="集群名称" dataIndex="clusterName" cell={this.renderHint}/>
            <Table.Column width={100} title="CPU（个）" dataIndex="totalCpu" cell={this.renderHint}/>
            <Table.Column width={100} title="内存（GB）" dataIndex="totalMem" cell={this.renderHint}/>
            <Table.Column width={100} title="硬盘（GB）" dataIndex="totalDisk" cell={this.renderHint}/>
            <Table.Column width={200} title="创建时间" dataIndex="createTime" cell={this.renderHint}/>
            <Table.Column width={200} title="操作" cell={this.renderOperationButton} />
          </Table>
          <Pagination
            style={styles.pagination}
            onChange={this.props.onChange}
            total={this.props.total}
          />
        </Loading>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    clusterList: state.Resource.clusterList,
    current: state.Resource.clusterListCurrent,
    total: state.Resource.clusterListTotal,
    visible: state.Resource.clusterTableLoadingVisible
  }
}

const mapDispatch = (dispatch) => ({
  //分页
  onChange(current) {
    console.log("分页被点击");
    console.log(current);
    dispatch(actionCreators.getResourceList(current));
  },
  // //跳转到Cloudera对应cluster页面
  // jumpToClouderaCluster(clusterName) {
  //   actionCreators.jumpToClouderaCluster(clusterName);
  // },
  //查看与集群相关联的二级用户
  getBoundSecondUser(clusterName) {
    actionCreators.getBoundSecondUser(clusterName);
  },
  //回收集群
  recycleCluster(clusterName, userName, current) {
    console.log('mapDispatch  ' + clusterName);
    console.log(userName);
    dispatch(actionCreators.recycleCluster(clusterName, userName, current));
  }
})

export default connect(mapState, mapDispatch)(Home);

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  customTable: {
    width: '90%',
    minWidth: '1000px',
    marginLeft: '4%',
    cursor:'pointer',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
  dropdown: {
    position: 'relative',
  }
};
