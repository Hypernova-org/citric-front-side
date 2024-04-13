import { Input } from "antd";
import { useHooks } from "hooks";

import BackIcon from "assets/images/icons/back.svg";


const MobileSearchModal = ({showMobileSearchModal,mobileSearchModal}:any) => {
  const { t } = useHooks();

  return (
    <div className="search-modal">
      <div className="search-modal__top">
        <div
          className="icon-btn back-btn mr-[10px]"
          onClick={() => showMobileSearchModal(false)}
        >
          <img src={BackIcon} alt="citric.uz" className="burger-icon" />
        </div>
        <Input
          autoFocus={mobileSearchModal && true}
          className="header-searchbar"
          placeholder={t("Mahsulotlarni izlash")}
          type="text"
        />
      </div>
      <div className="search-modal__bottom"></div>
      <div className="search-modal__bottom"></div>
    </div>
  )
}

export default MobileSearchModal