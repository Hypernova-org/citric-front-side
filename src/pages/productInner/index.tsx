import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { useGet, useHooks } from 'hooks'
import { CatalogCard } from 'components'
import useStore from "store";

import { GoBack, PlusIcon, MinusIcon } from 'assets/images/icons'
import CartIconWhite from 'assets/images/icons/shopping-cart-white.svg'
import ArrowUp from 'assets/images/icons/arrow-up.svg'

import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import { uniqueId } from 'lodash';

const ProductInner = () => {
  const { t, get, params } = useHooks()
  const [count, setCount] = useState(0)
  const { addToBasket } = useStore();

  const [selectedCategory, setSelectedCategory] = useState({
    categoryName: "Hammasi",
    _v: 999,
    _id: "1"
  },)

  const { isLoading: productsLoading, data: productsData } = useGet({
    name: "products",
    url: "products",
    params: {
      extra: {
        category: get(selectedCategory, "_id") == "1" ? "" : get(selectedCategory, "_id")
      }
    },
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const slicedData = get(productsData, "data", []).length > 3 ? get(productsData, "data", []).slice(0, 3) : get(productsData, "data")

  const { isLoading, data } = useGet({
    name: `products-${get(params, "id")}`,
    url: `products/${get(params, "id")}`,
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const productData = get(data, "data", [])

  return (
    <div className='container '>
      <button className='goback-button'>
        <GoBack />
        <p>{t("Orqaga")}</p></button>
      <div className="order-section">
        <div className="order-section__left">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {get(productData, "images", []).map((i: string) => (
              <SwiperSlide key={i}>
                <img src={get(i,"large")} alt={get(productData, "name") + "-image"} className="catalog-carousel__images" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="order-section__right">
          <div className="order-section__right-top">
            <p className="product-name">{get(productData, "productTitle")}</p>
          </div>
          <div className="order-section__right-mid">
            <p className="product-amount">Miqdori:</p>
            <div className='amount-controller'>
              {/* <button disabled={count == 0} onClick={() =>
                updateQuantity(
                  item.product.id,
                  Math.max(1, item.quantity - 1)
                )
              }> */}
              <button disabled={count == 0} onClick={() => setCount(count - 1)}>
                <MinusIcon className={count == 0 ? "disabledCount counter" : "counter"} />
              </button>
              <p className="counter-amount">{count}</p>
              {/* <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}> */}
              <button onClick={() => setCount(count + 1)}>
                <PlusIcon className="counter" />
              </button>
            </div>
          </div>
          <div className="order-section__right-bottom">
            <p className="product-extract">
            {get(productData, "description")}
            </p>
            <button className='add-tocart'
             onClick={() => addToBasket(productData)}
             >
              <img src={CartIconWhite} alt="cart" className="cart-icon" />
              <p>{t("Savatchaga qo'shish")}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <p className="product-info__title">{t("Mahsulot haqida ma’lumotlar")}</p>
        <p className="product-info__desc">
          {get(productData, "about")}
        </p>
      </div>
      <div className="product-info">
        <p className="product-info__title">{t("Mahsulot afzalliklari")}</p>
        <p className="product-info__desc">
          {get(productData, "advantages")}
        </p>
      </div>
      <h2 className="product-heading">{t("O’xshash mahsulotlar")}
        <img src={ArrowUp} alt="arrow-up" className="text-arrow" />
      </h2>
      <div className="similar-list">
        {
          slicedData?.map((item) => (
            <CatalogCard key={uniqueId} className="max-w-[324px] mr-[30px] mb-[24px]" {...{ item }} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductInner