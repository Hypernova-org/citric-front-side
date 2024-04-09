import { useState } from "react";
import { Link } from "react-router-dom";
import { Select, Input, Modal } from "antd";

import config from "config";
import { useHooks } from "hooks";
import { MobileMenu, MobileSearchModal, CartModal } from "./components";

import { Arrow2 } from "assets/images/icons";
import Logo from "assets/images/icons/logo.png";
import SearchIcon from "assets/images/icons/search-icon.svg";
import CartIcon from "assets/images/icons/cart.svg";
import BurgerIcon from "assets/images/icons/burger.svg";

import "./style.scss";
import "./mobile.scss";

interface INav {
  id: number;
  link: string;
  title: string;
}

const Header = () => {
  const { t, get } = useHooks();
  const { Option } = Select;
  const [navBarState, searchBarState] = useState(false);
  const [mobileSearchModal, showMobileSearchModal] = useState<Boolean>(false);
  const [mobileMenu, showMobileMenu] = useState<Boolean>(false);
  const [cartModal, showCartModal] = useState(false);

  const openMobileMenu = (open: Boolean) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("overflow-hidden");
    showMobileMenu(open);
  };

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

  return (
    <div className="header-wrapper container">
      {mobileSearchModal && (<MobileSearchModal {...{ mobileSearchModal, showMobileSearchModal }} />)}
      <MobileMenu {...{ openMobileMenu, showMobileMenu, mobileMenu }} />
      <CartModal {...{ cartModal, showCartModal }} />

      <div className="flex items-center ">
        <div className="icon-btn burger-btn mr-[16px]">
          <img
            src={BurgerIcon}
            alt="burger"
            className="burger-icon"
            onClick={() => openMobileMenu(true)}
          />
        </div>
        <Link to="/" className="logo-wrapper mb-[7px]">
          <img src={Logo} alt="citric.uz" className="logo-image" />
        </Link>
      </div>
      <div className="header-navbar">
        <ul className="header-navbar__list">
          {!navBarState ? (
            navItems.map((menu) => (
              <li key={menu.id} className="header-navbar__list-item">
                <Link
                  to={get(menu, "link")}
                >
                  {t(get(menu, "title"))}
                </Link>
              </li>
            ))
          ) : (
            <Input
              autoFocus={navBarState && true}
              className="header-searchbar"
              placeholder={t("Mahsulotlarni izlash")}
              type="text"
            />
          )}
          <button
            onClick={() => searchBarState((prev) => !prev)}
            className="header-navbar__search-btn"
          >
            <img src={SearchIcon} alt="lens-icon" className="search-icon" />
          </button>
        </ul>
      </div>
      <div className="flex items-center">
        <Select
          suffixIcon={<Arrow2 />}
          className="lang-select"
          defaultValue={"uz"}
          size={"large"}
          onChange={(value: any) => {
            // changeLanguage(value);
          }}
        >
          {config.API_LANGUAGES.map((lang) => (
            <Option value={get(lang, "code")}>
              <p>{t(get(lang, "title"))}</p>
            </Option>
          ))}
        </Select>
        <div
          className="icon-btn search-btn"
          onClick={() => showMobileSearchModal(true)}
        >
          <img src={SearchIcon} alt="search" className="search-icon" />
        </div>
        <div
          className="icon-btn cart-btn"
          onClick={() => showCartModal(true)}
        >
          <img src={CartIcon} alt="cart" className="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
