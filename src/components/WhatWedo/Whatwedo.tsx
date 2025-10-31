import React from 'react'
import classes from './Whatwedo.module.css'
import Image  from "../../assets/FirstImage.png";
const Whatwedo:React.FC = () => {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h3>Real Estate Consultancy & Market Analysis</h3>
        <p>
        We offer expert guidance, feasibility studies, and market trend analysis 
        to help clients make informed real estate decisions
        </p>
      </div>
        <div className={classes.imageWrapper}>
          <img src={Image} alt="Real Estate Consultancy" />
          <div className={`${classes.cornerAccent} ${classes.topLeft}`}></div>
          <div className={`${classes.cornerAccent} ${classes.bottomRight}`}></div>
        </div>
      
</div>
  </>
  )
}

export default Whatwedo
