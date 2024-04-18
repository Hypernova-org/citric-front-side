import { useEffect } from "react";
import { Select } from "antd";
import i18next from "i18next";
import config from "config";
import { useHooks } from "hooks";

import { Arrow2 } from "assets/images/icons";
import CloseIcon from "assets/images/icons/close.svg";
import { Link } from "react-router-dom";
import useStore from "store";

interface INav {
  id: number;
  link: string;
  title: string;
}

const MobileMenu = ({ showMobileMenu, openMobileMenu, mobileMenu }: any) => {
  const { t, get } = useHooks();
  const { system } = useStore();
  const { Option } = Select;

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenu]);

  const navItems: INav[] = [
    {
      id: 0,
      link: "/",
      title: "Asosiy sahifa",
    },
    {
      id: 1,
      link: "/about",
      title: "Kompaniya haqida",
    },
    {
      id: 2,
      link: "/catalog",
      title: "Katalog",
    },
    {
      id: 3,
      link: "/blog",
      title: "Blog",
    },
    {
      id: 4,
      link: "/contact",
      title: "Kontakt",
    },
  ];

  const changeLang = (langCode: string) => {    
    i18next.changeLanguage(langCode);
    window.location.reload();
    // changeLang(langCode)
  };

  return (
    <div className={`mobile-menu ${mobileMenu ? 'show' : ''}`}>
      <div className="mobile-menu__top container">
        <div
          className="icon-btn close-btn mr-[10px]"
          onClick={() => showMobileMenu(false)}
        >
          <img src={CloseIcon} alt="citric.uz" className="close-icon" />
        </div>
        <Select
          suffixIcon={<Arrow2 />}
          className="lang-select inline-block"
          defaultValue={system?.lang}
          size={"large"}
          onChange={(value: any) => {
            changeLang(value);
          }}
        >
          {config.API_LANGUAGES.map((lang) => (
            <Option key={lang.id} value={get(lang, "code")}>
              <p>{t(get(lang, "short"))}</p>
            </Option>
          ))}
        </Select>
      </div>
      <ul className="mobile-menu__bottom container">
        {navItems.map((menu) => (
          <li key={menu.id} className="header-navbar__list-item">
            <Link onClick={() => openMobileMenu(false)} to={get(menu, "link")}>{t(get(menu, "title"))}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu