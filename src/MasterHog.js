import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }


  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }


  render() {
    const hogs = offspring.map(hog => (
      <BabyHog eyeColor={this.state.eyeColor} key={hog.id} name={hog.name} hobby={hog.hobby} />
    ));

    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={e => this.changeEyeColor(e)} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={e => this.changeEyeColor(e)} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={e => this.changeEyeColor(e)} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>



        <ul className="hoglist">
          { hogs }
        </ul>

      </div>
    )
  }

}
