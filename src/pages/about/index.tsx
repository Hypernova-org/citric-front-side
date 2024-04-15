import { AboutImg1, AboutImg2, AboutImg3, AboutImg4 } from "assets/images";
import React from "react";
import "./_about.scss";
import "./mobile.scss";
import { Arrow, Comment, Download } from "assets/images/icons";
import { useGet, useHooks } from "hooks";

interface CommentProps {
  description: string;
  author: string;
  image: { medium: string }[];
}
interface Brand {
  image: { medium: string }[];
}
interface Achievement {
  image: { medium: string }[];
}
interface Video {
  url: string;
}

const About = () => {
  
  const handleDownload = () => {
    const fileName = "rekvizit.pdf"; // Specify the file name
    const url = "https://api.citric.uz/rekvizit";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
  };
  const { t, get } = useHooks();
  const { isLoading: brandLoading, data: dataBrand } = useGet({
    name: "brands",
    url: "brands",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const brands: Brand[] = get(dataBrand, "data", []);
  const { isLoading: categoriesLoading, data: dataVideo } = useGet({
    name: "video",
    url: "video",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });
  const video: Video[] = get(dataVideo, "data", []);
  const { isLoading: achievementLoading, data: dataAchievements } = useGet({
    name: "achievements",
    url: "achievements",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const achievements: Achievement[] = get(dataAchievements, "data", []);

  const { isLoading: commentLoading, data: dataComments } = useGet({
    name: "comments",
    url: "comments",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const comments: CommentProps[] = get(dataComments, "data", []);
  return (
    <div className="about_page container">
      <p className="about_page_title">{t("Kompaniya haqida")}</p>
      <iframe
      className="about_video"
        width="100%"
        height=""
        src={video[0]?.url.replace("youtu.be/", "www.youtube.com/embed/")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
      <div className="about_page_brands">
        <p className="brands_title">{t("Biz ishlagan brendlar")}</p>
        <div className="brands_elements">
          {brands.map((brand, index) => (
            <picture key={index}>
              <source
                media="(max-width:450px)"
                srcSet={brand.image[0].medium}
              />
              <source
                media="(max-width:990px)"
                srcSet={brand.image[0].medium}
              />
              <img
                className="brands_elements_element"
                src={brand.image[0].medium}
                alt="citric.uz"
              />
            </picture>
          ))}
        </div>
      </div>
      <div className="img_gallery">
        <div className="img4">
          <img src={AboutImg4} alt="citric.uz" />
        </div>
        <div className="img1">
          <img src={AboutImg1} alt="citric.uz" />
        </div>
        <div className="img3">
          <img src={AboutImg3} alt="citric.uz" />
        </div>
        <div className="img2">
          <img src={AboutImg2} alt="citric.uz" />
        </div>
      </div>
      <p className="comment_title">{t("Sertifikatlar")}</p>
      <div className="certificates">
        {achievements.map((achievement, index) => (
          <img src={achievement.image[0].medium} alt="citric.uz" key={index} />
        ))}
      </div>
      <p className="comment_title">{t("Mijoz fikrlari")}</p>
      <div className="about_page_comments">
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            description={comment.description}
            image={comment.image}
            author={comment.author}
          />
        ))}
      </div>
      <button className="more_comments">{t("Yana ko'rish")}</button>
      <div className="recv_container">
        <p className="recv_text">{t("Kompaniya rekvizitlari")}</p>
        <button className="recv_btn" onClick={handleDownload}>
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
      <p className="comment_desc">{props.description}</p>
      <div className="comment_author">
        <img
          className="comment_author__img"
          src={props.image[0].medium}
          alt="citric.uz"
        />
        <p className="comment_author__name">{props.author}</p>
      </div>
    </div>
  );
};
