import { Facebook, Instagram, Telegram, Youtube } from "assets/images/icons";
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.467643690251!2d69.23859789022798!3d41.36392352346688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d9c37224a6f%3A0x9dd78134369a3788!2sCITRIC.UZ!5e0!3m2!1sru!2s!4v1713507987496!5m2!1sru!2s"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
        <p>{t("Ibrohim Ota mahalla, 100095, Toshkent Shahri")}</p>
      </div>
      <div className="contact_links">
        <span>
          <p>{t("Elektron pochta")}</p>
          <a href="mailto:citricuz@gmail.com">sales@citric.uz</a>
        </span>
        <span>
          <p>{t("Qo'ng'iroqlar markazi")}</p>
          <a href="tel:+998974224969">+99897-422-49-69</a>
        </span>
        <span>
          <p>{t("Savollar uchun")}</p>
          <a href="https://t.me/Citric_422" target="_blank">
            {t("Call markaz")}
          </a>
        </span>
        <span>
          <p>{t("Ijtimoiy tarmoqlar")}</p>
          <div className="footer_links">
            <a
              href="https://www.instagram.com/citric_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a href="https://t.me/Citric_422" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwR2Moa-YBqvMULTp6nnrkw"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contact;
