import React, { Component } from 'react'
import TrelloList from './TrelloList/TrelloList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi am here</h1>
        <TrelloList title='Title'/>
      </div>
    )
  }
}

export default App

