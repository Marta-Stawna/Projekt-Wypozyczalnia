require('../css/main.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, IndexRedirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import store from './store';
import MoviesList from './moviesList/MoviesList';
import About from './moviesList/components/About';
import Form from './moviesList/components/Form';
import FilterMovies from './moviesList/components/Filter';
import MoviesCategory from './moviesList/components/MoviesCategory';
import App from './App';

window.React = React;
window.ReactDOM = ReactDOM;

try {
  injectTapEventPlugin();
} catch (e) {
}

ReactDOM.render((
<Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="/movies" component={MoviesList}>
                <Route path=":category" component={MoviesCategory}/>
              </Route>
              <Route path="/form" component={Form}/>
              <Route path="/about" component={About}/>
              <Route path="/filter" component={FilterMovies}/>

            </Route>
        </Router>
    </MuiThemeProvider>
</Provider>
        ), document.getElementById('root'));

module.hot.accept();
