import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import HomePage from './App';
import NextPage from './NextPage';
import StoryPage from './StoryPage'; 
import SignupPage from './SignupPage'; 

ReactDOM.render(
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/next-page" component={NextPage} />
    <Route path="/story-page" component={StoryPage} /> 
    <Route path="/signup" component={SignupPage} /> 
  </Router>,
  document.getElementById('root')
);
