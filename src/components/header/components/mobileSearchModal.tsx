import { useEffect } from "react";
import { Input } from "antd";
import CatalogCard from "components/catalogCard";
import { useHooks } from "hooks";
import Container from "modules/container";

import BackIcon from "assets/images/icons/back.svg";
import Nodata from "assets/images/icons/nodata.svg"

const MobileSearchModal = ({ showMobileSearchModal, mobileSearchModal, searchNameDebounced, setSearchName }: any) => {
  const { t, get } = useHooks();

  useEffect(() => {
    if (mobileSearchModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileSearchModal]);

  return (
    <div className="search-modal">
      <div className="search-modal__top">
        <div
          className="icon-btn back-btn"
          onClick={() => showMobileSearchModal(false)}
        >
          <img src={BackIcon} alt="citric.uz" className="burger-icon" />
        </div>
        <Input
          autoFocus={mobileSearchModal && true}
          className="header-searchbar"
          placeholder={t("Mahsulotlarni izlash")}
          type="text"
          onChange={(i) => setSearchName(get(i,"target.value"))}
        />
      </div>
      <div className="search-modal__bottom">
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

export default MobileSearchModal