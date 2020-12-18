import { Button, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './TrelloActionButton.css';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';
import {addList,addCard} from '../../actions'

class TrelloActionButton extends Component {

    state ={
        formOpen:false,
        text:""
    }

    addButton =()=>{
        const {list} =this.props
        const buttonText = list? 'Add another list':'Add another card'
        const buttonTextOpacity = list ? 1:0.5;
        const buttonTextColor = list ? 'white':"inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,0.15)":'inherit '
        return (
            <div 
                onClick={this.openForm}
                style={{...styles.buttongroup,opacity:buttonTextOpacity,color:buttonTextColor,backgroundColor:buttonTextBackground}}>
                <AddIcon/>
                <p>{buttonText}</p>
            </div>
        )
    }

    openForm =()=>{
        this.setState({formOpen:true})
    }
    closeForm = ()=>{
        this.setState({formOpen:false})
    }
    handleInputChange =e=>{
        this.setState({text:e.target.value})
    }
    handleAddList =()=>{
        const {dispatch} =this.props
        const {text} = this.state
        if(text){
            this.setState({text:""})
            dispatch(addList(text))
        }
        return;
    }
    handleAddCard = ()=>{
        const {dispatch,listID}= this.props
        const {text} = this.state
        if(text){
            this.setState({text:""})
            dispatch(addCard(listID,text))
        }
        return;
    }

    addForm =()=>{
        const {list} = this.props;
        const formText = list ? "Enter list title":"Enter card title"
        const buttonTitle = list ? "Add List":"Add Card";
        return <div>
            <Card className="cardcontainer">
                <TextareaAutosize 
                    placeholder={formText} 
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize:"none",
                        width:"100%",
                        outline:"none",
                        overflow:"hidden",
                        border:"none"
                    }}
                />
            </Card>
            <div className="formbuttongroup">
                <Button 
                    className="buttonblock" 
                    variant="contained" 
                    onMouseDown={list?this.handleAddList:this.handleAddCard}
                    style={{ 
                        color:"white",
                        backgroundColor: "#5aac44"
                    }}>                                                       
                    {buttonTitle}
                </Button>
                <CloseIcon className="closeblock" />
            </div>
        </div>
    }
   
    render() {
        return this.state.formOpen?this.addForm():this.addButton();   
    }
}
const styles={buttongroup:{
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width:250,
    paddingleft:10
},}

export default connect()(TrelloActionButton);
