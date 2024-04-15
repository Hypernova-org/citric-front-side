import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CatalogCard, CategoryBtns } from 'components';
import { useGet, useHooks } from 'hooks'

import '../../components/categoryBtns/style.scss'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.scss'
import { uniqueId } from 'lodash';
import { useState } from 'react';
import Container from 'modules/container';

const Catalog = () => {
  const { t, get } = useHooks()
  const [page, setPage] = useState(1);
  const [allData, setAllData]: any = useState([]);

  const [selectedCategory, setSelectedCategory] = useState({
    categoryName: "Hammasi",
    _v: 999,
    _id: "1"
  },)

  const { isLoading: categoriesLoading, data: categoriesData } = useGet({
    name: "categories",
    url: "categories",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const categories = [
    {
      categoryName: "Hammasi",
      _v: 999,
      _id: "1"
    }, ...get(categoriesData, "data", [])]

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
                // centeredSlides: true
              },
            }}
            modules={[Autoplay]}
            freeMode={true}
            className="mySwiper desktop-carousel"
          >
            {get(categoriesData, "data", []).map((category) => (
              <SwiperSlide key={get(category, "_id")}>
                <div className='catalog-category__card' key={get(category, "id")}>
                  <img src={get(category, "images[0].large")} alt={get(category, "name")} className="catalog-category__img" />
                  <p className={'category-category__title'} key={get(category, "id")}>
                    {get(category, "categoryName")}
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
            {get(categoriesData, "data", []).map((category) => (
              <SwiperSlide key={get(category, "_id")}>
                <div className='catalog-category__card' key={get(category, "id")}>
                  <img src={get(category, "images[0].medium")} alt={get(category, "name")} className="catalog-category__img" />
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
        {/* <h3 className="catalog-products__title">{t("Barchasi")}</h3> */}
        <div className='catalog-categories'>
          {categories.map((category: any) => (
            <button
              className={get(selectedCategory, "_id") == get(category, "_id") ? 'selectedCategory category-btn' : 'category-btn'}
              onClick={() => setSelectedCategory(category)}
              key={get(category, "id")}>
              {get(category, "_v") == 999 ? t(get(category, "categoryName")) : get(category, "categoryName")}
            </button>
          ))}
        </div>

        <div>
          <Container.All
            name='products'
            url='products'
            params={{
              limit: 6,
              page,
              extra: {
                category: selectedCategory?._id == "1" ? "" : selectedCategory?._id
              }
            }}
          >
            {({ isLoading, items, meta }) => {
              return (
                <div>
                  <div className='catalog-list'>
                    {[...allData, ...items].map((item: any) => (
                      <CatalogCard key={get(item, 'id')} {...{ item }} />
                    ))}
                  </div>
                  {meta && page < meta.totalCount && items.length > 6 && (
                    <div className="mt-[-20px] flex justify-center">
                      <div className='flex justify-center items-center'>
                        <button className='view-more'
                          onClick={() => {
                            setPage(page + 1);
                            setAllData([...allData, ...items])
                          }}>{t("Yana ko’rish")}</button>
                      </div>
                    </div>
                  )}
                </div>

              )
            }}

          </Container.All>
        </div>
      </div>
    </div>
  )
}

export default Catalog