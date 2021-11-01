import style from '../styles/FeaturedProducts.module.scss' 
import data from './FeaturedProductsData'
import FeaturedProduct from './FeaturedProduct'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {useState, useEffect } from 'react'

const FeaturedProducts = () => {
 
  
  return(
    <div className={style.featured_products}>
      <div className={style.wrapper}>
          {data.map((product) =>(
            <FeaturedProduct product={product} />
          ))}
      </div>
    </div>
    )
}

export default FeaturedProducts