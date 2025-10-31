import React from 'react'
import classes from './button.module.css'

interface ButtonProps{
    type ?: 'button' |'submit' | 'reset'// Optional type of props
    OnClick ?: () => void
    children ?: string
}

const button: React.FC<ButtonProps> = (props) => {
  return (
   <button className={classes.button}
   type={props.type}
   onClick={props.OnClick}
   >
    {props.children}
   </button>
  )
}

export default button
