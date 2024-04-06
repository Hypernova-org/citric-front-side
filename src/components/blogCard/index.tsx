import { AboutImgLaptop } from "assets/images";
import { Arrow } from "assets/images/icons";
import { useHooks } from "hooks";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogCard = () => {
  const location = useLocation()
  console.log(location)
  const { get, t } = useHooks();
  return (
    <div className="blog_card">
      <img className="blog_img" src={AboutImgLaptop} alt="blog_img" />
      <p className="blog_title">
        Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223
      </p>
      <p className="blog_desc">
        Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil
        kimyoviy birikmaning ikkita nomidsmodpmd dsm dmk dis moso mos si dsoi
        dsso ndsio dsnois Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quasi autem laboriosam hic fugiat culpa similique cum, perferendis
        explicabo esse. Aspernatur earum dicta eos eaque totam quibusdam unde
        harum nemo blanditiis esse, voluptates facere laudantium magnam! Unde
        esse aperiam dolorem itaque.
      </p>
      <Link to={location.pathname === '/blog' ? '1' : '/blog/1'} className="blog_btn">
        <p>{t("Batafsil ko’rish")}</p>
        <Arrow />
      </Link>
    </div>
  );
};

export default BlogCard;
