import fetch from '../utils/request';

//根据当前页码获取搜索数据
export async function getSearchDataAxios(search_type, search_scope, search_word, page) {
    const url = '/api/search';
    const params = {
        search_type,
        search_scope,
        search_word,
        page
    };
    return fetch({
      url: url,
      method: 'get',
      params
    });
  }