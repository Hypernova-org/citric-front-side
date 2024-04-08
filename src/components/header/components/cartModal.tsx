import { useEffect } from 'react';
import { useGet, useHooks } from 'hooks';
import useStore from "store";

import CloseIcon from "assets/images/icons/close.svg";
import Tyubik from "assets/images/tyubik.png"

import '../style.scss'

const CartModal = ({ cartModal, showCartModal }: any) => {
  const { basket, removeFromBasket, updateQuantity } = useStore();
  const { t, get } = useHooks()
  useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartModal]);

  const { isLoading, data  } = useGet({
    name: "products",
    url: "users/get-me/",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });
  return (
    <div className="cart-modal">
      <div className={`modal-overlay ${cartModal ? 'show' : ''}`} onClick={() => showCartModal(false)} />
      <div className={`modal-container ${cartModal ? 'show' : ''}`}>
        <div className="modal-content">
          <div className='modal-top-section'>
            <div className="top-part">
              <p className="cart-modal__title">{t("Sotib olish")}</p>
              <span className="close-btn" onClick={() => showCartModal(false)}>
                <img src={CloseIcon} alt="close" className="close-icon" />
              </span>
            </div>
            <p className='cart-modal__subtitle'>{t(`Mahsulotni sotib olish uchun ma’lumotlaringizni qoldiring tez siz bilan bog’lanamiz`)}</p>
          </div>
          <div className="modal-mid-section">
            {basket.map((item: any) => (
              <div className="cart-modal__item">
                <div className="left-side"><img src={get(item, "img[0]")} alt="cart-item-image" /></div>
                <div className="right-side">
                  <p>
                    {get(item, "name")}
                  </p>
                  <div className='cart-amount-controller'>
                    <span className='minus-amount'>-</span>
                    <p className='counter-amount'>{get(item, "amount")}</p>
                    <span className='plus-amount'>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-bottom-section">

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal