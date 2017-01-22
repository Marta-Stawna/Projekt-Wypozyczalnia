export const ACTIONS={
  FILTER_LIST:Symbol('FILTER_LIST'),
  SET_MOVIES:Symbol('SET_MOVIES'),
  ADD_BASKET:Symbol('ADD_BASKET'),
  TOGGLE_AVAILABLE:Symbol('TOGGLE_AVAILABLE'),
  REMOVE_FROM_BASKET:Symbol('REMOVE_FROM_BASKET'),
  SET_DATA:Symbol('SET_DATA'),
  LOAD_CATEGORIES:Symbol('LOAD_CATEGORIES'),
  SET_ABOUT:Symbol('SET_ABOUT'),
}

function MoviesListReducer(state={movies:[]},action){
  switch(action.type){
    case ACTIONS.SET_MOVIES:
      console.log("movies")
      return {...state, movies:action.movies};
    case ACTIONS.TOGGLE_AVAILABLE:
    console.log('zmiana',state.films);
      return {...state,movies:state.movies.map((film,index)=>{
          if(index+1==action.id){
            film.available=!film.available;
          }
          return film;
    })}
    default:
      return state;
  }
}

export default MoviesListReducer;
