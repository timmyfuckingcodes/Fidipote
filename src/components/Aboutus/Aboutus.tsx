import  classes  from "./Aboutus.module.css";
import Button from "../../UI/button";
import type React from "react";
import Whatwedo from "../WhatWedo/Whatwedo";
const Aboutus: React.FC = () => {
  return (
    <div className={classes.container}>
        <div className={classes.headerContainer}>
        <div className={classes.border}></div>
        <div>
        <span className={classes.header}>ABOUT US</span>
        </div>
        <div className={classes.border}></div>
        </div>
     <div className="">
        <p>At The FIDIPOTE ROYALITIES LLC, is a multi-industry enterprise that is dedicated
             to providing innovative and sustainable solutions across various industries, 
             including agriculture, real estate, farming, and the food market. 
             Our journey has been one of continuous growth, focusing on transforming traditional practices with modern technologies and environmentally
responsible methods.
        </p>
     </div>
       <div>
        <Button>
            See more
        </Button>
       </div>
       <div className={classes.weDOcontainer}>
       <div>
        <h4 className={classes.header}>What We Do</h4>
        <div>
        <p>our diverse portfolio of buisness include : </p>
        </div>
        <Whatwedo/>
        <Whatwedo/>
        <Whatwedo/>
        <Whatwedo/>
        </div>
       </div>
       
    </div>
  )
}

export default Aboutus
