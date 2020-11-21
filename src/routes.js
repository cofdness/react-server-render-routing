import App from './App';
import Home from "./Home";
import Posts from "./Posts";
import Todos from "./Todos";
import NotFound from "./NotFound";

import loadData from './helpers/loadData';
import DashBoard from "./DashBoard";
import About from "./About";

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/posts',
        component: Posts,
        loadData: () => loadData('posts')
    },
    {
        path: '/todos',
        component: Todos,
        loadData: () => loadData('todos')
    },
    {
      path: '/dashboard',
      component: DashBoard
    },
    {
        path: '/about',
        component: About
    },
    {
        component: NotFound
    }
];

export default Routes;