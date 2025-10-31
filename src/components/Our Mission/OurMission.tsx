
import InnovationCard from '../InnovatrinCard/InnovationCard'
import classes from './OurMission.module.css'
const OurMission = () => {
  return (
    <div className={classes.container}>
        <div>
            <h4 className={classes.header}>Our Vision</h4>
            <p className={classes.paragraph}>To be a globally recognized multi-industry 
                enterprise known for its impact, integrity, and 
               excellence across multiple industries</p>
        </div>
        <div className={classes.border}></div>
        <div>
            <h4 className={classes.header}>Our Mission</h4>
            <div className={classes.headerContainer}>
            <InnovationCard/>
            <InnovationCard/>
            <InnovationCard/>
            </div>
           </div>
           <div className={classes.border}></div>
    </div>
  )
}

export default OurMission
