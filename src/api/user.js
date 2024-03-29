import fetch from '../utils/request';

//user部分的接口
export async function addSubUserAxios(userName, name, email, password, userLevel, superiorUserId, deleted) {
  const data = {
    userName,
    name,
    email,
    password,
    userLevel,
    superiorUserId,
    deleted
  };
  return fetch({
    url: '/api/user/addUser',
    method: 'post',
    data
  });
}

//修改个人或下级人员密码
export async function changePasswordAxios(position, newPassword, confirmPassword, id, oldPassword) {
  let url;
  if(position === "self"){
    url = '/api/user/changePassword';
  }else if(position === "subUser"){
    url = '/api/user/changeSubPassword';
  }else{}
  const data = {
    newPassword,
    confirmPassword,
    id,
    oldPassword
  };
  return fetch({
    url: url,
    method: 'post',
    data
  });
}

//根据当前页码获取下级人员列表getSubUserList
export async function getSubUserListAxios(userId, pageNum, pageSize) {
  const url = '/api/user/getSubUsers';
  const params = {
    userId,
    pageNum,
    pageSize
  };
  return fetch({
    url: url,
    method: 'get',
    params
  });
}

//获取用户详细信息
export async function getUserDetailInfoAxios(id) {
  const url = "/api/user/getUserDetailInfo";
  const params = { id };
  return fetch({
    url: url,
    method: 'get',
    params
  });
}

//修改用户信息
export async function changeUserInfoAxios(id, email, name) {
  const url = "/api/user/changeUserInfo?";
  const params = {
    id,
    email,
    name
  };
  return fetch({
    url: url,
    method: 'post',
    params
  });
}

//查询下级用户具有的权限
export async function querySubPermissionsAxios(id) {
  const url = "/api/userPermission/querySubPermissions";
  const params = { id };
  return fetch({
    url: url,
    method: 'get',
    params
  });
}

//赋予或取消下级用户权限
export async function giveAndCancelAuthorityAxios(id, value) {
  console.log('api' + value);
  const url = "/api/userPermission/giveAndCancelAuthority";
  const params = {
    id,
    opNames: value.join(",")
  };
  return fetch({
    url: url,
    method: 'post',
    params
  });
}

//根据当前页码获取审计数据
export async function getSubUserAuditAxios(userId, username, pageNum, pageSize, startDate, endDate) {
  const url = '/api/logs/findByUserId';

  const params = {
    userId,
    pageNum,
    username,
    pageSize,
    startDate,
    endDate
  };

  return fetch({
    url: url,
    method: 'get',
    params
  });
}