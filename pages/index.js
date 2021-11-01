import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'

export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop24seven</title>
        <meta name="Fashion Shop" content="dealer on all fashion accessories including shoes, bags, wristwatches etc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>
       <Slider />
       <div className={styles.section}>
         <h1 className={styles.section_title}>Top Categories </h1>
         <Categories />
       </div>
       
       <div className={styles.section}>
         <h1 className={styles.section_title}>Featured Products</h1>
         <FeaturedProducts />
       </div>
       
       <div className={styles.section}>
         <h1 className={styles.section_title}>Recommended Products</h1>
         <Products />
       </div>
       
       <div className={styles.section}>
         <Newsletter />
       </div>
       
       <div className={styles.section}>
         <Footer />
       </div>
      </main> */} 
      <SingleProduct />
    </div>
  )
}
 