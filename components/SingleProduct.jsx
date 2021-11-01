import style from '../styles/SingleProduct.module.scss' 
import Image from 'next/image'
import ProductImg from '../public/sneakers3.jpg'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Newsletter from './Newsletter'
import Footer from './Footer'

const SingleProduct = () => {
  return(
    <div className={style.single_product}>
      <div className={style.product_image_container}>
        <Image src={ProductImg} height="400px" width="450px" alt="product" />
      </div>
      <div className={style.product_details_container}>
        <div className={style.product_description_container} >
          <h1 className={style.product_title}>Nike Air Jordan </h1>
          <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor. </p>
        </div>
        <p className={style.product_price}>$180</p>
        <div className={style.filter_container}>
          <div className={style.color_filter}>
            <h3>Color</h3>
            <div className={style.colors}>
              <div style={{backgroundColor: 'white'}} className={style.color}></div>
              <div style={{backgroundColor: 'black'}} className={style.color}></div>
              <div style={{backgroundColor: 'red'}} className={style.color}></div>
            </div>
          </div>
          <div className={style.size_filter}>
            <h3>Size</h3>
            <select className={style.filter}>
               <option>XS</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
            </select>
          </div>
          </div>
          <div className={style.quantity_cart_container}>
            <div className={style.product_quantity} >
              <FaChevronLeft className={style.arrow} />
              <div className={style.quantity}>
                <p>1</p>
              </div>
              <FaChevronRight className={style.arrow} />
            </div>
            <button className={style.add_to_cart_button}> ADD TO CART </button>
         </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
    )
}

export default SingleProduct