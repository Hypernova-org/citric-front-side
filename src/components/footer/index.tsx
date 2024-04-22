import { WhiteLogo } from "assets/images";
import {
  Arrow,
  Arrow2,
  Instagram,
  Telegram,
  Youtube,
} from "assets/images/icons";
import "./footer.scss";
import "./mobile.scss";
import { useHooks } from "hooks";
const Footer = () => {
  const { t, get } = useHooks();
  return (
    <div className="container">
      <div className="top_cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9999 8.36914L20.9678 13.1168L20.032 14.8844L11.9999 10.6321L3.96776 14.8844L3.03198 13.1168L11.9999 8.36914Z"
            fill="#0F1E00"
          />
        </svg>
        <button
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top: 0,
              left: 0,
            })
          }
          className=" to-top "
        >
          <Arrow2 />
        </button>
      </div>
      <div className="footer ">
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
                <p>{t("Ijtimoiy tarmoqlar")}</p>
                <div className="footer_links">
                  <a href="https://t.me/Citric_422" target="_blank">
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
                  >
                    <Youtube />
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="left_bottom">
            <img src={WhiteLogo} alt="citric.uz" />
            <p>
              {t("Citric.uz - yaxshi hayot uchun eng yaxshi ingredientlar!")}
            </p>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=144953549297"
          width="560"
          height="400"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="footer-bottom ">
        <p>{t("© 2024 Citric uz. Barcha huquqlar himoyalangan ")}</p>
        <a
          className="inline-block"
          href="https://www.hypernova.uz/"
          target="_blank"
        >
          {t("Created by Hypernova")}
        </a>
      </div>
    </div>
  );
};

export default Footer;
