import * as constants from './constants';
import { getSearchDataAxios } from '../../../../api/search';


const changeData = (data, total) => ({
  type: constants.CHANGE_DATA,
  data,
  total
})

export const getSearchDataOperation = (filterValue,searchValue,radio,current) => {
  return (dispatch) => {
    getSearchDataAxios(radio, filterValue, searchValue, current).then((res) => {
      if(res){
        if(res.data.meta.success){
          let data = res.data.data.data;
          // data.forEach(function(item){
          //   if(item.operateTime != null){
          //     var d = new Date(item.operateTime);
          //     var newOperateTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          //     item.operateTime = newOperateTime;
          //   }
          // })
          const dataSource = data;
          const total = res.data.data.totalNum;
          dispatch(changeData(dataSource, total));
        }
      }
    })
  }
}

export const clearTable = () => ({
  type: constants.CLEAR_TABLE,
})