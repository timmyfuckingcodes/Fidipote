import React from 'react'
import classes from '../Modal/Modal.module.css'
import Button from '../../UI/button'
const Backdrop = () => {
    return (
      <div className={classes.backdrop}>
  
      </div>
    )
  }
  
type Modal ={
    children:string,
    Heading : string
}
const Modal :React.FC<Modal>= (props) => {
  return (
    <div className={classes.modalText}>
        <Backdrop/>
      <h1>{props.Heading}</h1>
      <h3>{props.children}</h3>
      <div>
      <Button>Know More</Button>
      </div>
      
    </div>
  )
}

export default Modal
