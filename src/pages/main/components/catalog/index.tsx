import { useState } from "react";
import { useHooks } from "hooks";
import { CatalogCard } from "components";
import { categories, products } from "mock";

import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { HeroIcon1, HeroIcon2, HeroIcon3 } from "assets/images/icons";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    title: "Antioksidantlar",
  });

  const { t, get } = useHooks();

  return (
    <div className="catalog-section">
      <h2 className="catalog-heading">{t("Katalog")}</h2>
      <div className="catalog-categories">
        {categories.map((category) => (
          <button
            className={
              get(selectedCategory, "id") == get(category, "id")
                ? "selectedCategory category-btn"
                : "category-btn"
            }
            onClick={() => setSelectedCategory(category)}
            key={get(category, "id")}
          >
            {get(category, "title")}
          </button>
        ))}

        <div className="catalog-list">
          {products.map((item) => (
            <CatalogCard {...{ item }} />
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
