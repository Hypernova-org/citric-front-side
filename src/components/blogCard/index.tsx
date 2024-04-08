import { AboutImgLaptop } from "assets/images";
import { Arrow } from "assets/images/icons";
import { useHooks } from "hooks";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = ({ blog }: any) => {
  const location = useLocation()
  const { t, get } = useHooks();

  return (
    <div className="blog_card">
      <img className="blog_img" src={get(blog, "images[0].large")} alt="blog_img" />
      <p className="blog_title">
        {get(blog, "title")}
      </p>
      <p className="blog_desc">
        {get(blog, "description")}
      </p>
      <Link to={`/blog/${get(blog, "_id")}`} className="blog_btn">
        <p>{t("Batafsil ko’rish")}</p>
        <Arrow />
      </Link>
    </div>
  );
};

export default BlogCard;
