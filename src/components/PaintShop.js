import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
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

const cube = {
  'font-size': '3em',
  width: '2em',
  margin: '1em auto',
  'transform-style': 'preserve-3d',
  transform: 'rotateX(-10deg) rotateY(1deg)',
}
const row = {
  margin: '10px',
  width: '300px',
  'justify-content': 'space-between'
}
const update = {
  background: '#737272',
  color: 'white',
  border: 'orange solid 2px',
  width: '70px',
  'text-align': 'center',
  height: '20px'
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
    console.log(this.props);
    let color = this.props.color;
    console.log(this.state);
    return (
      <div className="">
        <div style={{margin: '10%'}}>
          <h1 style={{color: '#76FF03'}}>George's Paint Shop</h1>
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
             Top
          </div>
          {/* <div style={{background: 'orange',height: '50px'}}></div> */}
          <div style={{
            ...block,
            transform: 'translateZ(1em)',
            background: `repeating-linear-gradient(to right, black, black 50px, ${color} 50px, ${color} 100px)`
          }}>
          Bottom
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


          <div style={{'margin-top': '5%'}}>
            <div className="row" style={{...row,'display': 'flex'}}>
              <div style={update}>Paints</div>
              <div style={update}>Brushes</div>
              <div style={update}>Tape</div>
            </div>
            <h4>{`Now selling ${color} paint`}</h4>
          <div className="update-mentions">
            {/* Click here to pull down the latest mentions */}
            {/* Display only if there are pending mentions */}
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
          {/* {this.state.mentions.map((mention, i) => {
            return <Mention key={i} mention={mention} />
            })
         } */}
         </div>
       </div>
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
