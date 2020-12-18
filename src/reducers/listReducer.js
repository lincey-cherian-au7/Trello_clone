import {CONSTANTS} from '../actions'

let listID = 2
let cardID= 4
const initialState =[
    {
        title:'Last Episode',
        id:0,
        cards:[
            {
                id:0,
                text:"we created a static text"
            },
            {
                id:1,
                text:"We need to mix between material ui and styled component"

            }
        ]
    },{
        title:'Current Episode',
        id:0,
        cards:[
            {
                id:0,
                text:"we created a static text"
            },
            {
                id:1,
                text:"We need to mix between material ui and styled component"

            },
            {
                id:2,
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
                id:listID,
                cards:[]
            };
            listID +=1
            return [...state,newList];
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id:cardID
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
        default:
            return state;
    }
}

export default listReducer;