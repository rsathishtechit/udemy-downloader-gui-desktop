import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login';
import Sidebar from './components/sidebar';
import 'antd/dist/antd.css';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/" component={Sidebar} />
      </Switch>
    </Router>
  );
}
