import { TitleArrow } from "assets/images/icons";
import BlogCard from "components/blogCard";
import React from "react";

const ThreeBlogs = () => {
  return (
    <div className="three_blogs">
      <div className="three_blogs_title">
        <p className="">Blogs</p>
        <TitleArrow/>
      </div>
      <div className="three_blogs_cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default ThreeBlogs;
