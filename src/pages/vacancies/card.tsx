import { useState } from "react";
import Container from "modules/container";
import { useHooks } from "hooks";
import { Arrow } from "assets/images/icons";

interface VacancyProps {
  title: string;
  type: string;
  salary: string;
  time: string;
  address: string;
  onClick: any;
}

const Vacancy = (props: VacancyProps) => {

  const { t, get } = useHooks();

  return (

    <div className="vacancy_item" onClick={props.onClick}>
      <div className="vacancy_top">
        <p className="vacancy_text">{t("Ish turi")}</p>
        <p className="vacancy_type">{props.title}</p>
      </div>
      <div className="vacancy_body">
        <p className="vacancy_desc">
          {props.title}
        </p>
        <p className="vacancy_salary">
          {props.salary}
        </p>
        <p className="vacancy_location">
          {props.address}
        </p>
        <p className="vacancy_time">
          {props.time}
        </p>
        <button className="vacancy_more hover:text-[#70B32F]">Batafsil ma’lumot</button>
      </div>
      <div className="vacancy_bottom">
        <a href="https://t.me/Citric_422" target="_blank" rel="noreferrer" className="vacancy_btn">
          <p>Ariza yuborish</p>
          <Arrow />
        </a>
      </div>
    </div>

  );
};

export default Vacancy