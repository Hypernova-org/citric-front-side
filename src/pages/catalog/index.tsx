import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CatalogCard, CategoryBtns } from 'components';
import { useHooks } from 'hooks'
import { categories, products } from 'mock';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.scss'
import { uniqueId } from 'lodash';

const Catalog = () => {
  const { t, get } = useHooks()
  return (
    <div className='catalog-page'>
      <div className="catalog-hero">
        <h2 className="catalog-hero__title">{t("Katalog")}</h2>
        <div className="catalog-hero__cards">
          <Swiper
            slidesPerView={1}
            initialSlide={2}
            spaceBetween={10}
            loop
            autoplay={{
              delay: 1600
            }}
            speed={1200}
            breakpoints={{
              '1500': {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              '1400': {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              '1200': {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              '992': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              '770': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '700': {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides:true
              },
            }}
            modules={[Autoplay]}
            freeMode={true}
            className="mySwiper desktop-carousel"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className='catalog-category__card' key={get(category, "id")}>
                  <img src={get(category, "img")} alt={get(category, "name")} className="catalog-category__img" />
                  <p className={'category-category__title'} key={get(category, "id")}>
                    {get(category, "title")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            slidesPerView={1}
            initialSlide={1}
            loop
            autoplay={{
              delay: 1600
            }}
            centeredSlides
            speed={1200}
            className="mySwiper mobile-carousel"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className='catalog-category__card' key={get(category, "id")}>
                  <img src={get(category, "img")} alt={get(category, "name")} className="catalog-category__img" />
                  <p className={'category-category__title'} key={get(category, "id")}>
                    {get(category, "title")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      <div className="container catalog-products">
        <h3 className="catalog-products__title">{t("Barchasi")}</h3>
        <CategoryBtns />
        <div className="catalog-list">
          {
            products.map((item) => (
              <CatalogCard key={uniqueId} {...{ item }} />
            ))
          }
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='view-more'>{t("Yana ko’rish")}</button>
      </div>
    </div>
  )
}

export default Catalog