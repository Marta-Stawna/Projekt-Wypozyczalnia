import {ACTIONS} from './MoviesListReducer';

function CategoryReducer(state={list:[]},action){
  switch(action.type){
    case ACTIONS.LOAD_CATEGORIES:
      return{
        ...state ,list:action.list
      }
    default:
      return state;
  }
}

export default CategoryReducer;
