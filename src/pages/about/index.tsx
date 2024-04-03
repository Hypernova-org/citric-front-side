import { AboutImgLaptop, AboutImgMobile, AboutImgTablet } from "assets/images";
import React from "react";
import "./_about.scss";
import "./mobile.scss"
import { Arrow, Download } from "assets/images/icons";
import { useHooks } from "hooks";
interface VacancyProps {
  title: string;
  type: string;
  salary: string;
  time: string;
}
const About = () => {
  const { t, get } = useHooks();
  return (
    <div className="about_page container">
      <p className="about_page_title">{t("Kompaniya haqida")}</p>
      <picture>
        <source media="(max-width:450px)" srcSet={AboutImgMobile} />
        <source media="(max-width:990px)" srcSet={AboutImgTablet} />
        <img
          className="about_page_img"
          src={AboutImgLaptop}
          alt="Hero section img"
        />
      </picture>
      <div className="about_page_brands">
        <p className="brands_title">{t("Biz ishlagan brendlar")}</p>
        <div className="brands_elements">
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
        </div>
      </div>
      <p className="vacancy_title">{t("Bo’sh ish o’rinlari")}</p>
      <div className="about_page_vacancies">
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
        <Vacancy
          title="Hello"
          type="Mello"
          salary="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
          time="jsdcidcsiu"
        />
      </div>
      <button className="more_vacancies">{t("Yana ko'rish")}</button>
      <div className="recv_container">
        <p className="recv_text">{t("Kompaniya rekvizitlari")}</p>
        <button className="recv_btn">
          <p>{t("PDF shaklda yuklab olish")}</p>
          <Download />
        </button>
      </div>
    </div>
  );
};

export default About;

const Vacancy = (props: VacancyProps) => {
  return (
    <div className="vacancy_item">
      <div className="vacancy_top">
        <p className="vacancy_text">Ish turi</p>
        <p className="vacancy_type">{props.type}</p>
      </div>
      <div className="vacancy_body">
        <p className="vacancy_desc">
          3 yillik tajribaga ega Call center orqali sotuvlarni amalga oshiruvchi
          mutaxassis kerak. {props.title}
        </p>
        <p className="vacancy_salary">
          Oylik sotuvdan foiz chiqarib beriladi. 3 mln dan 15 mln gacha bo’lishi
          mumkin. {props.salary}
        </p>
        <p className="vacancy_location">
          Manzil: Toshkent shahri, Olmazor tumani, ko'ch. Jeymi, 299.
        </p>
        <p className="vacancy_time">
          Ish vaqti: 6/1, 9:00 dan 17:00 gacha {props.time}
        </p>
        <button className="vacancy_more">Batafsil ma’lumot</button>
      </div>
      <div className="vacancy_bottom">
        <button className="vacancy_btn">
          <p>Ariza yuborish</p>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
