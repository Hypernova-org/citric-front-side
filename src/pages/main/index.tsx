import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThreeBlogs from "components/threeblogs";
import Catalog from "./components/catalog";
import { AboutIcon1, AboutIcon2, Arrow } from "assets/images/icons";
import HeroIcon1 from "../../assets/images/icons/HeroIcon1.png";
import HeroIcon2 from "../../assets/images/icons/HeroIcon2.png";
import HeroIcon3 from "../../assets/images/icons/HeroIcon3.png";
import { AboutSection1, AboutSection2, HeroImgLaptop } from "assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHooks } from "hooks";
const Main = () => {
  const { t, get } = useHooks();
  const homeRef = useRef(null);
  const boxRef = useRef(null);
  const product = useRef(null);
  const productText = useRef(null);
  const heroIcon1 = useRef(null);
  const heroIcon2 = useRef(null);
  const heroIcon3 = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const rightText = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const box = boxRef.current;
    const cycles = document.querySelectorAll(".cycle");
    const rightCycles = document.querySelectorAll(".right_cycle");
    const leftCycles = document.querySelectorAll(".left_cycle");

    gsap.fromTo(
      left.current,
      { opacity: 0, y: 100 }, // From: Initial opacity and y position
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: box,
          start: "5%",
          end: "80%",
          scrub: 1, // Smoothly animate the timeline as the user scrolls
        },
      }
    );
    gsap.fromTo(
      right.current,
      { opacity: 0, y: 100 }, // From: Initial opacity and y position
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: box,
          start: "5%",
          end: "80%",
          scrub: 1, // Smoothly animate the timeline as the user scrolls
        },
      }
    );
    gsap.fromTo(
      rightText.current,
      { opacity: 0, y: 400 }, // From: Initial opacity and y position
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: box,
          start: "5%",
          end: "80%",
          scrub: 1, // Smoothly animate the timeline as the user scrolls
        },
      }
    );
    gsap.fromTo(
      ".__left_images",
      { opacity: 0, y: 400 }, // From: Initial opacity and y position
      {
        opacity: 1,
        y: 0,
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: box,
          start: "5%",
          end: "80%",
          scrub: 1, // Smoothly animate the timeline as the user scrolls
        },
      }
    );
    gsap.from(box, {
      duration: 1,
      opacity: 0,
      y: 100,
    });
    gsap.from(product.current, {
      duration: 1,
      y: 100,
      delay: 0.2,
    });
    gsap.fromTo(
      productText.current,
      { opacity: 0, x: 400 },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        delay: 1,
      }
    );
    gsap.from(heroIcon1.current, {
      opacity: 1,
      scale: 0,
      duration: 1,
      delay: 0.8,
    });
    gsap.from(heroIcon2.current, {
      opacity: 1,
      scale: 0,
      duration: 1,
      delay: 0.9,
    });
    gsap.from(heroIcon3.current, {
      opacity: 1,
      scale: 0,
      duration: 1,
      delay: 1,
    });
    cycles.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 1, // Duration of the animation
          ease: "power1.inOut", // Easing function
          delay: 0.1, // Delay based on the index
        }
      );
    });
    leftCycles.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 1, // Duration of the animation
          ease: "power1.inOut", // Easing function
          delay: 0.1, // Delay based on the index
          scrollTrigger: {
            trigger: box,
            start: "2%",
            end: "70%",
            scrub: true, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
    });
    rightCycles.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          duration: 1, // Duration of the animation
          ease: "power1.inOut", // Easing function
          delay: 0.1, // Delay based on the index
          scrollTrigger: {
            trigger: box,
            start: "2%",
            end: "70%",
            scrub: true, // Smoothly animate the timeline as the user scrolls
          },
        }
      );
    });
  }, []);

  return (
    <div className="container" ref={homeRef}>
      <div className="hero_section" ref={boxRef}>
        <p className="hero_title" ref={productText}>
          {t("Dextrose Monohydrate")}
        </p>
        <div className="hero_circles cycle">
          <div className="cycle">
            <div className="cycle">
              <div className="cycle"></div>
            </div>
          </div>
        </div>
        <div ref={heroIcon1} className="icon-1">
          <img src={HeroIcon1} alt="hero icon" />
        </div>
        <div ref={heroIcon2} className="icon-2">
          <img src={HeroIcon2} alt="hero icon" />
        </div>
        <div ref={heroIcon3} className="icon-3">
          <img src={HeroIcon3} alt="hero icon" />
        </div>

        <img
          ref={product}
          className="hero_img"
          src={HeroImgLaptop}
          alt="citric.uz"
        />
      </div>
      <div className="about_section">
        <div className="about_section__left" ref={left}>
          <div className="about_left_circles left_cycle">
            <div className="left_cycle">
              <div className="left_cycle">
                <div className="left_cycle"></div>
              </div>
            </div>
          </div>
          <div className="__left_images">
            <img
              className="about__secondImg"
              src={AboutSection2}
              alt="citric.uz"
            />
            <img
              className="about__firstImg"
              src={AboutSection1}
              alt="citric.uz"
            />
          </div>
          <AboutIcon1 />
        </div>
        <div className="about_section__right" ref={right}>
          <div className="about_right_circles right_cycle">
            <div className="right_cycle">
              <div className="right_cycle">
                <div className="right_cycle">
                  <AboutIcon2 />
                </div>
              </div>
            </div>
          </div>
          <div className="about_right_content" ref={rightText}>
            <h1 className="__right_title">{t("Kompaniya haqida")}</h1>
            <p>
              {t("Citric.uz - yaxshi hayot uchun eng yaxshi ingredientlar!")}
            </p>
            <p>
              {t(
                "Citric.uz – O‘zbekiston bozorida 2013-yildan buyon faoliyat yurituvchi global texnologik kompaniya. Kompaniya oziq-ovqat ingrediyentlarini ishlab chiqarish bo‘yicha jahon yetakchilarini ifodalaydi."
              )}
            </p>
            <p>
              {t(
                "Rivojlangan tarqatish tarmog'i, yaxshi ishlaydigan logistika, konsolidatsiya omborlari Yevropa, Xitoy va MDH mamlakatlarida joylashgan bo'lib, ularning sa'y-harakatlari oziq-ovqat ishlab chiqaruvchilarni yuqori sifatli ingredientlar va xomashyo bilan uzluksiz ta'minlashga qaratilgan."
              )}
            </p>
            <Link onClick={() => (
              window.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
              })
            )} to={"/about"}>
              <p>{t("Batafsil ma'lumot")}</p>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <Catalog />
      {/* <ThreeBlogs /> */}
    </div>
  );
};

export default Main;
