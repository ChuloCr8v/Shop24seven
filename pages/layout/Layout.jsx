import style from '../../styles/Layout.module.scss' 
import Header from './Header'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'

const Layout = ({children}) => {
  return(
    <main className={style.layout}>
      <Header />
        {children} 
    </main>
    )
}

export default Layout 
