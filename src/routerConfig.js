// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import { getRouterData } from './utils/formatter';
import { asideMenuConfig } from './menuConfig';

import LoginPanel from './pages/LoginPage/components/LoginPanel';

import Welcome from './pages/Welcome';

import MainLayout from './layouts/BasicLayout/MainLayout';
import NormalLayout from './layouts/BasicLayout/NormalLayout';

import AuthorityManage from './pages/Permission/AuthorityManage';
import SelfAuthorities from './pages/Permission/SelfAuthorities';
import AddAuthority from './pages/Permission/AddAuthority';
import EditAuthority from './pages/Permission/EditAuthority';

import Dashboard from './pages/User/Dashboard';
import UserInfo from './pages/User/UserInfo';
import AddSubUser from './pages/User/AddSubUser';
import SubUserDetail from './pages/User/SubUserDetail';
import ChangeSelfPwd from './pages/User/ChangeSelfPwd';
import EditSubUser from './pages/User/EditSubUser';
import ChangeSubUserPwd from './pages/User/ChangeSubUserPwd';
import EditSubUserPermission from './pages/User/EditSubUserPermission';
import AuditSubUser from "./pages/User/AuditSubUserOperation"

import ResourcePoolShow from './pages/Resource/ResourcePoolShow';
import FirstLevelResourceShow from './pages/Resource/FirstLevelResourceShow';
import AllocateResourcePool from './pages/Resource/AllocateResourcePool';
import AssignClusterUser from './pages/Resource/AssignClusterUser';
import UnassignClusterUser from './pages/Resource/UnassignClusterUser';
import ClusterResourceManage from './pages/Resource/ClusterResourceManage';

import VisInstall from './pages/VisInstall';

import PlatformLog from './pages/Log/components/PlatformLog';
import CDHLog from './pages/Log/components/CDHLog';
import UploadFile from './pages/UploadFile';

import WebSSH from './pages/WebSSH';

import NotPermission from './components/NotPermission';
import BasicException from './components/BasicException';
import NotLogin from './components/NotLogin';

import GlobalSearch from './pages/Resource/GlobalSearch';

import CheckData from './pages/Resource/CheckData';


const routerConfig = [
  {
    path: '/welcome',
    layout: NormalLayout,
    component: Welcome,
  },
  {
    path: '/userManagement/dashboard',
    layout: NormalLayout,
    component: Dashboard,
  },
  {
    path: '/Resource/ResourcePoolShow',
    layout: NormalLayout,
    component: ResourcePoolShow,
  },
  {
    path: '/login',
    layout: MainLayout,
    component: LoginPanel,
  },
  {
    path: '/userManagement/userInfo',
    layout: NormalLayout,
    component: UserInfo,
  },
  {
    path: '/permissionManagement/allPermissions',
    layout: NormalLayout,
    component: AuthorityManage,
  },
  {
    path: '/permissionManagement/selfPermissions',
    layout: NormalLayout,
    component: SelfAuthorities,
  },
  {
    path: '/permissionManagement/editPermission',
    layout: NormalLayout,
    component: EditAuthority,
  },
  {
    path: '/userManagement/addSubUser',
    layout: NormalLayout,
    component: AddSubUser,
  },
  {
    path: '/userManagement/subUserDetail',
    layout: NormalLayout,
    component: SubUserDetail,
  },
  {
    path: '/userManagement/changeSelfPwd',
    layout: NormalLayout,
    component: ChangeSelfPwd,
  },
  {
    path: '/userManagement/auditSubUserOperation',   // 子用户操作审计
    layout: NormalLayout,
    component: AuditSubUser,
  },
  {
    path: '/userManagement/editSubUserInfo',
    layout: NormalLayout,
    component: EditSubUser,
  },
  {
    path: '/userManagement/changeSubUserPwd',
    layout: NormalLayout,
    component: ChangeSubUserPwd,
  },
  {
    path: '/permissionManagement/addPermission',
    layout: NormalLayout,
    component: AddAuthority,
  },
  {
    path: '/userManagement/editSubUserPermission',
    layout: NormalLayout,
    component: EditSubUserPermission,
  },
  {
    path: '/Resource/FirstLevelResourceShow',
    layout: NormalLayout,
    component: FirstLevelResourceShow,
  },
  {
    path: '/Resource/AllocateResourcePool',
    layout: NormalLayout,
    component: AllocateResourcePool,
  },
  {
    path: '/Resource/AssignClusterUser',
    layout: NormalLayout,
    component: AssignClusterUser,
  },
  {
    path: '/Resource/UnassignClusterUser',
    layout: NormalLayout,
    component: UnassignClusterUser,
  },
  {
    path: '/Resource/ClusterResourceManage',
    layout: NormalLayout,
    component: ClusterResourceManage,
  },
  {
    path: '/globalSearch',
    layout: NormalLayout,
    component: GlobalSearch,
  },
  {
    path: '/hbaseMetaData',
    layout: NormalLayout,
    component: CheckData,
  },
  {
    path: '/VisInstall/createMV',
    layout: NormalLayout,
    component: VisInstall,
  },
  {
    path: '/Log/PlatformLog',
    layout: NormalLayout,
    component: PlatformLog,
  },
  {
    path: '/Log/CDHLog',
    layout: NormalLayout,
    component: CDHLog,
  },
  {
    path: '/Upload/UploadFile',
    layout: NormalLayout,
    component: UploadFile,
  },
  {
    path: '/WebSSH/ssh',
    layout: NormalLayout,
    component: WebSSH,
  },
  {
    path: '/NotPermission',
    layout: NormalLayout,
    component: NotPermission,
  },
  {
    path: '/BasicException',
    layout: NormalLayout,
    component: BasicException,
  },
  {
    path: '/NotLogin',
    layout: NormalLayout,
    component: NotLogin,
  },
  
  {
    path: '/hbaseMetaData/checkData',
    layout: NormalLayout,
    component: CheckData,
  }
];

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData };
