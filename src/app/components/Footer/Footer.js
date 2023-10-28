import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import facebook from "../../../../public/images/facebook.png";
import instagram from "../../../../public/images/instagram.png";
import twitter from "../../../../public/images/twitter.png";
import linkedin from "../../../../public/images/linkedin.png";
import facebook3 from "../../../../public/images/facebook3.png";
import instagram3 from "../../../../public/images/instagram3.png";
import twitter3 from "../../../../public/images/twitter3.png";
import linkedin3 from "../../../../public/images/linkedin3.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>Dawa.ai</h1>

      <div className={styles.input_group}>
        <input type="text" placeholder="Enter Your Email" />
        <div className={styles.input_group_append}>
          <span className={styles.input_group_text}>Subscribe</span>
        </div>
      </div>

      <div>
        <ul>
          <li><a href="#"><Image src={twitter3} /></a></li>
          <li><a href="#"><Image src={facebook3} /></a></li>
          <li><a href="#"><Image src={instagram3} /></a></li>
          <li><a href="#"><Image src={linkedin3} /></a></li>

        </ul>
      </div>
      <hr/>
      <div className={styles.end}>
        <span>&copy; Copyright Dawa.ai All Rights Reserved</span>
        <span>Designed by Dawa.ai Web Team</span>
      </div>
    </div>
  )
}

export default Footer;