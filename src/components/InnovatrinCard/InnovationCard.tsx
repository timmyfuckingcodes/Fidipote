import React from 'react'
import classes from './InnovationCard.module.css'
import { Check } from "lucide-react";
const InnovationCard:React.FC = () => {
    return (
        <div className= {classes.card}>
          <div className={classes.iconWrapper}>
            <div className={classes.iconCircle}>
              <Check className={classes.icon} size={28} strokeWidth={3} />
            </div>
          </div>
    
          <h2 className={classes.title}>Continuous Innovation & Adaptation</h2>
    
          <p className={classes.text}>
            We embrace emerging trends, technologies, and strategies to stay ahead
            in competitive markets. By investing in research and development, we
            ensure our businesses remain relevant, efficient, and forward-thinking.
          </p>
        </div>
      );
    };
    
    export default InnovationCard;
