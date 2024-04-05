import { Facebook, Instagram, Telegram } from "assets/images/icons";
import { useHooks } from "hooks";
import React from "react";
import "./_contact.scss";
import "./mobile.scss";
const Contact = () => {
  const { t, get } = useHooks();

  return (
    <div className="container contact_page ">
      <p className="contact_page_title">{t("Kontakt")}</p>
      <div className="contact_map">
        <iframe
          title="Citric uz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.597807367512!2d69.25384058495027!3d41.361094897310565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d9e466d1bc9%3A0x61fe770dd2699c56!2sCITRIC.UZ!5e0!3m2!1sru!2s!4v1712206559015!5m2!1sru!2s"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
        <p>{t("Toshkent shahri, Olmazor tumani, ko'ch. Jeymi, 299")}</p>
      </div>
      <div className="contact_links">
        <span>
          <p>{t("Elektron pochta")}</p>
          <a href="mailto:citricuz@gmail.com">sales@citric.uz</a>
        </span>
        <span>
          <p>Qo'ng'iroqlar markazi</p>
          <a href="tel:+998977714969">+998 909706500</a>
        </span>
        <span>
          <p>Savollar uchun</p>
          <a href="mailto:help@citric.uz">help@citric.uz</a>
        </span>
        <span>
          <p>Ijtimoiy tarmoqlar</p>
          <div className="footer_links">
            <a href="citric.uz">
              <Instagram />
            </a>
            <a href="citric.uz">
              <Facebook />
            </a>
            <a href="citric.uz">
              <Telegram />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contact;
