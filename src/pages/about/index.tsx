import { AboutImgLaptop, AboutImgMobile, AboutImgTablet } from "assets/images";
import React from "react";
import "./_about.scss";
import "./mobile.scss";
import { Arrow, Comment, Download } from "assets/images/icons";
import { useHooks } from "hooks";

interface CommentProps {
  title: string;
  img: string;
  author: string;
}
const About = () => {
  const { t, get } = useHooks();
  return (
    <div className="about_page container">
      <p className="about_page_title">{t("Kompaniya haqida")}</p>
      <picture>
        <source media="(max-width:450px)" srcSet={AboutImgMobile} />
        <source media="(max-width:990px)" srcSet={AboutImgTablet} />
        <img
          className="about_page_img"
          src={AboutImgLaptop}
          alt="Hero section img"
        />
      </picture>
      <div className="about_page_brands">
        <p className="brands_title">{t("Biz ishlagan brendlar")}</p>
        <div className="brands_elements">
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
          <picture>
            <source media="(max-width:450px)" srcSet={AboutImgMobile} />
            <source media="(max-width:990px)" srcSet={AboutImgTablet} />
            <img
              className="brands_elements_element"
              src={AboutImgLaptop}
              alt="Hero section img"
            />
          </picture>
        </div>
      </div>
      <div className="img_gallery">
        <div className="img4">
          <img src={AboutImgLaptop} alt="" />
        </div>
        <div className="img1">
          <img src={AboutImgLaptop} alt="" />
        </div>
        <div className="img3">
          <img src={AboutImgLaptop} alt="" />
        </div>
        <div className="img2">
          <img src={AboutImgLaptop} alt="" />
        </div>
      </div>
      <p className="comment_title">{t("Sertifikatlar")}</p>
      <div className="certificates">
        <img src={AboutImgLaptop} alt="" />
        <img src={AboutImgLaptop} alt="" />
      </div>
      <p className="comment_title">{t("Mijoz fikrlari")}</p>
      <div className="about_page_comments">
        <CommentCard
          title="Hello"
          img="n"
          author="advndsionivjs vjv sdjvnjsd vsjdvs jvv sjv"
        />
      </div>
      <button className="more_comments">{t("Yana ko'rish")}</button>
      <div className="recv_container">
        <p className="recv_text">{t("Kompaniya rekvizitlari")}</p>
        <button className="recv_btn">
          <p>{t("PDF shaklda yuklab olish")}</p>
          <Download />
        </button>
      </div>
    </div>
  );
};

export default About;

const CommentCard = (props: CommentProps) => {
  return (
    <div className="comment_item">
      <Comment />
      <p className="comment_desc">
        3 yillik tajribaga ega Call center orqali sotuvlarni amalga oshiruvchi
        mutaxassis kerak. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iure eius eum officia possimus nemo, reiciendis, rerum ipsa
        deleniti perspiciatis excepturi tempore unde numquam? Aliquam unde ab
        odio harum dolores nulla? blanditiis vero quod nam illo.{props.title}
      </p>
      <div className="comment_author">
        <img className="comment_author__img" src={AboutImgMobile} alt="" />
        <p className="comment_author__name">Sherzodbek M.</p>
      </div>
    </div>
  );
};
