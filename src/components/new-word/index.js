import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reset } from '../../actions'

export class UnconnectedNewWord extends Component {
  render() {
    return this.props.success && (
      <button
        data-test-id="submit-button"  
        className="btn btn-secondary mb-2" 
        onClick={this.props.reset}>
        New Word
      </button>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { reset })(UnconnectedNewWord)