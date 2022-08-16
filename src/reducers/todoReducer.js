const initialData ={
    data:[]
}

const todoReducer = (state=initialData,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return{
                ...state,
                data:[
                    ...state.data,
                    action.payload
                ]
            }
            case "DELETE_ITEM":
              const newList =  state.data.filter((e,ind) => ind !=action.payload )
                return{
                    ...state,
                    data:newList
                }

        default:
            return state
    }
}

export default todoReducer;