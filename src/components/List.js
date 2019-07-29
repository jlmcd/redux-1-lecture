import React, { Component } from 'react'
import store, {REMOVE_FROM_LIST} from '../store'

export default class List extends Component {
  constructor() {
    super()
    const reduxState = store.getState()
    this.state = {
      list: reduxState.todo
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        list: reduxState.todo
      })
    })
  }

  removeItem = (index) => {
    store.dispatch({
      type: REMOVE_FROM_LIST,
      payload: index
    })
  }

  render() {
    return (
      <div>
          {this.state.list.map((item, i) => (
            <h4 onDoubleClick={() => this.removeItem(i)}>{item}</h4>
          ))}
      </div>
    )
  }
}
