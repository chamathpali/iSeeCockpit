﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [{ name: 'Login', path: '/user/login', component: './user/Login' }],
      },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: 'Welcome', icon: 'smile', component: './Welcome', hideInMenu: true },
  {
    path: '/usecases',
    access: 'designUser',
    name: 'Usecases',
    icon: 'home',
    component: './designuser/Usecases'
  },
  {
    path: '/usecase/manage/:id',
    hideInMenu: true,
    access: 'designUser',
    name: 'Manage Usecase',
    // icon: 'setting',
    component: './designuser/usecases/Create',
    exact: false,
  },
  {
    path: '/usecase/analytics',
    name: 'Usecase Analytics',
    access: 'designUser',
    icon: 'LineChartOutlined',
    component: './CreateAnalytics',
  },
  {
    path: '/usecase/analytics/:id',
    hideInMenu: true,
    access: 'designUser',
    name: 'Usecase Analytics',
    component: './Analytics',
    exact: false,
  },
  {
    path: '/questionnaires',
    name: 'Questionnaires',
    access: 'designUser',
    icon: 'question',
    component: './CreateQuestionnaires',
  },
  {
    path: '/questionnaires-toolkit',
    name: 'Questionnaires toolkit',
    icon: 'EditOutlined',
    access: 'designUser',
    component: './QuestionnairesNew',
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    icon: 'RobotOutlined',
    access: 'designUser',
    component: './chatbot/DialogQuestionnaires',
  },
  // {
  //   path: '/design',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Chatbot',
  //   routes: [
  //     { path: '/design/create', icon: 'smile', component: './Chatbot' },
  //     { component: './404' },
  //   ],
  // },
  { path: '/', redirect: '/usecases' },
  { component: './404' },
];
