import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addItem } from './action'
import { deleteItem } from './action'

const App = () => {

const [input,setInput] = useState('');

  const dispatch = useDispatch();

  const items = useSelector(state => state.todoReducer.data);

  console.log(input)
  console.log(items)

  return (
    <>
      <input type="text" placeholder='enter item' onChange={e => setInput(e.target.value) }/>

      <button onClick={()=> dispatch(addItem(input)) }>add item</button>

      {
        items.map((e,ind)=>{
          return <h1 key={ind}>{e} <button onClick={()=>dispatch(deleteItem(ind))}>X</button></h1>
        })
      }
    
    </>
  )
}

export default App