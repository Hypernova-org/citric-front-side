import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThreeBlogs from "components/threeblogs";
import Catalog from "./components/catalog";
import {
  AboutIcon1,
  AboutIcon2,
  Arrow,
  HeroIcon1,
  HeroIcon2,
  HeroIcon3,
} from "assets/images/icons";
import { AboutSection1, AboutSection2, HeroImgLaptop } from "assets/images";
import { gsap } from "gsap";
const Main = () => {
  const boxRef = useRef(null);
  const product = useRef(null);
  const productText = useRef(null);
  const heroIcon1 = useRef(null);
  const heroIcon2 = useRef(null);
  const heroIcon3 = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const cycles = document.querySelectorAll(".cycle");

    // Scroll Animation
    gsap.from(box, {
      duration: 1,
      opacity: 0,
      y: 100,
    });
    gsap.from(product.current, {
      duration: 1,
      y: 100,
      delay: 0.2
    });
    gsap.fromTo(productText.current, {opacity: 0, x: 400},  {
      duration: 1,
      opacity: 1,
      x: 0,
      delay: 1
    });
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
  }, []);

  return (
    <div className="container">
      <div className="hero_section" ref={boxRef}>
        <p className="hero_title" ref={productText}>
          Dextrose Monohydrate
        </p>
        <div className="hero_circles cycle">
          <div className="cycle">
            <div className="cycle">
              <div className="cycle"></div>
            </div>
          </div>
        </div>
        <div ref={heroIcon1} className="icon-1">
          <HeroIcon1 />
        </div>
        <div ref={heroIcon2} className="icon-2">
          <HeroIcon2 />
        </div>
        <div ref={heroIcon3} className="icon-3">
          <HeroIcon3 />
        </div>

        <img
          ref={product}
          className="hero_img"
          src={HeroImgLaptop}
          alt="Hero section img"
        />
      </div>
      <div className="about_section">
        <div className="about_section__left">
          <div className="about_left_circles">
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="__left_images">
            <img className="about__secondImg" src={AboutSection2} alt="" />
            <img className="about__firstImg" src={AboutSection1} alt="" />
          </div>
          <AboutIcon1 />
        </div>
        <div className="about_section__right">
          <div className="about_right_circles">
            <div>
              <div>
                <div>
                  <AboutIcon2 />
                </div>
              </div>
            </div>
          </div>
          <div className="about_right_content">
            <h1 className="__right_title">Kompaniya haqida</h1>
            <p>Sitric.uz - yaxshi hayot uchun eng yaxshi ingredientlar!</p>
            <p>
              Sitric.uz – O‘zbekiston bozorida 2013-yildan buyon faoliyat
              yurituvchi global texnologik kompaniya. Kompaniya oziq-ovqat
              ingrediyentlarini ishlab chiqarish bo‘yicha jahon yetakchilarini
              ifodalaydi.
            </p>
            <p>
              Rivojlangan tarqatish tarmog'i, yaxshi ishlaydigan logistika,
              konsolidatsiya omborlari Yevropa, Xitoy va MDH mamlakatlarida
              joylashgan bo'lib, ularning sa'y-harakatlari oziq-ovqat ishlab
              chiqaruvchilarni yuqori sifatli ingredientlar va xomashyo bilan
              uzluksiz ta'minlashga qaratilgan.
            </p>
            <Link to={"/about"}>
              <p>Batafsil ma'lumot</p>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <Catalog />
      <ThreeBlogs />
    </div>
  );
};

export default Main;
