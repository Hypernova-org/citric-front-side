import Qop from "assets/images/qop.png"
import Tyubik from "assets/images/tyubik.png"
import CategoryImg1 from "assets/images/category-img1.png"
import CategoryImg2 from "assets/images/category-img2.png"
import CategoryImg3 from "assets/images/category-img3.png"
import CategoryImg4 from "assets/images/category-img4.png"
import CategoryImg5 from "assets/images/category-img5.png"
import CategoryImg6 from "assets/images/category-img6.png"
import CategoryImg7 from "assets/images/category-img7.png"

const categories = [
  {
    id: 1,
    title: "Antioksidantlar",
    img: CategoryImg1,
  },
  {
    id: 2,
    title: "Xushboy moddalar",
    img: CategoryImg2,
  },
  {
    id: 3,
    title: "Konservantlar",
    img: CategoryImg3,
  },
  {
    id: 4,
    title: "Shirinlashtiruvchilar",
    img: CategoryImg4,
  },
  {
    id: 5,
    title: "Oziq-ovqat qo’shimchalari",
    img: CategoryImg5,
  },
  {
    id: 6,
    title: "Stabilizatorlar",
    img: CategoryImg6,
  },
  {
    id: 7,
    title: "Ta’mni kuchaytiruchi",
    img: CategoryImg7,
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

export { categories, products }