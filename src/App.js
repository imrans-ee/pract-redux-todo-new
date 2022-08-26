import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addItem } from './action'
import { deleteItem } from './action'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import "./app.css"


const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = (ind) => {
    // dispatch(deleteItem(ind))
    setShow(false)
  };
  const handleShow = () => setShow(true);

const [input,setInput] = useState("");
const [showError,setShowError] = useState('')
const [index,setIndex] = useState()

  const dispatch = useDispatch();
  const items = useSelector(state => state.todoReducer.data);
  

  console.log(input)

  const add = ()=>{
    if(!input){
      setShowError('Please fill the Todo')
    }
    else{   
      
      dispatch(addItem(input))
      setInput('');

    }
    
  }
  
  const onInput = (e)=>{
    setInput(e.target.value)
    setShowError('')    
  }

  // const delItem = (ind)=>{
  
  //  dispatch(deleteItem(ind))
   
  // }
  
  return (
    <>      
    <div className='app'>
      <input type="text"  value={input} placeholder='enter item' onChange={onInput}/>

      <p style={{color:'red'}} >{showError}</p>
      
      <button onClick={add}>add item</button>

      {/* modal delete */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={  ()=> { handleClose(); dispatch(deleteItem(index)) } }>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

   
   {
    items.length  ?
   

   <Table striped bordered hover size="sm">
      <thead>
        <tr>          
          <th>Item</th>
          <th>Action</th>          
        </tr>
      </thead>
      <tbody>       
        {
          items.map((e,ind)=>{
            return  <tr key={ind}>
                    
                    <td>{e}</td>  
                    {/* <td><button onClick= { ()=>{delItem(ind) }  }>X</button></td> */}
                    <td><button onClick= { ()=>{ handleShow() ; setIndex(ind) }  }  >X</button></td>
                            
              </tr>  
          })
        }    
      </tbody>
    </Table>

    : <div>No To-Do list item found</div>
    
      }
    </div>
    </>
  )
}

export default App