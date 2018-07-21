// @flow
import React from 'react'

export type Props = {
  success: boolean
}
export default (props: Props) => {
  const { success } = props;
  if (success) {
    return (
      <div data-test-id="component-congrats">
        <span data-test-id="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>    
    )
  }
  return <div data-test-id="component-congrats" />;
}
