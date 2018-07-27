// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

export type Props = {
  success: boolean,
}
class Input extends Component<Props> {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline" >
        <input data-test-id="input-box" className="mb-2 mx-sm-3" id="word-guess" type="text" placeholder="enter guess" />
        <button data-test-id="submit-button" type="submit" className="btn btn-primary mb-2" type="submit">Submit</button>
      </form>
    );
    return (
      <div data-test-id="component-input">
        { contents }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps)(Input)