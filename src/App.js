import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

 const basicColor = {
    hex: 'fff8dc',
    name: 'color name' 
 };

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        colors: [basicColor]
      };
      this.getColors = this.getColors.bind(this);
  }

  getColors () {
    axios
      .get("http://www.colr.org/json/colors/random/7")
      .then(response => {
        const {colors} = this.state;
        colors.push(response.data.colors[0])
        this.setState({ colors : response.data.colors });
      })
    .catch(error => console.log( error ));
  }

  componentDidMount() {
    this.getColors();
  }

  render() {
    const { colors } = this.state;
    return (
      <div className="App"
        style={{
          background:`linear-gradient(#${colors[0].hex},#${colors[0].hex})`
        }}
      >
        <p>{colors[0].tags ? colors[0].tags[0].name:""}</p>
        <button
        style={{
          color:`#${colors[0].hex}`
        }}
        onClick={this.getColors}
        >
          RANDOM
        </button>
        <p>{colors[0].tags ? colors[1].tags[0].name:""}</p>
      </div>
    );
  }
}
export default App;
