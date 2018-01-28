import { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { styles } from '../../css/materialUi';
import { loadMoviesforFilter, filterMovies } from '../actions/MoviesActions';

class FilterMovies extends Component {

  constructor() {
    super();
    this.filterList = this.filterList.bind(this);
  }

  filterList(event) {
    let query = event.target.value;
    this.props.filterMovies(query);
  }

  render() {
    let input = '';

    return (
      <div>
        <h3>Wyszukaj filmu</h3>
        <hr/>
        <input type="text" placeholder="Szukaj kursu"  onChange={this.filterList} className="form-control"/>
        <hr/>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn style={styles.htable}>Numer</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Nazwa</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Kategoria</TableHeaderColumn>
              <TableHeaderColumn style={styles.htable}>Cena</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          { this.props.filter_list.map((item, index) => (
            <TableRow key={index}>
              <TableRowColumn style={styles.btable}>{index+1}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.name}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.category}</TableRowColumn>
              <TableRowColumn style={styles.btable}>{item.price} zł</TableRowColumn>
            </TableRow>))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default connect(state => ({
  filter_list: state.FilterReducer.list,
  basket: state.BasketReducer.list
}),{ loadMoviesforFilter, filterMovies })(FilterMovies);
