/**
 * @description 路由管理
*/
import Home from '../pages/home/home'
import APP  from '../pages/app/app'
import { Router, Route, Link } from 'react-router'
const routes = {
    path: '/',
    component: Home,
    childRoutes: [
        { path: 'app', component: APP },
      ]
}
export default routes
  