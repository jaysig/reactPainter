import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import moment from 'moment';
// import { Field, reduxForm } from 'redux-form'
// import DropdownList from 'react-widgets/lib/DropdownList'
import * as actions from '../actions/paints';

const block = {
  position: 'absolute',
  height: '2em',
  width: '600px',
  'text-align': 'center',
  'line-height': '2em'

}

const sign = {
  // 'font-size': '3em',
  // display: 'flex',
  // 'justify-content': 'right',
  'margin-left': '30%',
  width: '40%',
  background: '#666',
  'text-shadow': '0px 1px 0px rgba(255,255,255,.5)',
  opacity: '30%'
}

const cube = {
  'font-size': '3em',
  width: '2em',
  margin: '1em auto',
  'transform-style': 'preserve-3d',
  transform: 'rotateX(-10deg) rotateY(1deg)',
}
const row = {
  margin: '10px',
  'font-family': 'Lato, sans-serif',
  'margin-left': '10%',
  width: '400px',
  'justify-content': 'space-between'
}
const daytime = {
  background: '#F6F6F6',
  color: 'black'
}
const nighttime = {
  background: '#111'
}
const update = {
  color: 'white',
  border: 'orange solid 2px',
  width: '25%',
  padding: '1%',
  'text-align': 'center',
  height: '40px'
}
const door = {
  background: 'url("http://dc428.4shared.com/img/-vayshJ-/s3/ClassDoor.png")',
  'background-repeat': 'no-repeat',
  'background-position': 'center center',
  color: 'white',
  // border: 'orange solid 2px',
  width: '30%',
  'text-align': 'center',
  height: '250px'
}
const lWindow = {
  background: '#737272',
  color: 'white',
  border: 'orange solid 2px',
  width: '200px',
  'text-align': 'center',
  height: '75px'
}
class PaintShop extends Component {

  constructor(props) {
    super(props);
    this.changePaint = this.changePaint.bind(this);
  }

  changePaint = (event) => {
    this.props.changeColor(event.target.value);
  }

  render() {
    let time = moment().startOf('day').fromNow().split(" ")[0]
    time = parseInt(time);
    console.log(7 > time);
    console.log(time < 17);
    let timeOfDay = 7 < time && time < 17 ? daytime : nighttime;
    console.log(timeOfDay,'tod');
    let color = this.props.color;
    return (
      <div className="" style={{'margin-left': '10%'}}>
        <div id="roof">
          <div id="depth" style={{
            // transform: 'rotateX(90deg) translateZ(1em)',
            // position: 'absolute',
            transform: 'skewX(-15deg)',
            'margin-left': '.93%',
            'border-radius': '10px 10px 0 0',
            height: '5em',
            width: '600px',
            'text-align': 'center',
            'line-height': '2em',
            background: `repeating-linear-gradient(to right, black, black 50px, ${color} 50px, ${color} 100px)`
          }}>

          </div>
          {/* <div style={{background: 'orange',height: '50px'}}></div> */}
          <div style={{
            ...block,
            transform: 'translateZ(1em)',
            background: `repeating-linear-gradient(to right, black, black 50px, ${color} 50px, ${color} 100px)`
          }}>
          </div>
        </div>
        <div>
          <div style={{
            background: 'url("https://image.freepik.com/free-photo/brick-wall-texture-background_1137-89.jpg")',
            margin: '0 2%',
            height: '30%',
            width: '550px'
          }}>
            <div style={{height: '30', 'margin-top': '2%',}}>
              {/* <div style={sign}>
                <p><h1 style={{color: '#76FF03'}}>George's Paint Shop</h1></p>
              </div> */}
            </div>
            <div className="row" style={{...row,'display': 'flex'}}>
              <div style={{...update, ...timeOfDay}}><p>Paints</p></div>
              <div style={{...update, ...timeOfDay}}><p>Brushes</p></div>
              <div style={{...update, ...timeOfDay}}><p>Tape</p></div>
            </div>
            <div style={{height: '30', 'margin-top': '2%',}}>
            </div>
            <div className="row" style={{...row,'display': 'flex'}}>
              <div style={door}></div>
              <div style={{...lWindow, ...timeOfDay}}>
                <h3>George's Paint Shop</h3>
              </div>
            </div>
          {/* {this.state.mentions.map((mention, i) => {
            return <Mention key={i} mention={mention} />
            {color: '#76FF03'}
            })
         } */}
         </div>
       </div>
       <div className="update-mentions">
         <h4>{`Now selling ${color} paint`}</h4>
         <button className="pending" onClick={this.updateMentions}> Change Paint</button>
         <select
           name="paintChanger"
           id=""
           onChange={this.changePaint}
           >
           <option value="red">Red</option>
           <option value="blue">Blue</option>
         </select>
       </div>
       {/* <div className="cube" style={cube}>
         <div id="depth" style={{
           ...block,
           transform: 'rotateX(90deg) translateZ(1em)',
           background: `repeating-linear-gradient(to right, white, white 50px, ${color} 50px, ${color} 100px)`
         }}>
            Top
         </div>
         <div style={{
           ...block,
           transform: 'translateZ(1em)',
           background: `repeating-linear-gradient(to right, white, white 50px, ${color} 50px, ${color} 100px)`
         }}>
         Bottom
         </div>
       </div> */}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    color: state.paints.color
   };
}
export default connect(mapStateToProps, actions)(PaintShop)
