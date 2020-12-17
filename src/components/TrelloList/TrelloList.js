import React from 'react';
import './TrelloList.css';
import TrelloCard from '../TrelloCard/TrelloCard'

const TrelloList = ({title})=>{
    return(
       <div className="list_container">
           <h3>{title}</h3>
           <TrelloCard/>
       </div>
    )
}


export default TrelloList;