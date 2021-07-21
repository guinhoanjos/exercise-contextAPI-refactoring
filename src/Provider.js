import React from 'react';
import MyContext from './MyContext';

class Provider extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: {
                redCar: false,
                blueCar: false,
                yellowCar: false,
            },
            signal: 'red',   
        }
        this.moveCar = this.moveCar.bind(this);
        this.changeSignal = this.changeSignal.bind(this);
    }
    
    moveCar(car, side) {
        this.setState({
          cars: {
            ...this.state.cars,
            [car]: side,
          },
        });
      };
      changeSignal(cor){
        this.setState({
            ...this.state,
            signal: cor,
        })
      }
    render() {
        const { children } = this.props;
        const context = {
            ...this.state,
            moveCar: this.moveCar,
            changeSignal: this.changeSignal,
        }
        return(
            <MyContext.Provider value={context}>
                {children}
            </MyContext.Provider>
        )
    }
}

export default Provider;