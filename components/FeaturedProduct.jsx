import style from '../styles/FeaturedProduct.module.scss' 
import Image from 'next/image'
import {FaHeart, FaShoppingCart, FaSearch} from 'react-icons/fa'


const FeaturedProduct = ({product}) => {
  return(
    <div className={style.featured_product}>
      <Image src={product.img} alt={product.title} height="250px" width="250px" className={style.featured_product_image} />
      <div className={style.featured_product_detail}>
        <h3 className={style.featured_product_title}>
          {product.title} 
        </h3>
        <p className={style.featured_product_price}>
          {product.price}
        </p>
      </div>
      <div className={style.featured_product_icons} >
        <div className={style.featured_product_icon_container}>
          <FaHeart className={style.featured_product_icon} />
        </div>
        <div className={style.featured_product_icon_container}>
          <FaShoppingCart className={style.featured_product_icon} />
        </div>
        <div className={style.featured_product_icon_container}>
          <FaSearch className={style.featured_product_icon} />
        </div>
      </div>
    </div>
    )
}

export default FeaturedProduct