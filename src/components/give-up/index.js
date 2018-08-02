import React, { Component } from 'react';
import { connect } from 'react-redux'
import { endGame } from '../../actions'

export class UnconnectedGiveUp extends Component {
  render() {
    if (this.props.gameOver && !this.props.success) {
      return (
        <div className="alert alert-danger" data-test-id="giveup-message">
          <div>The secret word was "{this.props.secretWord}"</div>
          <br/>
          <div>Better Luck next time!</div>
        </div>
      )
    }
    if (this.props.success) return null;
    return (
      <button
        data-test-id="give-up-button"  
        className="btn btn-danger mb-2" 
        onClick={this.props.endGame}>
        Give Up
      </button>
    )
  }
}

const mapStateToProps = ({ gameOver, success, secretWord }) => {
  return { gameOver, success, secretWord }
}

export default connect(mapStateToProps, { endGame })(UnconnectedGiveUp)