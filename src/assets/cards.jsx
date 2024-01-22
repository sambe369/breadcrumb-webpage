import React, { Component } from 'react'
import Card from './cardUI';


class Cards extends Component{

  render(){
    return(
      <div className='card-main'>
        <div className="container card-container front">
          <div className="row justify-content-center">
            <div className="col-md-3 cards"> <Card /> </div>
            <div className="col-md-3 cards"> <Card /> </div>
            <div className="col-md-3 cards"> <Card /> </div>
          </div>
        </div>

        <div className="container card-container front">
          <div className="row justify-content-center">
            <div className="col-md-3 cards"> <Card /> </div>
            <div className="col-md-3 cards"> <Card /> </div>
            <div className="col-md-3 cards"> <Card /> </div>
          </div>
        </div>

        
      </div>
      
    );
  }
}

export default Cards;

