import style from '../styles/Categories.module.scss' 
import data from './CategoryData'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return(
    <div className={style.categories}>
      {data.map((category) => (
        <CategoryItem category={category} />
      ))} 
    </div>
    )
}

export default Categories 