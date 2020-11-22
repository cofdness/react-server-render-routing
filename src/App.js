import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import RedirectWithStatus from "./RedirectWithStatus";
import About from "./About";
import NotFound from "./NotFound";
import DashBoard from "./DashBoard";
import Home from "./Home";
import Routes from "./routes";

export default () =>
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>

        <Switch>
            {Routes.map((route, index) => <Route {...route} key={index}/>)}
            <RedirectWithStatus status={301} from="/users" to="/profiles" />
            <RedirectWithStatus status={302} from="/courses" to="/dashboard" />
        </Switch>
    </div>;
