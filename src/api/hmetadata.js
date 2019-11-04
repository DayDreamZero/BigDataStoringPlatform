import fetch from '../utils/request';

//hmetadata部分的接口
export async function gerCellDataAxios(tableName,rowkey,columnFamily,column) {
  const params = {
    tableName,
    rowkey,
    columnFamily,
    column
  };
  return fetch({
    url: '/hbase/hmetadata/cellData',
    method: 'get',
    params
  });
}

export async function getColumnsAxios(tableName,columnFamily) {
  const params = {
    tableName,
    columnFamily
  };
  return fetch({
    url: '/hbase/hmetadata/getcolumns',
    method: 'get',
    params
  });
}

export async function getTablesAxios() {
  return fetch({
    url: '/hbase/hmetadata/gettables',
    method: 'get'
  });
}

export async function getRowDataAxios(tableName,rowkey) {
  const params = {
    tableName,
    rowkey
  };
  return fetch({
    url: '/hbase/hmetadata/rowdata',
    method: 'get',
    params
  });
}

export async function getRowRangeDataAxios(tableName,startRow,rowNum) {
  const params = {
    tableName,
    startRow,
    rowNum
  };
  return fetch({
    url: '/hbase/hmetadata/rowRangeData',
    method: 'get',
    params
  });
}

export async function getTableDataAxios(tableName) {
  const params = {
    tableName
  };
  return fetch({
    url: '/hbase/hmetadata/tableData',
    method: 'get',
    params
  });
}