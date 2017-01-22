import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MoviesListReducer from './moviesList/reducers/MoviesListReducer';
import FilterReducer from './moviesList/reducers/FilterReducer';
import BasketReducer from './moviesList/reducers/BasketReducer';
import CategoryReducer from './moviesList/reducers/CategoryReducer';
import  AboutReducer from './moviesList/reducers/AboutReducer';


const store = createStore(combineReducers({
  AboutReducer,
  MoviesListReducer,
  FilterReducer,
  BasketReducer,
  CategoryReducer
}), {}, applyMiddleware(thunk));

export default store;

export function getState() {
  return store.getState();
}
