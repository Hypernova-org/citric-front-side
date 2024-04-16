import { useEffect } from "react";
import CatalogCard from "components/catalogCard";
import Container from "modules/container";
import { useHooks } from "hooks";

import Nodata from "assets/images/icons/nodata.svg"

const SearchedItems = ({ navBarState, searchNameDebounced, searchBarState, setSearchName }: any) => {
  const { get, t } = useHooks()

  useEffect(() => {
    if (navBarState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navBarState]);

  const searchIconClick = () => {
    searchBarState((prev: any) => !prev)
    if(navBarState) {
      setSearchName("")
    }
  }

  return (
    <div className="searched-items-wrapper">
      <div className={`searched-items-overlay ${navBarState ? 'show' : ''}`} onClick={() => searchIconClick()}/>
      <div className={`searched-items-container ${navBarState ? 'show' : ''}`}>
        <Container.All
          name='searched-products'
          url={`products/search/${searchNameDebounced}`}
        >
          {({ items }) => {
            return (
              <div className="container">
                {items.length ? <div className='catalog-list'>
                  {items?.map((item) => (
                    <CatalogCard key={get(item, 'id')} {...{ item }} />
                  ))}
                </div>
                  :
                  <div className="nodata flex justify-center items-center flex-col">
                    <img src={Nodata} alt="no-data-icon" />
                    <p className="mt-[10px] text-center">{t("Hech qanday ma’lumot topilmadi")}</p>
                  </div>}
              </div>
            )
          }}
        </Container.All>
      </div>
    </div>
  )
}

export default SearchedItems