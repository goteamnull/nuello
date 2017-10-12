# Testing Patterns

## Components
Components that rely on specific state or props should be rendered using mocked state/props so that the UI can be verified as correct.

## Redux Reducers
Reducers should be heavily unit tested. These are the heart of the application, connecting the UI to our state. All utilized action types should be tested for each reducer. There should also be a single test verifying that unknown action types simply return the state.

There are examples [here](http://redux.js.org/docs/recipes/WritingTests.html#reducers).

## UI Interactions

Rails system tests (leveraging capybara) should be used to test UI interactions, rather than jest/react tests.

## API

The Rails API should be tested using Rails integration tests.
