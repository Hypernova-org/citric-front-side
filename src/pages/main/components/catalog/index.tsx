import { useState } from 'react'
import { useGet, useHooks } from 'hooks'
import { CatalogCard } from 'components';

import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { HeroIcon1, HeroIcon2, HeroIcon3 } from "assets/images/icons";
import Container from 'modules/container';

const Catalog = () => {
  const { t, get } = useHooks()
  const [page, setPage] = useState(1);

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
    <div className="catalog-section">
      <h2 className="catalog-heading">{t("Katalog")}</h2>
      <div className="catalog-categories">
        {categories.map((category: any) => (
          <button
            className={get(selectedCategory, "_id") == get(category, "_id") ? 'selectedCategory category-btn' : 'category-btn'}
            onClick={() => setSelectedCategory(category)}
            key={get(category, "id")}>
            {get(category, "_v") == 999 ? t(get(category, "categoryName")) : get(category, "categoryName")}
          </button>
        ))}
        <div className="catalog-list">
          <Container.All
            name='products'
            url='products'
            params={{
              limit: 6,
              page
            }}
          >
            {({ isLoading, items, meta }) => {
              return (
                <div>
                  <div className='catalog-list'>
                    {items?.map((item) => (
                      <CatalogCard key={get(item, 'id')} {...{ item }} />
                    ))}
                  </div>
                  {meta && meta.perPage && (
                    <div className="mt-[-20px] flex justify-center">
                      <div className='flex justify-center items-center'>
                        <button className='view-more'
                          onClick={() => {
                            setPage(page + 1);
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
  );
};

export default Catalog;
