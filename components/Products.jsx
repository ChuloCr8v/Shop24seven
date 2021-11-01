import style from '../styles/Products.module.scss' 
import data from './ProductsData'
import Product from './Product' 

const FeaturedProducts = () => {
 
  
  return(
    <div className={style.products}>
      <div className={style.wrapper}>
          {data.map((product) =>(
            <Product product={product} />
          ))}
      </div>
    </div>
    )
}

export default FeaturedProducts