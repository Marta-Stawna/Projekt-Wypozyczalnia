import {ACTIONS} from './MoviesListReducer';

function AboutReducer(state={list:[]},action){
  switch(action.type){
    case ACTIONS.SET_ABOUT:
        return {...state, list:action.data};
    default:
      return state;
  }
}

export default AboutReducer;
