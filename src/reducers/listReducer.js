import {CONSTANTS} from '../actions'

let listID = 2
let cardID= 5
const initialState =[
    {
        title:'Last Episode',
        id:`list-${0}`,
        cards:[
            {
                id:`cards-${0}`,
                text:"we created a static text"
            },
            {
                id:`cards-${1}`,
                text:"We need to mix between material ui and styled component"

            }
        ]
    },{
        title:'Current Episode',
        id:`list-${1}`,
        cards:[
            {
                id:`cards-${2}`,
                text:"we created a static text"
            },
            {
                id:`cards-${3}`,
                text:"We need to mix between material ui and styled component"

            },
            {
                id:`cards-${4}`,
                text:"We need  to make dynamic content"

            }
        ]
    }
]

const listReducer =(state=initialState,action)=>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList={
                title:action.payload,
                id:`list-${listID}`,
                cards:[]
            };
            listID +=1
            return [...state,newList];
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id:`cards-${cardID}`
            };
            cardID +=1
            
            const newState =state.map(list=>{
                if(list.id===action.payload.listID){
                    return {
                        ...list,
                        cards:[...list.cards,newCard]
                    }
                }else{
                    return list
                }
            })

            return newState;
        case CONSTANTS.DRAG_DONE:
            {const{droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } =action.payload;
            const newState =[...state];

            if(type==="list"){
                const list = newState.splice(droppableIndexStart,1)
                newState.splice(droppableIndexEnd,0,...list);
                return newState;
            }
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list=>droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart,1)
                list.cards.splice(droppableIndexEnd,0,...card)   
            }

            if(droppableIdStart!==droppableIdEnd){
                const listStart = state.find(list=>droppableIdStart === list.id)
                
                const card =listStart.cards.splice(droppableIndexStart,1)

                const listEnd  = state.find(list=> droppableIdEnd === list.id)
                listEnd.cards.splice(droppableIndexEnd,0,...card)
            }
            return newState;}
        default:
            return state;
    }
}

export default listReducer;