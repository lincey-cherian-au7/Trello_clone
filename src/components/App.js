import React, { Component } from 'react'
import TrelloList from './TrelloList/TrelloList'
import {connect} from 'react-redux'
import './App.css';
import TrelloActionButton from './TrelloActionButton/TrelloActionButton'
import {DragDropContext} from 'react-beautiful-dnd';
import {sort} from '.././actions';
import {Droppable} from  'react-beautiful-dnd'


class App extends Component {
  onDragEnd = (result)=>{
    const  { destination ,source, draggableId,type}= result;
    if(!destination){
       return;
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

  }
  render() {
    const {lists} =this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App" >
          <h3>Welcome, to the Trello Board.</h3>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided =>(
                <div className='listcomponent' {...provided.droppableProps} ref={provided.innerRef}>
                  {lists.map((list,index )=>
                  <TrelloList listID={list.id} index={index} key={list.id} title={list.title} cards={list.cards}></TrelloList>)}
                  {provided.placeholder}
                  <TrelloActionButton list/>
                </div>
            )}
            
          </Droppable>
        </div>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state =>({
  lists:state.lists
})

export default connect(mapStateToProps)(App)

