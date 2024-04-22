import { Arrow } from "assets/images/icons";
import { useHooks } from "hooks";

import "./style.scss";
import "./mobile.scss";
import React, { useEffect } from "react";
import gsap from "gsap";
interface VacancyProps {
  title: string;
  type: string;
  salary: string;
  time: string;
}
const Vacancies = () => {
  let mm = gsap.matchMedia();
  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.from('.vacancies_page', {
        duration: 1,
        opacity: 0,
        y: 50,
      }); });
  }, )
  const { t } = useHooks();
  return (
    <div className="vacancies_page container">
      <p className="vacancy_title">{t("Bo’sh ish o’rinlari")}</p>
      <div className="vacancies">
        <Vacancy title="Hello" time="jsdcidcsiu" salary="djcs" type="sdf" />
      </div>

      <button className="more_vacancies">{t("Yana ko'rish")}</button>
    </div>
  );
};

export default Vacancies;
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
