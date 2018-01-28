import { ACTIONS } from './MoviesListReducer';

function BasketReducer(state = { list: [] }, action) {
  switch(action.type){
    case ACTIONS.ADD_BASKET:
      return {
        ...state, list:[...state.list,
        {
          name:action.name,
          price:action.price,
          id:action.id,
          order:false
        }]
      }
    case ACTIONS.REMOVE_FROM_BASKET:
      return {
        ...state, list:state.list.splice(0,action.id).concat(
       state.list.slice(action.id+1))
      }
    default:
      return state;
  }
}

export default BasketReducer;
