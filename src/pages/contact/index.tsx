import { Facebook, Instagram, Telegram, Youtube } from "assets/images/icons";
import { useGet, useHooks } from "hooks";
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
  const { data } = useGet({
    name: "contacts",
    url: "contacts",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const contactsData = get(data, "data", []);

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
          <a href={`mailto:${get(contactsData, "email")}`}>
            {get(contactsData, "email")}
          </a>
        </span>
        <span>
          <p>{t("Qo'ng'iroqlar markazi")}</p>
          <a href={`tel:${get(contactsData, "email")}`}>
            {get(contactsData, "phone")}
          </a>
        </span>
        <span>
          <p>{t("Ijtimoiy tarmoqlar")}</p>
          <div className="footer_links">
            <a href={`${get(contactsData, "telegram")}`} target="_blank">
              <Telegram />
            </a>
            <a
              href={`${get(contactsData, "instagram")}`}
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>

            <a href={`${get(contactsData, "facebook")}`} target="_blank">
              <Youtube />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contact;
