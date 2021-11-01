import style from '../styles/Footer.module.scss' 
import {FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarker, FaEnvelope} from 'react-icons/fa'
import Image from 'next/image'
import Visa from '../public/visa.png'


const Footer = () => {
  return(
    <div className={style.footer}>
      <div className={style.footer_section}>
        <div className={style.logo_container}>
          <h1 className={style.footer_logo}>Shop<span>24Seven</span></h1>
          <p className={style.footer_description}> 
            We are your No.1 retailer for all fashion products and accessories. We offer different luxury items including wristwatches, shoes, sunglasses etc, at some of the best prices. 
          </p>
        </div>
        <div className={style.footer_social_icons}>
          <FaFacebook className={style.footer_social_icon} />
          <FaTwitter className={style.footer_social_icon} />
          <FaInstagram className={style.footer_social_icon} />
        </div>
      </div>
      
      <div className={style.footer_section}>
        <div className={style.links_container}>
          <h3 className={style.menu_title}>Useful Links</h3>
          <ul className={style.links}> 
            <li>Home</li>
            <li>New Arrivals</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>My Account</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      
      <div className={style.footer_section}>
        <div className={style.contact_container}>
          <h3 className={style.menu_title}>Contact</h3>
          <ul className={style.contact} > 
            <li>
              <FaMapMarker className={style.contact_icon} />
              <p> Lagos State, Nigeria </p>
            </li>
            <li>
              <FaPhone className={style.contact_icon} />
              <p>+2345678901</p>
            </li>
            <li>
              <FaEnvelope className={style.contact_icon} />
              <p>Shop24seven1@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className={style.atm_cards}>
          <Image src={Visa} alt="Visa" height="50" width="120" />
        </div>
      </div>
    </div>
    )
}

export default Footer