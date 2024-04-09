import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useHooks } from 'hooks';
import useStore from "store";

import CartIcon from 'assets/images/icons/cart.svg'
import Qop from "assets/images/qop.png"

import 'swiper/css';
import 'swiper/css/pagination';
import "./style.scss"
import { notification } from 'antd';

interface ICard {
  id: number,
  name: string,
  price: string,
  extract: string,
  images: string[],
  info: string
}

const CatalogCard = ({ item: data, className }: any) => {
  const { addToBasket } = useStore();
  const { get, navigate } = useHooks()

  return (
    <div className={className + ' catalog-card'} key={get(data, "id")}>
      <div className="catalog-card__images">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper cursor-grab"
        >
          {get(data, "images", []).map((i: string) => (
            <SwiperSlide>
              <img src={get(i, "large",)} alt={get(data, "name") + "-image"} className="catalog-carousel__images" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="catalog-card__bottom" onClick={() => navigate(`/product/${get(data, "_id")}`)}>
        <div className="catalog-card__info">
          <p className="catalog-card__name">{get(data, "productTitle")}</p>
          {/* <p className="catalog-card__price">{get(data, "price")}</p> */}
          <button className='addtocart' onClick={(e) => {
            e.stopPropagation()
            notification["success"]({
              message: "Успешно добавлено!",
              duration: 2,
            })
            return (
              addToBasket(data)
            )
          }}>
            <img src={CartIcon} alt="cart-image" className="cart-images" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard