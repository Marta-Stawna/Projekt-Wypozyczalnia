import { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { toggleAvailable,addBasket } from './actions/MoviesActionCreator';
import { loadMovies } from './actions/MoviesActions';
import Basket from './components/Basket';
import { styles } from '../css/materialUi';

class MoviesList extends Component {

  constructor() {
    super();
    this.state = ({
      toggle: false
    });
    this.open = this.open.bind(this);
  }

  open() {
    if(this.state.toggle){
      this.setState({
        toggle: false
      })
    } else {
      this.setState({
        toggle: true
      })
    }
  }

  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    return(
      <div>
        { this.props.children ? this.props.children :
        <div>
        <h3> Twoj koszyk</h3>
        <hr/>
          { this.state.toggle ? <Basket/> : null }
          <button className='btn btn-default btn-block 'onClick={this.open}>{this.state.toggle? "Schowaj koszyk":"Pokaz koszyk"}</button>
        <hr/>
        <h3>Lista wszystkich filmow</h3>
        <hr/>
        <Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
            <TableRow >
              <TableHeaderColumn style={styles.htable}>Numer</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Nazwa</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Kategoria</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Cena</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Dostępność</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {
          this.props.movies.map((item, index) => {
            return(
            <TableRow key={index} >
              <TableRowColumn style={styles.btable}>{index+1}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.name}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.category}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.price} zł</TableRowColumn>
              <TableRowColumn style={styles.btable}>
              { item.available ?
                <button className="btn btn-primary active" onClick={() => (this.props.toggleAvailable(item.id),
                  this.props.addBasket(item.name,item.price,item.id))}>Dodaj do koszyka
                </button>:
              <button id="reserved" className="btn btn-primary disabled">Wypozyczony</button>
              }
              </TableRowColumn>
            </TableRow>
          )})
        }
        </TableBody>
      </Table>
    </div>}
  </div>
  )}
}
export default connect(state => ({
  movies: state.MoviesListReducer.movies,
  basket: state.BasketReducer.list
}),{ addBasket, toggleAvailable, loadMovies})(MoviesList);
