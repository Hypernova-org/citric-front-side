import { Arrow } from "assets/images/icons";
import { useHooks } from "hooks";
import { Link } from "react-router-dom";
import "./style.scss";
import "./mobile.scss";

const NotFound = () => {
  const { t } = useHooks();
  return (
    <div className="notfound_page">
      <div className="not_first"></div>
      <div className="not_second"></div>
      <div className="not_third"></div>
      <div className="not_texts">
        <p className="text_404">404</p>
        <p className="first_text">{t("Sahifa topilmadi")}</p>
        <p className="second_text">
          {t("Kechirasiz siz qidirgan sahifani topa olmadik")}
        </p>
        <Link className="not_link" to={"/"}>
          <p>{t("Asosiy sahifaga o'tish")}</p>
          <Arrow />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
