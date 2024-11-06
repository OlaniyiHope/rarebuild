import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import build from "./build.png";
function HomeBanner() {
  const slides = [
    {
      background: `url(${build})`,
      title: "Stay with God",
      subtitle: "Proclaiming the standard of God",
      link: "/resources",
      buttonText: "Explore Resources", // Unique button text
    },
    {
      background: `url(${build})`,
      title: "Responding to God",
      subtitle: "Samson Adeosun | Faith | 04.09.202",
      link: "/contact",
      buttonText: "Read Full Article", // Unique button text
    },
    // Add more slides as needed
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: slide.background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              position: "relative",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "700px" }}>
              <h1
                style={{
                  fontSize: "5rem",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: "3rem", marginBottom: "30px" }}>
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                style={{
                  padding: "10px 30px",
                  backgroundColor: "#00a5f5",
                  color: "#fff",
                  borderRadius: "50px",
                  textDecoration: "none",
                }}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeBanner;
