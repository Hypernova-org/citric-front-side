import { Select } from "antd";
import config from "config";
import { useHooks } from "hooks";

import { Arrow2 } from "assets/images/icons";
import CloseIcon from "assets/images/icons/close.svg";
import { Link } from "react-router-dom";

interface INav {
  id: number;
  link: string;
  title: string;
}

const MobileMenu = ({ showMobileMenu, openMobileMenu }: any) => {
  const { t, get } = useHooks();
  const { Option } = Select;

  const navItems: INav[] = [
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

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top container">
        <div
          className="icon-btn close-btn mr-[10px]"
          onClick={() => showMobileMenu(false)}
        >
          <img src={CloseIcon} alt="close" className="close-icon" />
        </div>
        <Select
          suffixIcon={<Arrow2 />}
          className="lang-select inline-block"
          defaultValue={"uz"}
          size={"large"}
          onChange={(value: any) => {
            // changeLanguage(value);
          }}
        >
          {config.API_LANGUAGES.map((lang) => (
            <Option value={get(lang, "code")}>
              <p>{t(get(lang, "short"))}</p>
            </Option>
          ))}
        </Select>
      </div>
      <ul className="mobile-menu__bottom container">
        {navItems.map((menu) => (
          <li className="header-navbar__list-item">
            <Link onClick={() => openMobileMenu(false)} to={get(menu, "link")}>{t(get(menu, "title"))}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu