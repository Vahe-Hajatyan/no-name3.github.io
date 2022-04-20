import s from './footer.module.css'

let Footer = () => {
  return(
    <div className={s.Footer}>
      <div className={s.row}>
        <li className={s.menu_li}><a href='https://www.facebook.com/vahe.hajatyan.3/' target={"_blank"} rel="noreferrer">facebook</a></li>
        <li className={s.menu_li}><a href='https://www.instagram.com/vahehajatyan/' target={"_blank"} rel="noreferrer">instagram</a></li>
        <li className={s.menu_li}><a href='https://mail.google.com/mail/u/0/#inbox' target={"_blank"} rel="noreferrer">gmail</a></li>
      </div>
    </div>
  )
}

export default Footer;