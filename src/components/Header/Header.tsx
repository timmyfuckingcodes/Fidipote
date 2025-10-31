import React from 'react'
import HeaderImage from '../../assets/HeaderImage.png'
import classes from '../Header/Header.module.css'
import Button from '../../UI/button'

const Header: React.FC = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes['headerImage']}>
      <img  src={HeaderImage} alt='fidipote-logo' />
       </div> 
<div className={classes.navigation}>
    <h2>Home</h2>
    <h2>About</h2>
    <h2>Contact Us</h2>
    <h2>Options</h2>
    </div>

<div>
   <Button>
    Sign up
   </Button>
</div>

</div>
  )
}

export default Header
