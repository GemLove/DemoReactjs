export default {
  route: {
    path: "/Home",
    routes: [
      {
        path: "/home",
        name: "Home",
        icon: "",
        component: "./Home",
      },
      // {
      //   path: '/SignUp',
      //   name: 'Sign Up',
      //   icon: "",
      //   component: './SignUp',
      // },
      // {
      //   path: '/admin',
      //   name: '管理页',
      //   icon: "",
      //   access: 'canAdmin',
      //   component: './Admin',
      //   routes: [
      //     {
      //       path: '/admin/sub-page1',
      //       name: '一级页面',
      //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      //       component: './Welcome',
      //     },
      //     {
      //       path: '/admin/sub-page2',
      //       name: '二级页面',
      //       icon: "",
      //       component: './Welcome',
      //     },
      //     {
      //       path: '/admin/sub-page3',
      //       name: '三级页面',
      //       icon:"",
      //       component: './Welcome',
      //     },
      //   ],
      // },
      // {
      //   name: '列表页',
      //   icon: "",
      //   path: '/list',
      //   component: './ListTableList',
      //   routes: [
      //     {
      //       path: '/list/sub-page',
      //       name: '列表页面',
      //       icon: "",
      //       routes: [
      //         {
      //           path: 'sub-sub-page1',
      //           name: '一一级列表页面',
      //           icon: "",
      //           component: './Welcome',
      //         },
      //         {
      //           path: 'sub-sub-page2',
      //           name: '一二级列表页面',
      //           icon: "",
      //           component: './Welcome',
      //         },
      //         {
      //           path: 'sub-sub-page3',
      //           name: '一三级列表页面',
      //           icon: "",
      //           component: './Welcome',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/list/sub-page2',
      //       name: '二级列表页面',
      //       icon: "",
      //       component: './Welcome',
      //     },
      //     {
      //       path: '/list/sub-page3',
      //       name: '三级列表页面',
      //       icon: "",
      //       component: './Welcome',
      //     },
      //   ],
      // },
      // {
      //   path: 'https://ant.design',
      //   name: 'Ant Design 官网外链',
      //   icon: "",
      // },
    ],
  },
  location: {
    pathname: "/home",
  },
};
