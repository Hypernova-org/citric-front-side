import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Select, Input } from "antd";

import { useHooks } from 'hooks'
import { Arrow } from 'assets/images/icons';
import Logo from 'assets/images/icons/logo.png'
import SearchIcon from 'assets/images/icons/search-icon.svg'
import CartIcon from 'assets/images/icons/cart.svg'
import BurgerIcon from 'assets/images/icons/burger.svg'
import BackIcon from 'assets/images/icons/back.svg'

import "./style.scss"
import "./mobile.scss"

interface INav {
  id: number,
  link: string,
  title: string
}

interface ILang {
  id: number,
  name: string,
  value: string
}

const Header = () => {
  const { t, get } = useHooks()
  const { Option } = Select;
  const [navBarState, seacrhBarState] = useState(false)
  const [mobileSearchModal, showMobileSearchModal] = useState(false)

  const navItems: INav[] = [
    {
      id: 1,
      link: "/about",
      title: "Kompaniya haqida"
    },
    {
      id: 2,
      link: "/catalog",
      title: "Katalog"
    },
    {
      id: 3,
      link: "/blog",
      title: "Blog"
    },
    {
      id: 4,
      link: "/contacts",
      title: "Kontakt"
    },
  ]

  const langs: ILang[] = [
    {
      id: 1,
      name: "uz",
      value: "uz"
    },
    {
      id: 2,
      name: "ru",
      value: "ru"
    },
    {
      id: 2,
      name: "kr",
      value: "kr"
    },
  ]

  return (
    <div className='header-wrapper container'>
      {mobileSearchModal &&
        <div className="search-modal">
          <div className="search-modal__top">
            <div className="icon-btn back-btn mr-[10px]" onClick={() => showMobileSearchModal(false)}>
              <img src={BackIcon} alt="burger" className="burger-icon" />
            </div>
            <Input autoFocus={mobileSearchModal && true} className='header-searchbar' placeholder={t("Mahsulotlarni izlash")} type="text" />
          </div>
          <div className="search-modal__bottom">
            
          </div>
        </div>
      }
      <div className='flex items-center'>
        <div className="icon-btn burger-btn mr-[16px]">
          <img src={BurgerIcon} alt="burger" className="burger-icon" />
        </div>
        <Link to="/" className="logo-wrapper mb-[7px]">
          <img src={Logo} alt="citric.uz" className="logo-image" />
        </Link>
      </div>
      <div className="header-navbar">
        <ul className="header-navbar__list">
          {!navBarState ?
            navItems.map(menu => (
              <li className="header-navbar__list-item">
                <Link to={get(menu, "link")}>
                  {t(get(menu, "title"))}
                </Link>
              </li>
            )) :
            <Input autoFocus={navBarState && true} className='header-searchbar' placeholder={t("Mahsulotlarni izlash")} type="text" />
          }
          <button onClick={() => seacrhBarState(prev => !prev)} className='header-navbar__search-btn'>
            <img src={SearchIcon} alt="lens-icon" className="search-icon" />
          </button>
        </ul>
      </div>
      <div className='flex'>
        <Select
          suffixIcon={<Arrow />}
          className="lang-select"
          defaultValue={"uz"}
          size={"large"}
          onChange={(value: any) => {
            // changeLanguage(value);
          }}
        >
          {langs.map(lang => (
            <Option value={get(lang, "value")}>
              <p>{t(get(lang, "name"))}</p>
            </Option>
          ))}
        </Select>
        <div className="icon-btn search-btn" onClick={() => showMobileSearchModal(true)}>
          <img src={SearchIcon} alt="cart" className="search-icon" />
        </div>
        <div className="icon-btn cart-btn">
          <img src={CartIcon} alt="cart" className="cart-icon" />
        </div>
      </div>
    </div>
  )
}

export default Header