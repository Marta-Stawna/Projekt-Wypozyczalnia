import { Component } from 'react';
import { connect } from 'react-redux';

import { setAbout } from '../actions/MoviesActions';

class About extends Component {

  componentDidMount() {
    this.props.setAbout();
  }

  render() {
    return(
      <div>
        <h3>O nas</h3>
        <hr/>
        { this.props.about }
      </div>
    )
  }
}

export default connect(state => ({ about: state.AboutReducer.list }),{ setAbout })(About);
