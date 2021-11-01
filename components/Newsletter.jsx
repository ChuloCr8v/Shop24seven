import style from '../styles/Newsletter.module.scss'
import {FaPaperPlane} from 'react-icons/fa'

const Newsletter = () => {
  return(
    <div className={style.newsletter}>
      <h1 className={style.newsletter_title}> Newsletter </h1>
      <p className={style.newsletter_subtitle}>Subscribe to updates from your favourite products for free </p>
      <div className={style.form_container}>
        <form className={style.newsletter_form} >
          <input type='email' name='newsletter' placeholder='Email' />
          <div className={style.send_icon_container}>
            <FaPaperPlane className={style.send_icon} />
          </div>
        </form>
      </div>
    </div>
    )
}

export default Newsletter 