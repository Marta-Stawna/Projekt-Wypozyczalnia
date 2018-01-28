import { Link } from 'react-router';
import { Component } from 'react';
import Header from './components/Header';


class App extends Component {

  render(){
    return(
      <div>
        <Header/>
        <div className="nav">
          <Link to='/about'>O nas</Link>{" "}
          <Link to='/movies'>Lista</Link>{" "}
          <Link to='/filter'>Wyszukaj</Link>{" "}
          <Link to='/form'>Formularz</Link>{" "}
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
  )}
}

export default App;
