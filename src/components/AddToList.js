import React, { Component } from 'react'
import store, { ADD_TO_LIST } from '../store'

export default class AddToList extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  addTodo = () => {
    store.dispatch({
      type: ADD_TO_LIST,
      payload: this.state.input
    })
    this.setState({
      input: ''
    })
  }
  onChange = e => {
    this.setState({ input: e.target.value })
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={e => this.onChange(e)}
          type="text"
        />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}
