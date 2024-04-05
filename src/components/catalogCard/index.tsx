import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useHooks } from 'hooks';
import CartIcon from 'assets/images/icons/cart.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import "./style.scss"

interface ICard {
  id: number,
  name: string,
  price: string,
  extract: string,
  images: string[],
  info: string
}

const CatalogCard = ({ item: data, className }: any) => {
  const { get, navigate } = useHooks()

  return (
    <div className={className + ' catalog-card'} key={get(data, "id")} onClick={() => navigate(`/product/${get(data, "id")}`)}>
      <div className="catalog-card__images">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {get(data, "images", []).map((i: string) => (
            <SwiperSlide>
              <img src={i} alt={get(data, "name") + "-image"} className="catalog-carousel__images" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="catalog-card__bottom">
        <div className="catalog-card__info">
          <p className="catalog-card__name">{get(data, "name")}</p>
          {/* <p className="catalog-card__price">{get(data, "price")}</p> */}
          <button className='addtocart'>
            <img src={CartIcon} alt="cart-image" className="cart-images" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard