import React from 'react'
import classes from './LatestNews.module.css'
import NewsCard from '../newsCard/NewsCard'
const LatestNews = () => {
  return (
    <div>
      <h4 className={classes.header}>Latest News</h4>
      <div className={classes.newsCard}>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      </div>
   </div>
  )
}

export default LatestNews
