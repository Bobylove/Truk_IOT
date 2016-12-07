import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChangeStatus} from '../actions/index';
import app from './donnees';

class Select extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentDidMount(){
   this.setState({
      items: app
   })
  }
  update( e ){
    this.props.ChangeStatus(this.props.global, JSON.parse(e.target.value));
  }
  
  render() {
    let items = this.state.items.map(item => {
      let tab = JSON.stringify([item.Phone,item.Entreprise,item.floor,item.rdc]);
      return <option id="option" onChange={this.update.bind(this)} className="item" value={tab} key={item.Entreprise}>{item.Entreprise}</option>
    });
    
    return(
      <div className="Select">
      
      <select className="selectTel" onChange={this.update.bind(this)} >
      {items}
      </select>


      </div>
    );
  }
}


function matchStateToProps(state){
  return {
      global: state.global
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ChangeStatus : ChangeStatus}, dispatch);
}

export default connect(matchStateToProps, matchDispatchToProps)(Select);