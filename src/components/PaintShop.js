import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/paints';

class PaintShop extends Component {

  constructor(props) {
    super(props);
    this.changePaint = this.changePaint.bind(this);
    this.state = {
      color: this.props.color,
    }
  }

  changePaint = () => {
    this.props.changeColor();
  }

  render() {
    return (
      <div className="">
        <div>
          <h1 style={{color: '#76FF03'}}>George's Paint Shop</h1>
          <div>
            <h4>Hello</h4>
          <div className="update-mentions">
            {/* Click here to pull down the latest mentions */}
            {/* Display only if there are pending mentions */}
            <button className="pending" onClick={this.updateMentions}> Change Paint</button>
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
