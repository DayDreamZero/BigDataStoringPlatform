import * as constants from './constants';
import {getSubUserAuditAxios } from '../../../../api/hmetadata';


const changeLogs = (tableName,rowkey,columnFamily,column) => ({
  //type: constants.,
  tableName,
  rowkey,
  columnFamily,
  column
})

export const getSubUserOperation = () => {
  return (dispatch) => {
    // Axios().then((res) => {
    //   if(res){
    //     if(res.data.meta.success){
          
    //       dispatch(changeLogs(logs, total));
    //     }
    //   }
    // })
  }
}

export const clearTable = () => ({
  //type: constants.,
})