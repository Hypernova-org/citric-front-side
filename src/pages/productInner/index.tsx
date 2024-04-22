import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useGet, useHooks } from "hooks";
import { CatalogCard } from "components";
import useStore from "store";

import { GoBack, PlusIcon, MinusIcon } from "assets/images/icons";
import CartIconWhite from "assets/images/icons/shopping-cart-white.svg";
import ArrowUp from "assets/images/icons/arrow-up.svg";

import "swiper/css/pagination";
import "swiper/css";
import "./style.scss";
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";
import { notification } from "antd";
import gsap from "gsap";

const ProductInner = () => {
  let mm = gsap.matchMedia();
  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.from('.inner_page', {
        duration: 1,
        opacity: 0,
        y: 50,
      }); });
  }, [])
  const { t, get, params } = useHooks();
  const [count, setCount] = useState(1);
  const { addToBasket, updateQuantity } = useStore();
  const [error, setError] = useState(false);

  const { data } = useGet({
    name: `products-${get(params, "id")}`,
    url: `products/${get(params, "id")}`,
    onSuccess: (data) => {
      setError(false);
    },
    onError: (error) => {
      setError(true);
    },
  });

  const productData = get(data, "data", []);

  const { data: productsData } = useGet({
    name: "products",
    url: "products",
    params: {
      extra: {
        category: get(productData, "category._id", "1"),
      },
    },
    onSuccess: (data) => { },
    onError: (error) => {
      setError(true);
    },
  });

  const slicedData =
    get(productsData, "data", []).length > 3
      ? get(productsData, "data", []).slice(2, 5)
      : get(productsData, "data");

  return (
    <div className="container inner_page ">
      <Link to="/catalog" className="goback-button">
        <GoBack />
        <p>{t("Orqaga")}</p>
      </Link>
      {error ? (
        <p>{t("Bu mahsulot mavjud emas")}</p>
      ) : (
        <>
          <div className="order-section">
            <div className="order-section__left">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={get(productData, "image1[0].large")}
                    alt={get(productData, "name") + "-image"}
                    className="catalog-carousel__images"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={get(productData, "image2[0].large")}
                    alt={get(productData, "name") + "-image"}
                    className="catalog-carousel__images"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={get(productData, "image3[0].large")}
                    alt={get(productData, "name") + "-image"}
                    className="catalog-carousel__images"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="order-section__right">
              <div className="order-section__right-top">
                <p className="product-name">
                  {get(productData, "productTitle")}
                </p>
              </div>
              <div className="order-section__right-mid">
                <p className="product-amount">{t("Miqdori")}:</p>
                <div className="amount-controller">
                  <button
                    disabled={count == 1}
                    onClick={() => setCount(count - 1)}
                  >
                    <MinusIcon className={count == 1 ? "disabledCount counter" : "counter"} />
                  </button>
                  <p className="counter-amount">{count}</p>
                  <button onClick={() => setCount(count + 1)}>
                    <PlusIcon className="counter" />
                  </button>
                </div>
              </div>
              <div className="order-section__right-bottom">
                <p className="product-extract">
                  {get(productData, "description")}
                </p>
                <button
                  className="add-tocart"
                  onClick={() => (
                    notification["success"]({
                      message: t("Успешно добавлено!"),
                      duration: 2,
                    }),
                    addToBasket(productData),
                    updateQuantity(
                      get(productData, "_id",0),
                      count,
                      get(productData, "price",0)
                    )
                  )}
                >
                  <img
                    src={CartIconWhite}
                    alt="citric.uz"
                    className="cart-icon"
                  />
                  <p>{t("Savatchaga qo'shish")}</p>
                </button>
              </div>
            </div>
          </div>
          <div className="product-info">
            <p className="product-info__title">
              {t("Mahsulot haqida ma’lumotlar")}
            </p>
            <p className="product-info__desc">{get(productData, "about")}</p>
          </div>
          <div className="product-info">
            <p className="product-info__title">{t("Mahsulot afzalliklari")}</p>
            <p className="product-info__desc">
              {get(productData, "advantages")}
            </p>
          </div>
        </>
      )}
      <h2 className="product-heading">
        {t("O’xshash mahsulotlar")}
        <img src={ArrowUp} alt="citric.uz" className="text-arrow" />
      </h2>
      <div className="similar-list">
        {slicedData?.map((item) => (
          <CatalogCard
            key={uniqueId}
            className="max-w-[324px] mr-[30px] mb-[24px]"
            {...{ item }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInner;
