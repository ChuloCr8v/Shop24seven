import style from '../styles/Product.module.scss' 
import Image from 'next/image'
import {FaHeart, FaShoppingCart, FaSearch} from 'react-icons/fa'


const Product = ({product}) => {
  return(
    <div className={style.product}>
      <Image src={product.img} alt={product.title} height="150px" width="150px" className={style.product_image} />
      <div className={style.product_detail}>
        <h3 className={style.product_title}>
          {product.title} 
        </h3>
        <p className={style.product_price}>
          {product.price}
        </p>
      </div>
      <div className={style.product_icons} >
        <div className={style.product_icon_container}>
          <FaHeart className={style.product_icon} />
        </div>
        <div className={style.product_icon_container}>
          <FaShoppingCart className={style.product_icon} />
        </div>
        <div className={style.product_icon_container}>
          <FaSearch className={style.product_icon} />
        </div>
      </div>
    </div>
    )
}

export default Product