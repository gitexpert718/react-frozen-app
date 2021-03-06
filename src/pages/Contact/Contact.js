import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Contact.module.css';
import contact from '../../assets/img/contact.svg'
import Scene_1 from './Scene_1';
import Faq from './Faq';
import Form from './Form';
import Footer from '../Footer/Footer'
function Contact() {
  return (
    <div className = { styles.container }>
      <Scene_1/>
      <Form/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default CSSModules(Contact, styles);
