
import React, { Component } from 'react';
import MyContext from './MyContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends Component {
  render() {
    const { red, blue, yellow } = this.context.cars
    const {moveCar } = this.context;
    console.log(this.context)
    return (
      <div>
        <div>
          <img
          //  className="car-left"
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !red)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            //  className="car-left"
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !blue)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            // className="car-left"
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !yellow)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
  }
};

Cars.contextType = MyContext;

export default Cars;