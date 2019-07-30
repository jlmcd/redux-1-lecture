This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux 1

### `List.js` and `Add.js`

* Create components called `List.js` and `Add.js`, both children of `App.js`. 
  * We will store our list array on state in `List.js`, and an input box with a button in `Add.js`.

### Draw the Tree

* Note the challenges/complexity in updating an array in a sibbling's state.
* We are going to use redux to solve this issue.

### `npm i redux`

* Create a file called `store.js` and import `{createStore}` from the redux package.

### `store.js`

* Make some sections in the file (I just do some comments to visually display these):
  * Initial state
  * Action constants
  * Reducer
  * Exporting the reducer
* Create an initialState object that holds an array of items to display.
* Create a basic reducer with a switch statement. We only need the default case to return state for now.
* Export default the invocation of `createStore` with our reducer as a parameter.
* Now is a good opportunity to have the class install the redux devtools from <a href='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en'>here</a>.

### Hook up `List.js`

* We want `List.js` to retrieve our data being held in our redux state.
* In the constructor, invoke the `getState` method found on the redux store object.
  * Save the results from our getState method on a variable called `reduxState`
  * Use `reduxState` to assign the list on redux to our `List.js` component's state.
* We should be able to see our list from redux if we map over the array in the render function.

### Dispatch some actions

* We want our `Add.js` component to be able to send the value of its input box to redux and add to the list.
* First in the store:
  * Create an action constant called `ADD_TO_LIST`, and export it.
  * Create a case in our switch statement for adding the payload to the list on state.
* Now in Add.js: 
  * Create a `handleChange` function that updates an input value on state.
  * Import `ADD_TO_LIST` from our store.
  * Create an `add` method that will send our data to the reducer.
    * `add` should use the `dispatch` method found on the redux store object.
    * `dispatch` takes an object as a parameter, with both a `type` of `ADD_TO_LIST` and a `payload` of `this.state.input`. This is our action object. 
  * Connect the `add` method to our button via an onClick event listener
* Now is a good time to open the redux dev tools and guide the students through the setup. Inevitably there will be students whose devtools show information from another tab they have open. In that case, here is the code to implement:
```diff
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

### Subscribe to see changes

* We want our `List.js` comopnent to see any changes in our redux store and rerender appropriately. 
* Use the `store.subscribe` method inside of a `componentDidMount`.
  * Demonstrate that `store.subscribe` is going to run a callback function each time we make a change to our redux store by console logging inside of its callback function.
  * Use the `store.getState` method to setState to the new redux state.

### Another Action

* If there is time, make another action that can be used to remove an item from our list on redux.