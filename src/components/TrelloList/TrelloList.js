import React from 'react';
import './TrelloList.css';
import TrelloCard from '../TrelloCard/TrelloCard'
import TrelloActionButton from '../TrelloActionButton/TrelloActionButton'
const TrelloList = ({title,cards,listID})=>{
    return(
       <div className="list_container">
           <h3>{title}</h3>
           {cards.map(card=>
           <TrelloCard key={card.id} text={card.text}/>)}
           <TrelloActionButton listID={listID}/>
       </div>
    )
}


export default TrelloList;