import * as constants from './constants';
import {getSubUserAuditAxios } from '../../../../api/user';


const changeLogs = (logs, total, startDate, endDate) => ({
  type: constants.CHANGELOG,
  logs,
  total,
  startDate,
  endDate,
})

export const getSubUserOperation = (current, startDate, endDate) => {
  var userId = parseInt(localStorage.getItem('subUserId'));
  var username = localStorage.getItem('subUserName')

  var pageSize = 10;

  return (dispatch) => {
    getSubUserAuditAxios(userId, username, current, pageSize, startDate, endDate).then((res) => {
      if(res){
        if(res.data.meta.success){
          let list = res.data.data.list;
          list.forEach(function(item){
            if(item.operateTime != null){
              var d = new Date(item.operateTime);
              var newOperateTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
              item.operateTime = newOperateTime;
            }
          })

          const logs = list;
          const total = res.data.data.total;
          dispatch(changeLogs(logs, total, startDate, endDate));
        }
      }
    })
  }
}


export const clearTable = () => ({
  type: constants.CLEARTABLE,
})