import { ACTIONS } from './MoviesListReducer';

function FilterReducer(state = { list: [] }, action) {
  switch(action.type){
    case ACTIONS.FILTER_LIST:
      return {
        ...state, list: state.list.filter((film) =>
            film.name.toUpperCase().includes(action.name.toUpperCase())
        )}
    case ACTIONS.SET_DATA:
      return {
        ...state, list:action.movies};
    default:
      return state;
  }
}

export default FilterReducer;
