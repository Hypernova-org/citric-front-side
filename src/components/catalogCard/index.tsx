import { useHooks } from 'hooks';
import useStore from "store";

import CartIcon from 'assets/images/icons/cart.svg'

import "./style.scss"
import { notification } from 'antd';

const CatalogCard = ({ item: data, className }: any) => {
  const { addToBasket } = useStore()
  const { get, navigate, t } = useHooks()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    notification.success({
      message: t("Успешно добавлено!"),
      duration: 2,
    })
    addToBasket(data)
  }

  return (
    <div className={className + ' catalog-card'} key={get(data, "id")}>
      {/* Optional: Badge for new or featured products */}
      {/* <span className="catalog-card__badge">New</span> */}
      
      <div 
        className="catalog-card__images"
        onClick={() => {
          navigate(`/product/${get(data, "_id")}`)
          window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0
          })
        }}
      >
        <div className="catalog-card__img-wrapper">
          <img 
            src={get(data, "image1[0].large")} 
            alt={get(data, "productTitle")} 
            className="catalog-card__img" 
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="catalog-card__bottom">
        <div className="catalog-card__info">
          <h3 
            className="catalog-card__name"
            onClick={() => {
              navigate(`/product/${get(data, "_id")}`)
              window.scrollTo({ behavior: "smooth", top: 0, left: 0 })
            }}
          >
            {get(data, "productTitle")}
          </h3>
        </div>
        
        <button 
          className='addtocart' 
          onClick={handleAddToCart}
          aria-label={t("Savatchaga qo'shish")}
        >
          <img src={CartIcon} alt="" className="cart-images" />
        </button>
      </div>
    </div>
  )
}

export default CatalogCard
