import axios from 'axios';

import { setMovies,filter,setMoviesforFilter,setCategory ,about} from './MoviesActionCreator';
import { URLS } from '../../configuration';

export function loadCategory(){
  return function (dispatch){
    return axios.get(URLS.MOVIES_LIST_CATEGORY)
            .then((response) => {
              console.log(response.data);
            dispatch(setCategory(response.data.category))});
  }
}

export function loadMovies() {
  return function (dispatch) {
    return axios.get(URLS.MOVIES_LIST)
            .then((response) => {
            dispatch(setMovies(response.data.data))});
  };
}

export function filterMovies(name) {
   return function (dispatch) {
     axios.get(URLS.MOVIES_LIST)
             .then((response) => dispatch(setMoviesforFilter(response.data.data))).then(()=>dispatch(filter(name)))
           };
 }
 export function setAbout() {
    return function (dispatch) {
      axios.get(URLS.SET_ABOUT)
              .then((response) => {
              dispatch(about(response.data))})
            };
  }

 export function saveOrder(firstname,lastname,number,movies){
   let order={
     form: {
         firstName: firstname,
         lastName: lastname,
         phone: number
       },
     movieIds: movies
   }
   return function(dispatch){
      return axios.post(URLS.SET_ORDER,{order})
          .then((response) =>{
              window.location ="http://localhost:3000/movies"
              alert("Wpożyczono");
            }
          )
          .catch(error => {
            alert('ERROR', error);
          })
}}
