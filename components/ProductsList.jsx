import style from '../styles/ProductsList.module.scss' 
import Footer from './Footer'
import Products from './Products'
const ProductsList = () => {
  return(
    <div className={style.products_list}>
      <div className={style.products_filter_container}>
        <div className={style.product_filters}>
          <h3>Filter Products: </h3>
          <select className={style.filter}>
             <option disabled className={style.filter_title}>By Color </option>
             <option>White</option>
             <option>Black</option>
             <option>Red</option>
             <option>Yellow</option>
             <option>Blue</option>
             <option>Green</option>
          </select>
          <select className={style.filter}>
             <option disabled className={style.filter_title}>By Size </option>
             <option>XS</option>
             <option>S</option>
             <option>M</option>
             <option>L</option>
             <option>XL</option>
          </select>
        </div>
        <div className={style.sort_products}>
          <h3>Sort Products:</h3>
          <select className={style.sort}>
            <option>Newest</option>
            <option>Price(asc)</option>
            <option>Price(desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
    )
}

export default ProductsList