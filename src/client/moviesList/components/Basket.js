import { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { addBasket, removeBasket, toggleAvailable } from '../actions/MoviesActionCreator';

class Basket extends Component {

    render() {
    let suma = 0;
      return (
      <div>
        <table className="table table-condensed">
          <thead >
            <tr>
              <th className="htable">Nazwa filmu</th>
              <th className="htable">Cena</th>
              <th className="htable">Koszyk</th>
            </tr>
          </thead>
          <tbody>
          { this.props.basket.map((item, index) => (
            <tr key={index}>
              <td className='btable'>{item.name}</td>
              <td className='btable'>{item.price}</td>
              <td className='btable'>
                <button className="btn btn-danger" onClick={() => (this.props.removeBasket(index),this.props.toggleAvailable(item.id))}>
                  Usuń z koszyka
                </button>
              </td>
            </tr>)) }
          </tbody>
        </table>

        <div className="panel panel-default">
          <div className="panel-heading"><h4>Podsumowanie</h4></div>
            <div className="panel-body">
              <div className="summary">
                <div> Zamowianio: {this.props.basket.length} szt </div>
                <div>{ this.props.basket.map(item => {
                    { suma = suma + item.price }
                })} Cena : {suma} zł
                </div>
                </div>
              </div>
            </div>
        <div>
          <Link to='/form' className="btn btn-primary btn-lg btn-block">Zamow</Link>
        </div><hr/>
      </div>
    )}
  }

export default connect(state => ({
  basket: state.BasketReducer.list,
  movies: state.MoviesListReducer.movies
}),{ addBasket, removeBasket, toggleAvailable })(Basket);
