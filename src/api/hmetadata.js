import fetch from '../utils/request';

//hbasemeta部分的接口
export async function gerCellDataAxios(tableName,rowkey,columnFamily,column) {
  const params = {
    tableName,
    rowkey,
    columnFamily,
    column
  };
  return fetch({
    url: '/api/hbasemeta/cellData',
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
    url: '/api//hbasemeta/columns',
    method: 'get',
    params
  });
}

export async function getTablesAxios() {
  return fetch({
    url: '/api/hbasemeta/tables',
    method: 'get'
  });
}

export async function getRowDataAxios(tableName,rowkey) {
  const params = {
    tableName,
    rowkey
  };
  return fetch({
    url: '/api/hbasemeta/rowData',
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
    url: '/api/hbasemeta/rowRangeData',
    method: 'get',
    params
  });
}

export async function getTableDataAxios(tableName) {
  const params = {
    tableName
  };
  return fetch({
    url: '/api/hbasemeta/tableData',
    method: 'get',
    params
  });
}