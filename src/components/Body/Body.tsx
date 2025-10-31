import React from 'react'
 import BodyImage from '../../assets/BodyImage.png'
import classes from './Body.module.css'
import Modal from '../Modal/Modal'





const Body:React.FC = () => {
  return (
    <div className={classes.bodyContainer}>
       <div className={classes['bodyImage']}>
       <img src={BodyImage} />
        </div>
        <Modal children='Drive growth across agriculture, real estate, farming, and the 
         food market—combining modern technology' Heading='Innovative Solutions for a 
        Sustainable Future'/> 
    
    </div>
  )
}

export default Body
