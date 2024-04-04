import { useState } from 'react'
import { useHooks } from 'hooks'
import { CatalogCard } from 'components';

import Qop from "assets/images/qop.png"
import Tyubik from "assets/images/tyubik.png"

import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss'

const Catalog = () => {

  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    title: "Antioksidantlar"
  },)

  const { t, get } = useHooks()

  const categories = [
    {
      id: 1,
      title: "Antioksidantlar"
    },
    {
      id: 2,
      title: "Xushboy moddalar"
    },
    {
      id: 3,
      title: "Konservantlar"
    },
  ]

  const products = [
    {
      id: 1,
      name: "Organik xlorella kukuni (250g)",
      images: [Qop, Qop, Qop],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    },
    {
      id: 2,
      name: "Organik xlorella kukuni (250g)",
      images: [Tyubik, Tyubik, Tyubik],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    },
    {
      id: 3,
      name: "Organik xlorella kukuni (250g)",
      images: [Qop, Qop, Qop],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    },
    {
      id: 4,
      name: "Organik xlorella kukuni (250g)",
      images: [Qop, Tyubik, Qop],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    },
    {
      id: 5,
      name: "Organik xlorella kukuni (250g)",
      images: [Qop, Qop, Qop],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    },
    {
      id: 6,
      name: "Organik xlorella kukuni (250g)",
      images: [Qop, Tyubik, Qop],
      price: "120 000 so’m",
      extract: "Organik bug'doy o'ti kukuni energiya va hayotiylikni bir zumda oshiradigan tabiiy, organik superfooddir. U temir, kaltsiy, magniy, kaliy va xlorofill kabi vitaminlar va minerallarga boy.",
      info: "Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi."
    }
  ]

  return (
    <div className='catalog-section'>
      <h2 className="catalog-heading">{t("Katalog")}</h2>
      <div className="catalog-categories">
        {categories.map((category) => (
          <button className={get(selectedCategory, "id") == get(category, "id") ? 'selectedCategory category-btn' : 'category-btn'} onClick={() => setSelectedCategory(category)} key={get(category, "id")}>
            {get(category, "title")}
          </button>
        ))}

        <div className="catalog-list">
          {
            products.map((item) => (
              <CatalogCard {...{item}}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Catalog