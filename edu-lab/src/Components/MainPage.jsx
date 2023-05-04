import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Timetable from './Timetable';
import Teachers from './Teachers';
import Classmates from './Classmates';
import Messages from './Messages';

const MainPage = () => {
  return (
    <div>
      <nav>
        {/* Add your logo and user profile display here */}
        <div>
          <span>Hello, user name</span>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <button>Notifications</button>
          <button>Settings</button>
          {/* Add your user profile display here */}
        </div>
      </nav>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/timetable">Time Table</NavLink>
            </li>
            <li>
              <NavLink to="/teachers">Teachers</NavLink>
            </li>
            <li>
              <NavLink to="/classmates">Classmates</NavLink>
            </li>
            <li>
              <NavLink to="/messages">Messages</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/timetable">
            <Timetable />
          </Route>
          <Route path="/teachers">
            <Teachers />
          </Route>
          <Route path="/classmates">
            <Classmates />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainPage;
