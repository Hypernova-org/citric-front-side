import { WhiteLogo } from "assets/images";
import { Facebook, Instagram, Telegram } from "assets/images/icons";
import "./footer.scss";
import "./mobile.scss";
import { useHooks } from "hooks";
const Footer = () => {
  const { t, get } = useHooks();
  return (
    <div>
      <div className="footer container">
      <div className="footer__left">
        <div className="left_top">
          <div className="left_top_wrappers">
            <span>
              <p>{t("Elektron pochta")}</p>
              <a href="mailto:citricuz@gmail.com">sales@citric.uz</a>
            </span>
            <span>
              <p>{t("Qo'ng'iroqlar markazi")}</p>
              <a href="tel:+998974224969">+99897-422-49-69</a>
            </span>
          </div>
          <div className="left_top_wrappers">
            <span>
              <p>{t("Savollar uchun")}</p>
              <a href="https://t.me/Citric_422" target="_blank">{t("Call markaz")}</a>
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
                <a href="/">
                  <Facebook />
                </a>
                <a href="https://t.me/Citric_422" target="_blank">
                  <Telegram />
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="left_bottom">
          <img src={WhiteLogo} alt="citric.uz" />
          <p>{t("Citric.uz - yaxshi hayot uchun eng yaxshi ingredientlar!")}</p>
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5988.9402594666635!2d69.23395809357909!3d41.36386950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d9c37224a6f%3A0x9dd78134369a3788!2sCitric.uz!5e0!3m2!1sru!2s!4v1713166258314!5m2!1sru!2s"
        allowFullScreen={true}
        loading="lazy"
        height="100%"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="footer-bottom container">
      <p>{t("© 2024 Citric uz. Barcha huquqlar himoyalangan ")}</p>
      <a className="inline-block" href="https://www.hypernova.uz/" target="_blank">{t("Created by Hypernova")}</a>
    </div>
    </div>
  );
};

export default Footer;
