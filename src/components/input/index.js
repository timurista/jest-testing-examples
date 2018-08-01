// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../../actions';

export type Props = {
  success: boolean,
  guessWord: any => any,
}

export type RefObject = { current: any, };

export class UnconnectedInput extends Component<Props> {
  inputBox: RefObject = React.createRef();
  
  submitGuessedWord = (event: Event) => {
    event.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline" >
        <input 
          data-test-id="input-box"
          ref={this.inputBox} 
          className="mb-2 mx-sm-3" 
          id="word-guess" 
          type="text" 
          placeholder="enter guess" />
        <button 
          data-test-id="submit-button" 
          type="submit" 
          className="btn btn-primary mb-2" 
          onClick={this.submitGuessedWord}
          type="submit">
          Submit
        </button>
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)