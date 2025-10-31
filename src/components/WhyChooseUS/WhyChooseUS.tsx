import React from 'react'
import classes from './WhyChooseUs.module.css'
import Card from '../Card/Card'
const WhyChooseUS :React.FC= () => {
  return (
    <div>
      <h4 className={classes.header}>Why Choose Us</h4>
      <div className={classes.cardContainer}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
     
    </div>
  )
}

export default WhyChooseUS
