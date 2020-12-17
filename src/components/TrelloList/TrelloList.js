import React from 'react';
import './TrelloList.css';
import TrelloCard from '../TrelloCard/TrelloCard'

const TrelloList = ({title,cards})=>{
    return(
       <div className="list_container">
           <h3>{title}</h3>
           {cards.map(card=>
           <TrelloCard text={card.text}/>)}
       </div>
    )
}


export default TrelloList;