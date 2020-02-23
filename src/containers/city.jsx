import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {setActiveCity} from '../actions'

class City extends Component {
    render(){
        return(
            <div className="city"
             onClick={() => this.props.setActiveCity(this.props.city)}>
             <p> {this.props.name}</p>
             </div>
            )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setActiveCity: setActiveCity}, dispatch)
}

export default connect(null, mapDispatchToProps )(City);