import {ACTIONS} from '../reducers/MoviesListReducer';

export function setCategory(list){
  return{
    type:ACTIONS.LOAD_CATEGORIES,
    list
  }
}
export function filter(name){
  return{
    type:ACTIONS.FILTER_LIST,
    name
  }
}

export function setMovies(movies){
  return{
    type:ACTIONS.SET_MOVIES,
    movies
  };
}
export function setMoviesforFilter(movies){
  return{
    type:ACTIONS.SET_DATA,
    movies
  };
}
export function about(data){
  return{
    type:ACTIONS.SET_ABOUT,
    data
  };
}

export function addBasket(name,price,id){
   return{
     type:ACTIONS.ADD_BASKET,
     name,
     price,
     id
   }
 }

 export function toggleAvailable(id){
   return{
     type:ACTIONS.TOGGLE_AVAILABLE,
     id
   }
 }

export function removeBasket(id){
  return{
    type:ACTIONS.REMOVE_FROM_BASKET,
    id
  }
}
