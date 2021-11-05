import style from '../styles/Slider.module.scss' 
import data from './SliderData'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {useState, useEffect } from 'react'
import Image from 'next/image'
import Bg from '../public/category4.jpg'

const Slider = () => {
  
  const [slideImg, setSlideImg] = useState(0)
  
  const slideImgAction = (direction) => {
    if(direction === "left"){
      setSlideImg(slideImg > 0 ? slideImg - 1 : 2) 
    } else if(direction === "right") {
      setSlideImg(slideImg < 2 ? slideImg + 1 : 0) 
    }
  }
  
  return(
    <div className={style.slider}>
      <div className={style.arrow_container}>
              <FaChevronLeft 
              direction="left" 
              className={style.arrow} 
              onClick={() =>slideImgAction("left")}
              />
              <FaChevronRight 
              direction="right" 
              className={style.arrow} 
              onClick={() =>slideImgAction("right")} 
              />
      </div>  
      <div 
      slideImg={slideImg} 
      className={style.wrapper}
      style={{transform: `translateX(${slideImg * -100}vw)`}} >
        {data.map((slide, index) => (
          <div 
          key={index} 
          className={style.slide}
          >
            <h1 className={style.slide_title} >{slide.title}</h1>
            <p  className={style.slide_content}>{slide.content}</p>
            <Image src={slide.img} height="200" width="200" />
          </div>
        ))} 
      </div>
    </div>
    )
}

export default Slider 