import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
    render(){
      return ( <div className="active-city">
             <p> { this.props.activeCity.name}</p>
             <p> { this.props.activeCity.address}</p>
             </div>)
    }
}

function mapStateToProps(state){
 return {activeCity: state.activeCity}
}

export default connect(mapStateToProps)(ActiveCity);