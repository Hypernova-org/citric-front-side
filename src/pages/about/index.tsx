import React, { useState } from "react";
import { Modal } from "antd"; 

import { useGet, useHooks } from "hooks";
import Container from "modules/container";
import { CommentCard } from "components";

import { AboutImg1, AboutImg2, AboutImg3, AboutImg4 } from "assets/images";
import { Arrow, Comment, Download } from "assets/images/icons";

import "./mobile.scss";
import "./_about.scss";
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
  const { t, get } = useHooks();
  const [page, setPage] = useState(1);
  const [allData, setAllData]: any = useState([]);
  const [moreModal, showMoreModal]: any = useState({ open: false, data: {} });

  const commentData = get(moreModal, "data.comment")
  
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
  const { isLoading: brandLoading, data: dataBrand } = useGet({
    name: "brands",
    url: "brands",
    onSuccess: (data) => { },
    onError: (error) => { },
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
    onSuccess: (data) => { },
    onError: (error) => { },
  });
  const achievements: Achievement[] = get(dataAchievements, "data", []);
console.log(get(commentData, "author"));

  return (
    <div className="about_page container">
      <Modal
        open={moreModal.open}
        onOk={() => showMoreModal({ open: true, data: {} })}
        onCancel={() => showMoreModal({ open: false, data: {} })}
        footer={null}
        centered
        width={500}
        destroyOnClose
      >
        <div className="p-[20px]">
          <p className="text-[22px] font-bold mb-[10px]">{t("Mijozimiz fikri")}</p>
          <p className="">{commentData?.description}</p>
          <div className="comment_author">
            <img
              className="comment_author__img"
              src={get(commentData, "image[0].medium")}
              alt="citric.uz"
            />
            <p className="comment_author__name">{get(commentData, "author")}</p>
          </div>
        </div>
      </Modal>
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
          <img onContextMenu={(e)=> e.preventDefault()} src={achievement.image[0].medium} alt="citric.uz" key={index} />
        ))}
      </div>
      <p className="comment_title">{t("Mijoz fikrlari")}</p>
      <div className="about_page_comments">
        <Container.All
          name='comments'
          url='comments'
          params={{
            limit: 6,
            page,
          }}
        >
          {({ isLoading, items, meta }) => {
            return (
              <div>
                <div className='catalog-list'>
                  {[...allData, ...items].map((comment, index) => (
                    <CommentCard
                      onClick={() => showMoreModal({ open: true, data: { comment } })}
                      key={index}
                      description={comment.description}
                      image={comment.image}
                      author={comment.author}
                    />
                  ))}
                </div>
                {meta && page < meta.totalCount && items.length > 6 && (
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
              </div>

            )
          }}
        </Container.All>
      </div>
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
