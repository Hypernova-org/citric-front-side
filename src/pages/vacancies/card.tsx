import { useState } from "react";
import Container from "modules/container";
import { useHooks } from "hooks";
import { Arrow } from "assets/images/icons";
import { Modal } from "antd";
import Application from "./application";

interface VacancyProps {
  title: string;
  type: string;
  salary: string;
  time: string;
  address: string;
  onClick: any;
}

const Vacancy = ({data, onClick, showApplicationModal}: any) => {
  const { t, get } = useHooks();
  // const [applicationModal, showApplicationModal]: any = useState({ open: false, data: {} });

  return (
    <div className="vacancy_data cursor-pointer" onClick={onClick}>
      <div className="vacancy_top">
        <p className="vacancy_text">{t("Ish turi")}</p>
        <p className="vacancy_type">{get(data, "title")}</p>
      </div>
      <div className="vacancy_body">
        <p className="vacancy_desc">
          {get(data, "title")}
        </p>
        <p className="vacancy_salary">
          {get(data, "salary")}
        </p>
        <p className="vacancy_location">
          {get(data, "address")}
        </p>
        <p className="vacancy_time">
          {get(data, "time")}
        </p>
        <button className="vacancy_more hover:text-[#70B32F]">{t("Batafsil ma’lumot")}</button>
      </div>
      <div className="vacancy_bottom">
        <div onClick={(e) => (
          e.stopPropagation(),
          showApplicationModal({ open: true, data: {data} })
        )} className="vacancy_btn">
          <p>{t("Ariza yuborish")}</p>
          <Arrow />
        </div>
      </div>
    </div>

  );
};

export default Vacancy