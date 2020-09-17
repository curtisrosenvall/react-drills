// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// export default class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       foods: ["spaghetti", "CURTIS", "sushi", "bologna", "cheese"]
//     };
//   }

//   render(){
//     let foodsToDisplay = this.state.foods.map((element, index) => {
//       return <h2 key={index}>{element}</h2>
//     });

//     return <div className="App">{foodsToDisplay}</div>
    
//   }
// }

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

export default class App extends Component {
  constructor (){
    super();

    this.state = {
      foods: ["Curtis", "Jared", "Diana", "Rebecca"]
    };
  }
  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return <div className="App">{foodsToDisplay}</div>
    

    
  }
}