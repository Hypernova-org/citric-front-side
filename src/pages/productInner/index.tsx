import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { useHooks } from 'hooks'
import { CatalogCard } from 'components'
import { products } from 'mock'

import { GoBack, PlusIcon, MinusIcon } from 'assets/images/icons'
import CartIconWhite from 'assets/images/icons/shopping-cart-white.svg'
import ArrowUp from 'assets/images/icons/arrow-up.svg'

import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import { uniqueId } from 'lodash';

const ProductInner = () => {
  const { t, get } = useHooks()
  const [count, setCount] = useState(0)
  const slicedData = products.slice(0, 3)
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
            {get(products[0], "images", []).map((i: string) => (
              <SwiperSlide key={i}>
                <img src={i} alt={get(products[0], "name") + "-image"} className="catalog-carousel__images" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="order-section__right">
          <div className="order-section__right-top">
            <p className="product-name">Organik xlorella kukuni</p>
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
              Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.
            </p>
            <button className='add-tocart'>
              <img src={CartIconWhite} alt="cart" className="cart-icon" />
              <p>{t("Savatchaga qo'shish")}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <p className="product-info__title">Mahsulot haqida ma’lumotlar</p>
        <p className="product-info__desc">
          Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi.

          Bug'doy o'ti kukunini smetana yoki sharbatga qo'shish oson; Tez suratga olish uchun uni suv yoki sevimli suyuqlik bilan aralashtiring
        </p>
      </div>
      <h2 className="product-heading">{t("O’xshash mahsulotlar")}
        <img src={ArrowUp} alt="arrow-up" className="text-arrow" />
      </h2>
      <div className="similar-list">
        {
          slicedData.map((item) => (
            <CatalogCard key={uniqueId} className="max-w-[324px] mr-[30px] mb-[24px]" {...{ item }} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductInner