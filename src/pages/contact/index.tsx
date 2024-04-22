import { Facebook, Instagram, Telegram, Youtube } from "assets/images/icons";
import { useHooks } from "hooks";
import React, { useEffect } from "react";
import "./_contact.scss";
import "./mobile.scss";
import gsap from "gsap";
const Contact = () => {
  let mm = gsap.matchMedia();

  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.from(".contact_page", {
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });
  }, []);
  const { t, get } = useHooks();
  

  return (
    <div className="container contact_page ">
      <p className="contact_page_title">{t("Kontakt")}</p>
      <div className="contact_map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=144953549297"
          title="Address"
        ></iframe>
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
          <p>{t("Ijtimoiy tarmoqlar")}</p>
          <div className="footer_links">
            <a href="https://t.me/Citric_422" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
            <a
              href="https://www.instagram.com/citric_uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
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
