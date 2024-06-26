import { useEffect, useState } from 'react'
import { useGet, useHooks } from 'hooks'
import { CatalogCard } from 'components';

import Container from 'modules/container';
import Loading from 'components/loading';

import Nodata from "assets/images/icons/nodata.svg"
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

import { HeroIcon1, HeroIcon2, HeroIcon3 } from "assets/images/icons";

const Catalog = () => {
  const { t, get } = useHooks()
  const [page, setPage] = useState(1);
  const [allData, setAllData]: any = useState([]);

  const [selectedCategory, setSelectedCategory] = useState({
    categoryName: "Hammasi",
    _v: 999,
    _id: "1"
  },)

  const { data: categoriesData } = useGet({
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

  useEffect(()=>(
    setPage(1),
    setAllData([])
  ),[selectedCategory])

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
              limit: 8,
              page,
              extra: {
                category: selectedCategory?._id == "1" ? "" : selectedCategory?._id
              }
            }}
          >
            {({ isLoading, items, meta }) => {
              return (
                <div>
                 {isLoading ? <Loading style={{alignItems:"flex-start", marginTop: "80px"}}/> : items.length ? (<div className='catalog-list'>
                    {[...allData, ...items].map((item: any) => (
                      <CatalogCard key={get(item, 'id')} {...{ item }} />
                    ))}
                  </div>) : (<div className="nodata flex justify-center items-center flex-col mt-20">
                    <img src={Nodata} alt="no-data-icon" />
                    <p className="mt-[10px] text-center">{t("Hech qanday ma’lumot topilmadi")}</p>
                  </div>)}
                  {meta && page < meta.totalCount&& meta.pageCount != meta.currentPage && 6 <= items.length && (
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
