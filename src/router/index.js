import Vue from 'vue';
import Router from 'vue-router';

/* layout*/
import Layout from '../views/layout/Layout';

// dashboard
// import dashboard from '../views/dashboard/index';
const dashboard = resolve => require(['../views/dashboard/index'], resolve);
/* error*/
const Err404 = resolve => require(['../views/error/404'], resolve);
const Err401 = resolve => require(['../views/error/401'], resolve);
/* login*/
import Login from '../views/login/';
import authRedirect from '../views/login/authredirect';
import sendPWD from '../views/login/sendpwd';
import reset from '../views/login/reset';

/* components*/
const Tinymce = resolve => require(['../views/components/tinymce'], resolve);
const Markdown = resolve => require(['../views/components/markdown'], resolve);
const JsonEditor = resolve => require(['../views/components/jsoneditor'], resolve);
const DndList = resolve => require(['../views/components/dndlist'], resolve);
const AvatarUpload = resolve => require(['../views/components/avatarupload'], resolve);
const Dropzone = resolve => require(['../views/components/dropzone'], resolve);
const Sticky = resolve => require(['../views/components/sticky'], resolve);
const SplitPane = resolve => require(['../views/components/splitpane'], resolve);


/* charts*/
const KeyboardChart = resolve => require(['../views/charts/keyboard'], resolve);
const KeyboardChart2 = resolve => require(['../views/charts/keyboard2'], resolve);
const LineMarker = resolve => require(['../views/charts/line'], resolve);
const MixChart = resolve => require(['../views/charts/mixchart'], resolve);

/* excel*/
const ExcelDownload = resolve => require(['../views/excel/index'], resolve);


/* admin*/
// const AdminCreateUser = resolve => require(['../views/admin/createUser'], resolve);
// const QuicklyCreateUser = resolve => require(['../views/admin/quicklycreate'], resolve);
// const UserProfile = resolve => require(['../views/admin/profile'], resolve);
// const UsersList = resolve => require(['../views/admin/usersList'], resolve);




Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
        { path: '/login', component: Login, hidden: true },
        { path: '/authredirect', component: authRedirect, hidden: true },
        { path: '/sendpwd', component: sendPWD, hidden: true },
        { path: '/reset', component: reset, hidden: true },
        { path: '/404', component: Err404, hidden: true },
        { path: '/401', component: Err401, hidden: true },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: '首页',
      hidden: true,
      children: [
                { path: 'dashboard', component: dashboard }
      ]
    },
    {
      path: '/components',
      component: Layout,
      redirect: 'noredirect',
      name: '组件',
      icon: 'zujian',
      children: [
        { path: 'tinymce', component: Tinymce, name: '富文本编辑器' },
        { path: 'markdown', component: Markdown, name: 'Markdown' },
        { path: 'jsoneditor', component: JsonEditor, name: 'JSON编辑器' },
        { path: 'dndlist', component: DndList, name: '列表拖拽' },
        { path: 'splitpane', component: SplitPane, name: 'SplitPane' },
        { path: 'avatarupload', component: AvatarUpload, name: '头像上传' },
        { path: 'dropzone', component: Dropzone, name: 'Dropzone' },
        { path: 'sticky', component: Sticky, name: 'Sticky' }
      ]
    },
    {
      path: '/charts',
      component: Layout,
      redirect: 'noredirect',
      name: '图表',
      icon: 'tubiaoleixingzhengchang',
      children: [
        { path: 'keyboard', component: KeyboardChart, name: '键盘图表' },
        { path: 'keyboard2', component: KeyboardChart2, name: '键盘图表2' },
        { path: 'line', component: LineMarker, name: '折线图' },
        { path: 'mixchart', component: MixChart, name: '混合图表' }
      ]
    },
    {
      path: '/excel',
      component: Layout,
      redirect: 'noredirect',
      name: 'excel',
      icon: 'tubiaoleixingzhengchang',
      noDropdown: true,
      children: [
        { path: 'download', component: ExcelDownload, name: '导出excel' }
      ]
    },
    // {
    //   path: '/admin',
    //   component: Layout,
    //   redirect: 'noredirect',
    //   name: '后台管理',
    //   icon: 'geren1',
    //   children: [
    //     { path: 'createuser', component: AdminCreateUser, name: '管理员', meta: { role: ['admin'] } },
    //     { path: 'list', component: UsersList, name: '后台用户列表', meta: { role: ['super_editor', 'product', 'author_assistant'] } },
    //     { path: 'qicklyCreate', component: QuicklyCreateUser, name: '一键创建账户', meta: { role: ['super_editor', 'gold_editor', 'weex_editor', 'wscn_editor', 'author_assistant', 'product'] } },
    //     { path: 'profile', component: UserProfile, name: '个人' }
    //   ]
    // },
    { path: '*', redirect: '/404', hidden: true }
  ]
});