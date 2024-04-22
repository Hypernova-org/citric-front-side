import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGet, useHooks } from "hooks";
import Container from "modules/container";
import { CommentCard } from "components";
import Poster from "../../assets/images/poster.png";
import Company from "../../assets/images/company.png";
import { AboutImg1, AboutImg2, AboutImg3, AboutImg4 } from "assets/images";
import { Arrow, Comment, Download } from "assets/images/icons";

import "./mobile.scss";
import "./_about.scss";
import Loading from "components/loading";
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
  let mm = gsap.matchMedia();
  const { t, get } = useHooks();
  const [page, setPage] = useState(1);
  const [allData, setAllData]: any = useState([]);
  const [moreModal, showMoreModal]: any = useState({ open: false, data: {} });
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = document.querySelectorAll(".about_page_title");
    const video = document.querySelectorAll(".video");
    const brands = document.querySelectorAll(".about_page_brands");
    const about = document.querySelectorAll(".about_page");
    const brandsTitle = document.querySelectorAll(".about_page");
    const img1 = document.querySelectorAll(".img1");
    const img2 = document.querySelectorAll(".img2");
    const img3 = document.querySelectorAll(".img3");
    const img4 = document.querySelectorAll(".img4");
    const gallery = document.querySelectorAll(".img_gallery");
    mm.add("(min-width: 800px)", () => {
      gsap.from(title, {
        duration: 1,
        opacity: 0,
        y: 50,
      });
      gsap.from('.about_company', {
        duration: 1,
        opacity: 0,
        y: 50,
      });
      gsap.from(video, {
        duration: 1,
        delay: 1,
        opacity: 0,
        y: 40,
      });
      gsap.fromTo(
        brands,
        { opacity: 0, y: 100 }, // From: Initial opacity and y position
        {
          opacity: 1,
          y: 0,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: video,
            start: "bottom 90%",
            end: "90%",
            scrub: 1, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
      gsap.fromTo(
        img1,
        { opacity: 0, x: -100 }, // From: Initial opacity and y position
        {
          opacity: 1,
          x: 0,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: brands,
            // markers: true,
            start: "bottom 70%",
            end: "100%",
            scrub: 2, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
      gsap.fromTo(
        img2,
        { opacity: 0, x: 100 }, // From: Initial opacity and y position
        {
          opacity: 1,
          x: 0,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: brands,
            // markers: true,
            start: "bottom 70%",
            end: "100%",
            scrub: 2, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
      gsap.fromTo(
        img3,
        { opacity: 0, x: -100 }, // From: Initial opacity and y position
        {
          opacity: 1,
          x: 0,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: gallery,
            // markers: true,
            start: "middle 25%",
            end: "35%",
            scrub: 1, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
      gsap.fromTo(
        img4,
        { opacity: 0, x: 100 }, // From: Initial opacity and y position
        {
          opacity: 1,
          x: 0,
          duration: 1, // Duration of the animation
          scrollTrigger: {
            trigger: gallery,
            // markers: true,
            start: "middle 25%",
            end: "35%",
            scrub: 1, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
    });
  }, []);

  const commentData = get(moreModal, "data.comment");

  const handleDownload = () => {
    let fileName = "ООО «FOODS IMPEX GROUP».pdf"; // Specify the file name
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
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const brands: Brand[] = get(dataBrand, "data", []);
  const { isLoading: categoriesLoading, data: dataVideo } = useGet({
    name: "video",
    url: "video",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const video: Video[] = get(dataVideo, "data", []);
  const { isLoading: achievementLoading, data: dataAchievements } = useGet({
    name: "achievements",
    url: "achievements",
    onSuccess: (data) => {},
    onError: (error) => {},
  });
  const achievements: Achievement[] = get(dataAchievements, "data", []);
  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="about_page container overflow-x-clip">
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
          <p className="text-[22px] font-bold mb-[10px]">
            {t("Mijozimiz fikri")}
          </p>
          <p className="overflow-y-auto h-[60vh]">{commentData?.description}</p>
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
      <div className="about_company">
        <img src={Company} alt="" />
        <p>{t("СITRIC.UZ - BEST INGREDIENTS FOR BETTER LIFE  CITRIC.UZ is a global technology company operating on the market of Uzbekistan since 2014, The company represents the world leaders in the production of food ingredients, A well-developed distribution network, well-established logistics, consolidation warehouses are located in Europe, whose efforts are aimed at the uninterrupted supply of high quality ingredients and raw materials to food producers! A wide range of raw materials from the world's best manufacturers and own production, high-quality service, information technology support, professionalism of staff, friendly and individual approach to each client are just a few factors that became decisive for 1500 enterprises of Uzbekistan when choosing the group of companies 'Citric uz' as a business partner, The introduction of progressive sales technologies, high-quality customer service, significant development potential gives us the right to speak with pride and optimism about the future, which is inextricably linked with the development and prosperity of our partners,")}</p>
      </div>
      <div className="video">
        {!showVideo && (
          <div className="poster" onClick={handleClick}></div>
        )}
        {showVideo && (
          <iframe
            className="about_video"
            width="100%"
            height=""
            loading="eager"
            src={video[0]?.url.replace("youtu.be/", "www.youtube.com/embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        )}
      </div>
      <div className="about_page_brands">
        <p className="brands_title">{t("Biz ishlagan brendlar")}</p>
        <div className="brands_elements">
          {brands.map((brand, index) => (
            <div className="brands_elements_element" key={index}>
              <img
                
                src={brand.image[0].medium}
                alt="citric.uz"
              />
            </div>
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
          <img
            onContextMenu={(e) => e.preventDefault()}
            src={achievement.image[0].medium}
            alt="citric.uz"
            key={index}
          />
        ))}
      </div>
      <p className="comment_title">{t("Mijoz fikrlari")}</p>
      <div className="about_page_comments">
        <Container.All
          name="comments"
          url="comments"
          params={{
            limit: 6,
            page,
          }}
        >
          {({ isLoading, items, meta }) => {
            return (
              <div>
                <div className="catalog-list">
                  {[...allData, ...items].map((comment, index) => (
                    <CommentCard
                      onClick={() =>
                        showMoreModal({ open: true, data: { comment } })
                      }
                      key={index}
                      description={comment.description}
                      image={comment.image}
                      author={comment.author}
                    />
                  ))}
                </div>
                {meta && page < meta.totalCount && items.length > 6 && (
                  <div className="mt-[-20px] flex justify-center">
                    <div className="flex justify-center items-center">
                      <button
                        className="view-more"
                        onClick={() => {
                          setPage(page + 1);
                          setAllData([...allData, ...items]);
                        }}
                      >
                        {t("Yana ko’rish")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
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
