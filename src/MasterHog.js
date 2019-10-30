import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "Blue",
    }
  }

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }

  mapBabyHogs = () => {
    return offspring.map( baby => {
      return <BabyHog key={baby.id} name={baby.name} hobby={baby.hobby} eyeColor={this.state.eyeColor}/>
    })
  }

  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="Blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="Sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="Glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          {this.mapBabyHogs()}
        </ul>

      </div>
    )
  }

}
