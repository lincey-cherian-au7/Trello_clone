import React, { Component } from 'react'
import TrelloList from './TrelloList/TrelloList'
import {connect} from 'react-redux'
import './App.css';
import TrelloActionButton from './TrelloActionButton/TrelloActionButton'

class App extends Component {
  render() {
    const {lists} =this.props
    return (
      <div className="App">
        <h1>Hi am here</h1>
        <div className='listcomponent'>
          {lists.map(list =>
            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}></TrelloList>)}
          <TrelloActionButton list/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  lists:state.lists
})

export default connect(mapStateToProps)(App)

