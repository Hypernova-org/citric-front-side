import { useEffect, useState } from 'react'
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
    }, ...get(categoriesData, "data", [])
  ]

  console.log(selectedCategory?._id);

  return (
    <div className="catalog-section">
      <h2 className="catalog-heading">{t("Katalog")}</h2>
      <div className="catalog-categories">
        {categories.map((category: any) => (
          <button
            className={get(selectedCategory, "_id") == get(category, "_id") ? 'selectedCategory category-btn' : 'category-btn'}
            onClick={() => setSelectedCategory(category)}
            key={get(category, "_id")}>
            {get(category, "_v") == 999 ? t(get(category, "categoryName")) : get(category, "categoryName")}
          </button>
        ))}
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
            {({ items, meta }) => {
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
  );
};

export default Catalog;
