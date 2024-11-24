// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import build from "./build.png";
// // function HomeBanner() {
// //   const slides = [
// //     {
// //       background: `url(${build})`,
// //       title: "Stay with God",
// //       subtitle: "Proclaiming the standard of God",
// //       link: "/blog",
// //       buttonText: "Explore Resources", // Unique button text
// //       title2: "Responding to God",
// //       subtitle2: "Samson Adeosun | Faith | 04.09.202",
// //       link2: "/about",
// //       buttonText2: "Read Full Article", // Unique button text
// //     },
// //     {
// //       background: `url(${build})`,
// //       title: "Responding to God",
// //       subtitle: "Samson Adeosun | Faith | 04.09.202",
// //       link: "/contact",
// //       buttonText: "Read Full Article", // Unique button text
// //       title2: "Stay with God",
// //       subtitle2: "Proclaiming the standard of God",
// //       link2: "/blog",
// //       buttonText2: "Explore Resources", // Unique button text
// //     },
// //     // Add more slides as needed
// //   ];

// //   return (
// //     <Swiper
// //       modules={[Autoplay, Pagination]}
// //       autoplay={{ delay: 5000, disableOnInteraction: false }}
// //       pagination={{ clickable: true }}
// //       loop={true}
// //       spaceBetween={0}
// //       slidesPerView={1}
// //     >
// //       {slides.map((slide, index) => (
// //         <SwiperSlide key={index}>
// //           <div
// //             style={{
// //               backgroundImage: slide.background,
// //               backgroundSize: "cover",
// //               backgroundPosition: "center",
// //               height: "80vh",
// //               width: "100%",
// //               display: "flex",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               color: "#fff",
// //               position: "relative",
// //             }}
// //           >
// //             <div style={{ textAlign: "center", maxWidth: "700px" }}>
// //               <h1
// //                 style={{
// //                   fontSize: "5rem",
// //                   marginBottom: "20px",
// //                   color: "white",
// //                 }}
// //               >
// //                 {slide.title}
// //               </h1>
// //               <p style={{ fontSize: "3rem", marginBottom: "30px" }}>
// //                 {slide.subtitle}
// //               </p>
// //               <a
// //                 href={slide.link}
// //                 style={{
// //                   padding: "10px 30px",
// //                   backgroundColor: "#00a5f5",
// //                   color: "#fff",
// //                   borderRadius: "50px",
// //                   textDecoration: "none",
// //                 }}
// //               >
// //                 {slide.buttonText}
// //               </a>
// //               <h1
// //                 style={{
// //                   fontSize: "5rem",
// //                   marginBottom: "20px",
// //                   color: "white",
// //                 }}
// //               >
// //                 {slide.title2}
// //               </h1>
// //               <p style={{ fontSize: "3rem", marginBottom: "30px" }}>
// //                 {slide.subtitle2}
// //               </p>
// //               <a
// //                 href={slide.link2}
// //                 style={{
// //                   padding: "10px 30px",
// //                   backgroundColor: "#00a5f5",
// //                   color: "#fff",
// //                   borderRadius: "50px",
// //                   textDecoration: "none",
// //                 }}
// //               >
// //                 {slide.buttonText2}
// //               </a>
// //             </div>
// //           </div>
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // }

// // export default HomeBanner;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import build from "./build.png";
// import "./homebanner.css";

// function HomeBanner() {
//   const slides = [
//     {
//       background: `url(${build})`,
//       title: "Stay with God",
//       subtitle: "",
//       link: "/blog",
//       buttonText: "Proclaiming the standard of God",
//     },
//     {
//       background: `url(${build})`,
//       title: "Stay with God",
//       subtitle: "",
//       link: "/blog",
//       buttonText: "Proclaiming the standard of God",
//     },
//   ];

//   return (
//     <Swiper
//       modules={[Autoplay, Pagination]}
//       autoplay={{ delay: 5000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       loop={true}
//       spaceBetween={0}
//       slidesPerView={1}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             style={{
//               backgroundImage: slide.background,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: "80vh",
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "#fff",
//               position: "relative",
//               padding: "20px",
//             }}
//           >
//             <div style={{ textAlign: "center", maxWidth: "700px" }}>
//               {/* First Text Group */}
//               <div style={{ marginBottom: "40px" }}>
//                 <h1 className="title">{slide.title}</h1>
//                 <a
//                   href={slide.link}
//                   className="button"
//                   onMouseEnter={(e) =>
//                     (e.target.style.backgroundColor = "#007bb5")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.backgroundColor = "#00a5f5")
//                   }
//                 >
//                   {slide.buttonText}
//                   <FontAwesomeIcon
//                     icon={faArrowRight}
//                     className="button-icon"
//                   />
//                 </a>
//               </div>

//               {/* Second Text Group */}
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default HomeBanner;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import build from "./build.png";
import "./homebanner.css";
const HomeBanner = () => {
  const slides = [
    {
      background: `url(${build})`,
      // title: "Stay with God",
      // subtitle: "",
      // link: "/blog",
      // buttonText: "Proclaiming the standard of God",
    },
    {
      background: `url(${build})`,
      // title: "Stay with God",
      // subtitle: "",
      // link: "/blog",
      // buttonText: "Proclaiming the standard of God",
    },
  ];

  return (
    <div style={{ width: "100%", marginBottom: "50px" }}>
      {/* Swiper Section */}
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blog Banner Section 
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          Responding to God
        </h2>
        <p style={{ fontSize: "1rem", color: "#666" }}>
          Samson Adeosun | Faith | 04.09.2024
        </p>
        <a
          href="/about"
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "50px",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Read Full Article
        </a>
      </div>*/}
    </div>
  );
};

export default HomeBanner;
