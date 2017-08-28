import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../actions/paints';
import * as styles from './paintShopStyle';

const daytime = {
  background: '#F6F6F6',
  color: 'black'
}
const nighttime = {
  background: '#111'
}

class PaintShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owner: 'George'
    }
  }

  changePaint = (event) => {
    this.props.changeColor(event.target.value);
  }

  handleChange = (event) => {
  var value = event.target.value;

  this.setState(function () {
    return {
      owner: value
    }
  });
}

  render() {
    let time = parseInt(moment().format('k'),10);
    let timeOfDay = 7 < time && time < 17 ? daytime : nighttime;
    let owner = this.state.owner;
    let color = this.props.color;
    return (
      <div style={styles.offsetLeftStyle}>
        <div id="roof">
          <div style={{
            ...styles.slantedBlockStyle,
            background: `repeating-linear-gradient(to right, black, black 50px, ${color} 50px, ${color} 100px)`
          }}>
          </div>
          <div style={{
            ...styles.verticalBlockStyle,
            background: `repeating-linear-gradient(to right, black, black 50px, ${color} 50px, ${color} 100px)`
          }}>
          </div>
        </div>
        <div id="building">
          <div style={styles.brickWallStyle}>
            <div style={styles.spacerStyle}>
            </div>
            <div style={{...styles.rowStyle,'display': 'flex'}}>
              <div style={{...styles.updateStyle, ...timeOfDay}}><p>Paints</p></div>
              <div style={{...styles.updateStyle, ...timeOfDay}}><p>Brushes</p></div>
              <div style={{...styles.updateStyle, ...timeOfDay}}><p>Tape</p></div>
            </div>
            <div style={styles.spacerStyle}>
            </div>
            <div style={{...styles.rowStyle,'display': 'flex'}}>
              <div style={styles.doorStyle}></div>
              <div style={{...styles.lWindowStyle, ...timeOfDay}}>
                <h3>{`${owner}'s Paint Shop`}</h3>
              </div>
            </div>
         </div>
       </div>
       <div id="changeForm" style={styles.formStyle}>
         <h4>{`Now selling ${color} paint`}</h4>
         <div>
           <p>Change Paint <select
             name="paintChanger"
             onChange={this.changePaint}
             >
               <option value="red">Red</option>
               <option value="blue">Blue</option>
               <option value="yellow">Yellow</option>
               <option value="orange">Orange</option>
               <option value="purple">Purple</option>
             </select></p>
             <label htmlFor="owner" className="header">Change Owner</label>
             <input
              type="text"
              label="Change Owner"
              id="owner"
              placeholder='Store Owner'
              autoComplete='off'
              value={this.state.owner}
              onChange={this.handleChange}
            />
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
