import { Link } from 'react-router-dom'
import { Select } from "antd";

import { useHooks } from 'hooks'
import Logo from 'assets/images/icons/logo.png'
import SearchIcon from 'assets/images/icons/search-icon.svg'
import CartIcon from 'assets/images/icons/cart.svg'

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
      <Link to="/" className="logo-wrapper">
        <img src={Logo} alt="citric.uz" className="logo-image" />
      </Link>
      <div className="header-navbar">
        <ul className="header-navbar__list">
          {
            navItems.map(menu => (
              <li className="header-navbar__list-item">
                <Link to={get(menu, "link")}>
                  {t(get(menu, "title"))}
                </Link>
              </li>
            ))
          }
          <button className='header-navbar__search-btn'>
            <img src={SearchIcon} alt="lens-icon" className="search-icon" />
          </button>
        </ul>
      </div>
      <div>
        <Select
          // suffixIcon={<Arrow />}
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
        <div className="bookmarks">
          <img src={CartIcon} alt="cart" className="cart-icon" />
        </div>
      </div>
    </div>
  )
}

export default Header