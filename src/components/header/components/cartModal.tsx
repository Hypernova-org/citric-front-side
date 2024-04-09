import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DeleteOutlined } from "@ant-design/icons";
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

  // const onSubmit = (values: { [key: string]: any }) => {
  //   mutate(
  //     { url, params, method, data: customizeData(values) },
  //     {
  //       onSuccess: (data) => {
  //         onSuccess(data, reset, queryClient);
  //         if (name) queryClient.invalidateQueries({ queryKey: [name] });
  //       },
  //       onError,
  //       onSettled,
  //     }
  //   );
  // };
  return (
    <div className={`cart-modal`}>
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
            {basket.map((item: any) => {
              const product = get(item, "product")

              return (
                <div key={get(product, "_id")} className="cart-modal__item">
                  <div className='flex'>
                    <div className="left-side"><img className='object-cover' src={get(product, "images[0].small")} alt="cart-item-image" /></div>
                    <div className="right-side">
                      <p>
                        {get(product, "productTitle")}
                      </p>
                      <div className='cart-amount-controller'>
                        <span className='minus-amount'
                          onClick={() => {
                            updateQuantity(
                              get(product, "_id"),
                              Math.max(1, item.quantity - 1)
                            )
                          }}
                        >-</span>
                        <p className='counter-amount'>{get(item, "quantity")}</p>
                        <span className='plus-amount'
                          onClick={() =>
                            updateQuantity(get(product, "_id"), item.quantity + 1)
                          }
                        >+</span>
                      </div>
                    </div>
                  </div>
                  <div className='delete-icon' onClick={() => removeFromBasket(get(product, "_id"))}><DeleteOutlined /></div>
                </div>
              )
            })}
          </div>
          <div className="modal-bottom-section">
            <form
            //  onSubmit={handleSubmit(onSubmit)}
            >
              <input type="text" className="payment-input" />

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal