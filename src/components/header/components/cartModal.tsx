import { useEffect, useState } from "react";
import { notification } from "antd";
import { Field } from "formik";
import { DeleteOutlined } from "@ant-design/icons";

import Container from "modules/container";
import { Fields } from "components";
import { useHooks } from "hooks";
import useStore from "store";

import CloseIcon from "assets/images/icons/close.svg";
import { MinusIcon, PlusIcon } from "assets/images/icons";

import "../style.scss";

const CartModal = ({ cartModal, showCartModal }: any) => {
  const { basket, removeFromBasket, updateQuantity, clearBasket } = useStore();
  const { t, get } = useHooks()

  useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartModal]);

  const basketdata = basket.map((curr) => {
    return {
      id: get(curr, "product._id"),
      amount: curr["quantity"],
      price: curr["totalPrice"]
    };
  }, []);

  return (
    <div className={`cart-modal`}>
      <div
        className={`modal-overlay ${cartModal ? "show" : ""}`}
        onClick={() => showCartModal(false)}
      />
      <div className={`modal-container ${cartModal ? "show" : ""}`}>
        <div className="modal-content">
          <div className="modal-top-section">
            <div className="top-part">
              <p className="cart-modal__title">{t("Sotib olish")}</p>
              <span className="close-btn" onClick={() => showCartModal(false)}>
                <img src={CloseIcon} alt="citric.uz" className="close-icon" />
              </span>
            </div>
            <p className="cart-modal__subtitle">
              {t(
                `Mahsulotni sotib olish uchun ma’lumotlaringizni qoldiring tez siz bilan bog’lanamiz`
              )}
            </p>
          </div>
          <div className="modal-mid-section">
            {basket.map((item: any) => {
              const product = get(item, "product");

              return (
                <div key={get(product, "_id")} className="cart-modal__item">
                  <div className='flex'>
                    <div className="left-side"><img className='object-cover' src={get(product, "image1[0].small")} alt="citric.uz" /></div>
                    <div className="right-side">
                      <p>{get(product, "productTitle")}</p>
                      <div className="flex items-center">
                        {/* <div className="cart-amount-controller">
                          <button
                            className="minus-amount"
                            onClick={() => {
                              updateQuantity(
                                get(product, "_id"),
                                Math.max(1, item.quantity - 1),
                                get(product, "price", 0)
                              );
                            }}
                          >
                            <MinusIcon />
                          </button>
                          <p className="counter-amount">
                            {get(item, "quantity")}
                          </p>
                          <button
                            className="plus-amount"
                            onClick={() => (
                              updateQuantity(
                                get(product, "_id"),
                                item.quantity + 1,
                                get(product, "price", 0)
                              )
                            )}
                          >
                            <PlusIcon />
                          </button>
                        </div> */}
                        {get(product, "price") && <p className="ml-[20px] text-[18px]">{t("Price")}: {+(get(item, "quantity")) * +(get(product, "price"))} {t("so'm")}</p>}
                      </div>
                    </div>
                  </div>
                  <div
                    className="delete-icon"
                    onClick={() => removeFromBasket(get(product, "_id"))}
                  >
                    <DeleteOutlined />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="modal-bottom-section">
            <Container.Form
              name="orders"
              url={"orders"}
              method={"post"}
              fields={[
                {
                  name: "clientName",
                  type: "string",
                },
                {
                  name: "clientPhone",
                  type: "string",
                },
                {
                  name: "products",
                  type: "array",
                  value: basketdata,
                },
              ]}
              onSuccess={(data, resetForm, query) => {
                resetForm()
                clearBasket()
                localStorage.removeItem('basket')
                notification["success"]({
                  message: data ? t("Успешно изменен!") : t("Успешно!"),
                  duration: 2,
                });
              }}
              onError={(error) => {
                notification["error"]({
                  message: get(error, "errorMessage", t("Произошло ошибка!")),
                  duration: 2,
                });
                console.log("Error", error);
              }}
            >
              {() => {
                return (
                  <div>
                    <div className="relative">
                      <label className="payment-input-label">
                        {t("Ismingiz")}
                      </label>
                      <Field
                        component={Fields.Input}
                        className="payment-input mb-[12px]"
                        name="clientName"
                        type="text"
                        placeholder={t("Ismingizni yozing")}
                        size="large"
                      />
                    </div>
                    <div className="relative">
                      <label className="payment-input-label">
                        {t("Telefon raqamingiz")}
                      </label>
                      <Field
                        component={Fields.Input}
                        className="payment-input"
                        name="clientPhone"
                        type="number"
                        placeholder={t("+998 ** **-**-**")}
                        size="large"
                      />
                    </div>
                    <button type="submit" className="submit-form-btn">
                      {t("Ariza qoldirish")}
                    </button>
                  </div>
                );
              }}
            </Container.Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
