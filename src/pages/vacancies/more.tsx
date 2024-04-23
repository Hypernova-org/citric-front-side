import { useHooks } from "hooks";
import "./style.scss"
const More = ({moreModal}: any) => {
  const { t, get } = useHooks();

  
  const data = get(moreModal, "data.item")

  return (
    <div className="overflow-y-scroll h-[350px] more">
      <div className="mr-5">
        <p className="text-[16px] text-[#70B32F] ">{t("Ish turi")}</p>
        <p  className="text-[32px] text-[#70B32F]">{get(data, "title")}</p>
      </div>
      <div className="text-[18px] text-[black] mt-10 flex flex-col gap-5">
        <p className="">
          {get(data, "description")}
        </p>
        <p className="">
        {t("Maosh")}: {get(data, "salary")}
        </p>
        <p className="">
        {t("Manzil")}: {get(data, "adress")}
        </p>
        <p className="">
          {t("Ish vaqti")}: {get(data, "workingTime")}
        </p>
      </div>
    </div>
  )
}

export default More