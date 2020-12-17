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
                id:3,
                text:"We need  to make dynamic content"

            }
        ]
    }
]

const listReducer =(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default listReducer;