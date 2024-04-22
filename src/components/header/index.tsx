import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Select, Input } from "antd";
import i18next from "i18next";

import config from "config";
import { useHooks, useDebounce } from "hooks";
import { MobileMenu, MobileSearchModal, CartModal, SearchedItems } from "./components";
import useStore from "store";

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
  const { t, get, location } = useHooks();
  const { Option } = Select;
  const [navBarState, searchBarState] = useState(false);
  const [mobileSearchModal, showMobileSearchModal] = useState<Boolean>(false);
  const [mobileMenu, showMobileMenu] = useState<Boolean>(false);
  const [cartModal, showCartModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [selectedmenu, setSelectedMenu] = useState(get(location, "pathname"));
  const searchNameDebounced = useDebounce(searchName, 600);
  const { system } = useStore();

  useEffect(()=>(
    setSelectedMenu(get(location, "pathname"))
  ),[selectedmenu])

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

  const searchIconClick = () => {
    searchBarState((prev) => !prev)
    if (navBarState) {
      setSearchName("")
    }
  }

  const changeLang = (langCode: string) => {
    i18next.changeLanguage(langCode);
    window.location.reload();
  };

  return (
    <div className="header-wrapper container">
      {mobileSearchModal && (<MobileSearchModal {...{ mobileSearchModal, showMobileSearchModal, searchNameDebounced, setSearchName }} />)}
      <MobileMenu {...{ openMobileMenu, showMobileMenu, mobileMenu }} />
      <CartModal {...{ cartModal, showCartModal }} />
      <SearchedItems {...{ navBarState, searchNameDebounced, searchBarState, setSearchName }} />

      <div className="flex items-center ">
        <div className="icon-btn burger-btn mr-[16px]">
          <img
            src={BurgerIcon}
            alt="citric.uz"
            className="burger-icon"
            onClick={() => openMobileMenu(true)}
          />
        </div>
        <Link onClick={() => setSelectedMenu("/")} to="/" className="logo-wrapper mb-[7px]">
          <img src={Logo} alt="citric.uz" className="logo-image" />
        </Link>
      </div>
      <div className="header-navbar">
        <ul className="header-navbar__list">
          {!navBarState ? (
            navItems.map((menu) => (
              <li key={menu.id} className={selectedmenu == menu.link ? `header-navbar__list-item selectedMenu` : "header-navbar__list-item"} >
                <Link
                onClick={() => setSelectedMenu(menu.link)}
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
              onChange={(i) => setSearchName(get(i, "target.value"))}
            />
          )}
          
          <button
            onClick={() => searchIconClick()}
            className={!navBarState ? "header-navbar__search-btn" : "header-navbar__search-btn-mobile"}
          >
            <img src={SearchIcon} alt="citric.uz" className="search-icon" />
          </button>
        </ul>
      </div>
      <div className="flex items-center">
        <Select
          suffixIcon={<Arrow2 />}
          className="lang-select"
          defaultValue={system?.lang}
          size={"large"}
          onChange={(value: any) => {
            changeLang(value);
          }}
        >
          {config.API_LANGUAGES.map((lang) => (
            <Option value={get(lang, "code")}>
              <p>{get(lang, "title")}</p>
            </Option>
          ))}
        </Select>
        <div
          className="icon-btn search-btn"
          onClick={() => showMobileSearchModal(true)}
        >
          <img src={SearchIcon} alt="citric.uz" className="search-icon" />
        </div>
        <div
          className="icon-btn cart-btn"
          onClick={() => showCartModal(true)}
        >
          <img src={CartIcon} alt="citric.uz" className="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
