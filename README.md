This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Notes on Testing

> Red - Green
Be weary of async tests that pass green. Make sure you get a failure first.

### Types of tests

Unit Tests
  - tests on piece

Integration tests
  - how multiple units work together

Acceptance / End to Ends
  - how user would actually interact

jest works more on unit and integration tests

## Primary Goal of testing
Behavior of app, NOT the implementation
Any code refactors shouldn't require rewrite of tests.
Tests should be TIME SAVERS, test behavior.

Example
  - keeps sample of times button is clicked
  - simulate and check to see if a function is called

But... this is a brittle test. Subject to much change on refactor

now if we change function name, this test will fail even if behavior remains the same.

update to state is the behavior
want to minimize state as it is an implementation
  - could just check to see if counter is updated

## No snapshots?
Too brittle, they break all the time. Extremely easy to ignore the failures. You should investigate changes, but because tests fail so frequently, its too easy to update without checking. Also, no INTENT for your tests.
Hard to tell if snapshot test meets a requirement
Use alongside traditional testing but try to avoid.

## CLick counter example


## Joto example

GUessed Words
table

Finally we have correct guess state

Congrats! You have guessed it

App with title, children components

INput

Guessed Words

Congrats message

wireframe

display instructions

output put both with title

grab random word server when app mounts, and will not change

## Redux Thunk

More flexibility for action creators

Return function instead of action
  - Thunk = function that returns a function
  - can dispatch multiple actions
  - can access current state

