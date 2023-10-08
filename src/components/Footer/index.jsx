import React from "react";
import s from "./style.module.css";
import Wrapper from "../UI/Wrapper";
import facebook from "./facebook.png";
import instagram from "./instagram.png";

export default function Footer() {
  return (
    <Wrapper>
      <footer className={s.footer}>
        <div className={s.wrapper}>
          <div className={s.contacts}>
            <p className={s.contactTitle}>Contact</p>
            <p className={s.phoneNumber}>
              <a href="https://wa.me/499999999999">+49 999 999 99 99</a>
            </p>

            <div className={s.image_wrapper}>
              <a href="https://facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <div className={s.address}>
            <p className={s.addressTitle}>Address</p>
            <a href="https://tel-ran.de/">
              Linkstrasse 2, 8 OG, 10785, Berlin, Deutschland
            </a>
            <p>Working Hours:</p>
            <p>24 hours a day</p>
          </div>
        </div>
        <div className={s.iframe_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636864441043!2d13.375045!3d52.507933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1693904749968!5m2!1sru!2sde"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </Wrapper>
  );
}
