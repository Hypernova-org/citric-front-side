import { useState } from 'react'
import { useGet, useHooks } from 'hooks'
import { CatalogCard } from 'components';

import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { HeroIcon1, HeroIcon2, HeroIcon3 } from "assets/images/icons";

const Catalog = () => {
  const { t, get } = useHooks()

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

  const { isLoading: categoriesLoading, data: categoriesData } = useGet({
    name: "categories",
    url: "categories",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const products = get(productsData, "data", [])
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
          {products.map((item) => (
            <CatalogCard key={get(item,'id')} {...{ item }} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="view-more">{t("Yana ko’rish")}</button>
      </div>
    </div>
  );
};

export default Catalog;
