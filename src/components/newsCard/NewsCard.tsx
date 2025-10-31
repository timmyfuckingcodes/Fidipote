import classes from './NewsCard.module.css'
import Image from '../../assets/LatestNews0.png'
import Button from '../../UI/button'
const NewsCard = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.imageContainer}>
      <img src={Image} />
      <h4>Empowering communities with communites</h4>
      <h5>Date:April 10,2025</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.</p>
<Button>READ MORE</Button>
     </div>
    </div>
  )
}

export default NewsCard
