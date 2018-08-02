import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reset } from '../../actions'

export class UnconnectedNewWord extends Component {
  render() {
    return this.props.gameOver && (
      <button
        data-test-id="new-word-button"  
        className="btn btn-secondary mb-2" 
        onClick={this.props.reset}>
        New Word
      </button>
    )
  }
}

const mapStateToProps = ({ gameOver }) => {
  return { gameOver }
}

export default connect(mapStateToProps, { reset })(UnconnectedNewWord)