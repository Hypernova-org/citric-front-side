import { useEffect, useState } from "react";
import gsap from "gsap";
import Container from "modules/container";
import { useHooks } from "hooks";

import Vacancy from './card'

import Nodata from "assets/images/icons/nodata.svg"

import "./style.scss";
import "./mobile.scss";

const Vacancies = () => {
  let mm = gsap.matchMedia();
  const { t, get } = useHooks();
  const [page, setPage] = useState(1);
  const [allData, setAllData]: any = useState([]);

  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.from('.vacancies_page', {
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });
  }, [])

  

  return (
    <div className="vacancies_page container">
      <p className="vacancy_title">{t("Bo’sh ish o’rinlari")}</p>
      <div className="vacancies">
        <Container.All
          name='vacancies'
          url='vacancies'
          params={{
            limit: 6,
            page
          }}
        >
          {({ isLoading, items, meta }) => {
            return (
              <>
                {items.length ? (
                  items.map((item) => (
                    <Vacancy title={get(item, "title", "")} time="jsdcidcsiu" salary="djcs" type={get(item, "description", "")} />
                  ))
                ) : (<div className="nodata flex justify-center items-center flex-col mt-20">
                  <img src={Nodata} alt="no-data-icon" />
                  <p className="mt-[10px] text-center">{t("Hech qanday ma’lumot topilmadi")}</p>
                </div>)}
                {meta && page < meta.totalCount && meta.pageCount != meta.currentPage && 6 <= items.length && (
                  <div className="mt-[-20px] flex justify-center">
                    <div className='flex justify-center items-center'>
                      <button className='view-more'
                        onClick={() => {
                          setPage(page + 1);
                          setAllData([...allData, ...items])
                        }}>{t("Yana ko’rish")}</button>
                    </div>
                  </div>
                )}
              </>

            )
          }}

        </Container.All>
      </div>
    </div>
  );
};

export default Vacancies;
