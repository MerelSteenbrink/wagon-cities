import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  City from './city';

import { getCities } from '../actions'

class CityList extends Component {
  componentWillMount(){
    this.props.getCities();
  }

    render(){
        return <div className="city-list col-sm-7">
          { this.props.cities.map(city => {
              return <City name={city.name} key={city.name}/>
          })}
        </div>
    }
}

function mapStateToProps(state){
  return {
    cities: state.cities
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { getCities: getCities}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);