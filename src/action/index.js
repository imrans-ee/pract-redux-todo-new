export const addItem = (input)=>{
    return{
        type:"ADD_ITEM",
        payload:input,
    }
}

export const deleteItem = (id)=>{
    return{
        type:"DELETE_ITEM",
        payload:id,
    }
}