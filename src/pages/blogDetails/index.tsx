import ThreeBlogs from "components/threeblogs";
import { useGet, useHooks } from "hooks";
import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { get, t, params } = useHooks();

  const { isLoading, data } = useGet({
    name: `blogs-${get(params, "id")}`,
    url: `blogs/${get(params, "id")}`,
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const blogData = get(data, "data")

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
        <p className="details_date">{(get(blogData, "createdAt", "")).slice(0,10).replaceAll("-",".")}
        </p>
      </div>
      <div className="details_body">
        <p className="details_body__name">
          {get(blogData, "title")}
        </p>
        <img className="details_body__img" src={get(blogData, "images[0].large")} alt="citric.uz" />
        <p className="details_body__desc">
          {get(blogData, "description")}
        </p>
        {/* <div className="details_images">
          <img src={get(blogData, "images[1].large")} alt="citric.uz" />
          <img src={get(blogData, "images[2].large")} alt="citric.uz" />
        </div> */}
      </div>
      <ThreeBlogs />
    </div>
  );
};

export default BlogDetails;
