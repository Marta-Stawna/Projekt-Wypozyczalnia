import {ACTIONS} from './MoviesListReducer';

function FilterReducer(state={list:[]},action){
  switch(action.type){
    case ACTIONS.FILTER_LIST:
    console.log("filter",state);
      return{
        ...state, list: state.list.filter((film) =>
            film.name.toUpperCase().includes(action.name.toUpperCase())
        )}
    case ACTIONS.SET_DATA:
    console.log('set',state);
        return {...state, list:action.movies};
    default:
      return state;
  }
}

export default FilterReducer;
