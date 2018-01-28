import { Component } from 'react';
import { connect } from 'react-redux';

import { loadCategory } from '../actions/MoviesActions';

class MoviesCategory extends Component {

  componentWillMount() {
    this.props.loadCategory();
  }

  render() {
    let id = this.props.params.category;
    let category = this.props.category.filter(item => {
        return item.id == id
    });
    let filter = this.props.movies.filter(item => {
          return item.category == category[0].name
    })

  return(
    <div>
      <hr/>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th className="htable">Nazwa filmu</th>
            <th className="htable">Cena</th>
            <th className="htable">Koszyk</th>
          </tr>
        </thead>
        <tbody>
        {
          filter.map((item, index) => (
            <tr key={index}>
              <td className='btable'>{item.name}</td>
              <td className='btable'>{item.price}</td>
              <td className='btable'>{item.available ? "Dostepny" : "Wypożyczony"}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )}
}

 export default connect(state => ({
  category: state.CategoryReducer.list,
  movies: state.MoviesListReducer.movies }),{ loadCategory })(MoviesCategory);
