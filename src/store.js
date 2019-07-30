import { createStore } from 'redux'

// INITIAL STATE
const initialState = {
  todo: ['Practice the piano', 'Figure out the meaning of life']
}

// ACTION CONSTANTS
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      var newTodo = [...state.todo, action.payload]
      return Object.assign(state, { todo: newTodo })
    case REMOVE_FROM_LIST:
      // eslint-disable-next-line
      var newTodo = [...state.todo]
      newTodo.splice(action.payload, 1)
      return Object.assign(state, { todo: newTodo })
    default:
      return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
