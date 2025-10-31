import React from 'react'
import classes from './Card.module.css'
import { UserRoundCheck } from 'lucide-react'
const Card = () => {
  return (
    <div className={classes.Card}>
      <UserRoundCheck />
      <h5>DIVERSIFIED EXPERIENCE</h5>
      <p>
        We leverage our vast experience across industries to deliver
best-in-class solutions.
</p>
    </div>
  )
}

export default Card
