import { useHooks } from "hooks";

const More = ({moreModal}: any) => {
  const { t, get } = useHooks();

  
  const data = get(moreModal, "data.item")

  return (
    <div>
      <div className="vacancy_top">
        <p className="vacancy_text">{get(data, "title")}</p>
        <p className="vacancy_type">{get(data, "type")}</p>
      </div>
      <div className="vacancy_body">
        <p className="vacancy_desc">
          {get(data, "description")}
        </p>
        <p className="vacancy_salary">
          {get(data, "salary")}
        </p>
        <p className="vacancy_location">
          {get(data, "adress")}
        </p>
        <p className="vacancy_time">
          {get(data, "workingTime")}
        </p>
      </div>
    </div>
  )
}

export default More