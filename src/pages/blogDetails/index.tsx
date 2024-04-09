import { AboutImgLaptop } from "assets/images";
import ThreeBlogs from "components/threeblogs";
import { useHooks } from "hooks";
import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { get, t } = useHooks();
  return (
    <div className="details_page container">
      <div className="details_top">
        <Link className="back_link" to={"/blog"}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.67008 8.50001L11.1762 12.006L10.1745 13.0078L5.66663 8.50001L10.1745 3.99219L11.1762 4.99392L7.67008 8.50001Z"
              fill="black"
            />
          </svg>
          <p>{t("Orqaga")}</p>
        </Link>
        <p className="details_date">20.03.2024</p>
      </div>
      <div className="details_body">
        <p className="details_body__name">
          Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223
        </p>
        <img className="details_body__img" src={AboutImgLaptop} alt="citric.uz" />'
        <p className="details_body__desc">
          These are two names for the same chemical compound, a preservative
          commonly used in the food industry These are two names for the same
          chemical compound, a preservative commonly used in the food
          industryThese are two names for the same chemical compound, a
          preservative commonly used in the food industryThese are two names for
          the same chemical compound, a preservative commonly used in the food
          industryThese are two names for the same chemical compound, a
          preservative commonly used in the food industry. These are two names
          for the same chemical compound, a preservative commonly used in the
          food industry These are two names for the same chemical compound, a
          preservative commonly used in the food industryThese are two names for
          the same chemical compound, a preservative commonly used in the food
          industryThese are two names for the same chemical compound, a
          preservative commonly used in the food industryThese are two names for
          the same chemical compound, a preservative commonly used in the food
          industry
        </p>
        <div className="details_images">
          <img src={AboutImgLaptop} alt="citric.uz" />
          <img src={AboutImgLaptop} alt="citric.uz" />
        </div>
      </div>
      <ThreeBlogs/>
    </div>
  );
};

export default BlogDetails;
