import { useState } from "react";
import Container from "modules/container";
import { useHooks } from "hooks";
import { Arrow } from "assets/images/icons";

interface VacancyProps {
  title: string;
  type: string;
  salary: string;
  time: string;
}

const Vacancy = (props: VacancyProps) => {

  const { t, get } = useHooks();

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

export default Vacancy