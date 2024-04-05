import { useHooks } from 'hooks'
import { CatalogCard } from 'components'
import { products } from 'mock'

import { GoBack, PlusIcon, MinusIcon } from 'assets/images/icons'
import CartIconWhite from 'assets/images/icons/shopping-cart-white.svg'
import './style.scss'
import { useState } from 'react'

const ProductInner = () => {
  const { t, get } = useHooks()
  const [count, setCount] = useState(0)
  const slicedData = products.slice(0, 3)
  return (
    <div className='container '>
      <button className='goback-button'>
        <GoBack />
        <p>{t("Orqaga")}</p></button>
      <div className="order-section">
        <div className="order-section__left"></div>
        <div className="order-section__right">
          <div className="order-section__right-top">
            <p className="product-name">Organik xlorella kukuni</p>
          </div>
          <div className="order-section__right-mid">
            <p className="product-amount">Miqdori:</p>
            <div className='amount-controller'>
              <button disabled={count == 0} onClick={() => setCount(count - 1)}>
                <MinusIcon className={count == 0 ? "disabledCount counter" : "counter"} />
              </button>
              <p className="counter-amount">{count}</p>
              <button onClick={() => setCount(count + 1)}>
                <PlusIcon className="counter" />
              </button>
            </div>
          </div>
          <div className="order-section__right-bottom">
            <p className="product-extract">
              Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.
            </p>
            <button className='add-tocart'>
              <img src={CartIconWhite} alt="cart" className="cart-icon" />
              <p>{t("Savatchaga qo'shish")}</p>
            </button>
          </div>
        </div>
      </div>
      <h2 className="product-heading">{t("O’xshash mahsulotlar")}</h2>
      <div className="similar-list">
        {
          slicedData.map((item) => (
            <CatalogCard className="max-w-[324px] mr-[30px] mb-[24px]" {...{ item }} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductInner