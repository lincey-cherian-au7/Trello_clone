import React from 'react';
import './TrelloList.css';
import TrelloCard from '../TrelloCard/TrelloCard'
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton'
import {Droppable,Draggable} from 'react-beautiful-dnd';

const TrelloList = ({title,cards,listID,index})=>{
    return(
        <Draggable draggableId={String(listID)} index={index}>
            {provided=>(   
                <div 
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}
                    className="list_container"
                >
                    <Droppable droppableId={String(listID)}>
                        {provided=>(
                            <div   
                                {...provided.droppableProps} 
                                ref={provided.innerRef} 
                            >
                                <h3>{title}</h3>
                                {cards.map((card,index)=>
                                    <TrelloCard index={index} id={card.id} key={card.id} text={card.text}/>
                                )}
                                <TrelloActionButton listID={listID}/>
                                {provided.placeholder}
                            </div>
                        )} 
                    </Droppable>
                </div>
            )}
       </Draggable>
    )
}


export default TrelloList;