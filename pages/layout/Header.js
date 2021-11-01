import style from '../../styles/Header.module.scss' 
import NavBar from '../../components/NavBar'
import Announcement from '../../components/Announcement' 

const Header = () => {
  return(
    <div className={style.header}>
      <Announcement />
      <NavBar />
    </div>
    )
}

export default Header