import { Arrow } from "assets/images/icons";
import { useHooks } from "hooks";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = ({ blog }: any) => {
  const location = useLocation()
  const { get, t, navigate } = useHooks();
  return (
    <div className="blog_card">
      <img className="blog_img" src={get(blog, "images[0].large")} alt="citric.uz" />
      <p className="blog_title">
        {get(blog, "title")}
      </p>
      <p className="blog_desc">
        {get(blog, "description")}
      </p>
      <div
       onClick={() => (
        navigate(`/blog/${get(blog, "_id")}`),
        window.scrollTo({
          behavior: "smooth",
          top: 0,
          left: 0
        })
      )} className="blog_btn cursor-pointer">
        <p>{t("Batafsil ko’rish")}</p>
        <Arrow />
      </div>
    </div>
  );
};

export default BlogCard;
