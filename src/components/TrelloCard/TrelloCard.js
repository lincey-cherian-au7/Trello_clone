import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './TrelloCard.css'

const TrelloCard =({text})=>{
    return(
        <Card className="trellocard" >
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Card>
    )
}

export default TrelloCard