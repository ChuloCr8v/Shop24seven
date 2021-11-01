import style from '../styles/CategoryItem.module.scss' 
import Image from 'next/image'
const CategoryItem = ({category}) => {
  return(
    <div className={style.category_item}>
      <div className={style.category_image_container}>
        <Image src={category.img} height={400} width={350} alt={category.title} className={style.category_img}/>
      </div>
      <h1 className={style.category_item_title}>{category.title}</h1>
     <button className={style.category_button} > SHOP NOW </button>
    </div>
    )
}

export default CategoryItem