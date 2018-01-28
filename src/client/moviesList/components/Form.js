import { Component } from 'react';
import { connect } from 'react-redux';

import { saveOrder } from '../actions/MoviesActions';

class Form extends Component {

  constructor() {
    super();
    this.sendOrder = this.sendOrder.bind(this);
  }

  sendOrder() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let id_borrowed = [];
    this.props.basket.map((item, index) => id_borrowed.push(item.id));
    this.props.saveOrder(firstName, lastName, phone,id_borrowed);
  }

  render() {
    let suma = 0;
    return(
      <div>
      <h3> Formularz </h3>
      <hr/>
        <form onSubmit={this.sendOrder}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Imie</label>
              <div className="col-sm-10">
                <input type="text"  className="form-control" id="firstName"  placeholder="Imie" required />
              </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nazwisko</label>
              <div className="col-sm-10">
                <input type="text" required className="form-control" id="lastName" placeholder="Nazwisko"/>
              </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nr telefonu</label>
              <div className="col-sm-10">
                <input type="text" id="phone" pattern="^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{3}$" className="form-control"  placeholder="123-123-123" required/>
              </div>
          </div>
          <hr/>
          <div> W koszyku {this.props.basket.length} <span className="glyphicon glyphicon-shopping-cart"></span>
          <hr/>
            <ul className="list-group">
              {
                this.props.basket.map((item, index) =>  {
                  { suma = suma + item.price}
                  return (
                    <div key={index}>
                      <li className="list-group-item">{item.name} - {item.price}zł</li>
                    </div>
                  )
                })
              }
           </ul>
           <strong> Do zaplaty : {suma} zł </strong>
         </div>
         <hr/>
            <input type="submit" className="btn btn-primary" value="Zamów"/>
         </form>
      </div>
    );
  }
}

export default connect(state => ({
  basket: state.BasketReducer.list,
  movies: state.MoviesListReducer.movies }), { saveOrder })(Form);
