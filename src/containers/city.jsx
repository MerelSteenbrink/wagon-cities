import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {setActiveCity} from '../actions'

class City extends Component {
    render(){
        return(
            <div className={"city" + (this.props.activeCity.name === this.props.name ? " active" : "")}
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

function mapStateToProps(state){
    return { activeCity: state.activeCity}
}

export default connect(mapStateToProps, mapDispatchToProps )(City);