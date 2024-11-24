// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./pep.css";
// import "./homebanner.css";
// function Homes() {
//   // Array of people data

//   return (
//     <div className="edublink-related-course-content-wrapper edublink-container">
//       <div className="section-title">
//         <h3
//           className="title related-course-title"
//           style={{ paddingTop: "40px", color: "white" }}
//         >
//           Stay with God
//         </h3>
//         <a href="" className="button">
//           Proclaiming the standard of God
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Homes;
// // // import React from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Autoplay, Pagination } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/pagination";
// // // import build from "./build.png";
// // // function HomeBanner() {
// // //   const slides = [
// // //     {
// // //       background: `url(${build})`,
// // //       title: "Stay with God",
// // //       subtitle: "Proclaiming the standard of God",
// // //       link: "/blog",
// // //       buttonText: "Explore Resources", // Unique button text
// // //       title2: "Responding to God",
// // //       subtitle2: "Samson Adeosun | Faith | 04.09.202",
// // //       link2: "/about",
// // //       buttonText2: "Read Full Article", // Unique button text
// // //     },
// // //     {
// // //       background: `url(${build})`,
// // //       title: "Responding to God",
// // //       subtitle: "Samson Adeosun | Faith | 04.09.202",
// // //       link: "/contact",
// // //       buttonText: "Read Full Article", // Unique button text
// // //       title2: "Stay with God",
// // //       subtitle2: "Proclaiming the standard of God",
// // //       link2: "/blog",
// // //       buttonText2: "Explore Resources", // Unique button text
// // //     },
// // //     // Add more slides as needed
// // //   ];

// // //   return (
// // //     <Swiper
// // //       modules={[Autoplay, Pagination]}
// // //       autoplay={{ delay: 5000, disableOnInteraction: false }}
// // //       pagination={{ clickable: true }}
// // //       loop={true}
// // //       spaceBetween={0}
// // //       slidesPerView={1}
// // //     >
// // //       {slides.map((slide, index) => (
// // //         <SwiperSlide key={index}>
// // //           <div
// // //             style={{
// // //               backgroundImage: slide.background,
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //               height: "80vh",
// // //               width: "100%",
// // //               display: "flex",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               color: "#fff",
// // //               position: "relative",
// // //             }}
// // //           >
// // //             <div style={{ textAlign: "center", maxWidth: "700px" }}>
// // //               <h1
// // //                 style={{
// // //                   fontSize: "5rem",
// // //                   marginBottom: "20px",
// // //                   color: "white",
// // //                 }}
// // //               >
// // //                 {slide.title}
// // //               </h1>
// // //               <p style={{ fontSize: "3rem", marginBottom: "30px" }}>
// // //                 {slide.subtitle}
// // //               </p>
// // //               <a
// // //                 href={slide.link}
// // //                 style={{
// // //                   padding: "10px 30px",
// // //                   backgroundColor: "#00a5f5",
// // //                   color: "#fff",
// // //                   borderRadius: "50px",
// // //                   textDecoration: "none",
// // //                 }}
// // //               >
// // //                 {slide.buttonText}
// // //               </a>
// // //               <h1
// // //                 style={{
// // //                   fontSize: "5rem",
// // //                   marginBottom: "20px",
// // //                   color: "white",
// // //                 }}
// // //               >
// // //                 {slide.title2}
// // //               </h1>
// // //               <p style={{ fontSize: "3rem", marginBottom: "30px" }}>
// // //                 {slide.subtitle2}
// // //               </p>
// // //               <a
// // //                 href={slide.link2}
// // //                 style={{
// // //                   padding: "10px 30px",
// // //                   backgroundColor: "#00a5f5",
// // //                   color: "#fff",
// // //                   borderRadius: "50px",
// // //                   textDecoration: "none",
// // //                 }}
// // //               >
// // //                 {slide.buttonText2}
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </SwiperSlide>
// // //       ))}
// // //     </Swiper>
// // //   );
// // // }

// // // export default HomeBanner;
// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// // import build from "./build.png";
// // import "./homebanner.css";

// // function Homer() {
// //   const slides = [
// //     {
// //       background: `url(${build})`,
// //       title: "Stay with God",
// //       subtitle: "",
// //       link: "/blog",
// //       buttonText: "Proclaiming the standard of God",
// //     },
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
// //               padding: "20px",
// //             }}
// //           >
// //             <div style={{ textAlign: "center", maxWidth: "700px" }}>
// //               {/* First Text Group */}
// //               <div style={{ marginBottom: "40px" }}>
// //                 <h1 className="title">{slide.title}</h1>
// //                 <a
// //                   href={slide.link}
// //                   className="button"
// //                   onMouseEnter={(e) =>
// //                     (e.target.style.backgroundColor = "#007bb5")
// //                   }
// //                   onMouseLeave={(e) =>
// //                     (e.target.style.backgroundColor = "#00a5f5")
// //                   }
// //                 >
// //                   {slide.buttonText}
// //                   <FontAwesomeIcon
// //                     icon={faArrowRight}
// //                     className="button-icon"
// //                   />
// //                 </a>
// //               </div>

// //               {/* Second Text Group */}
// //             </div>
// //           </div>
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // }

// // export default Homer;
// import React from "react";
// import "./homer.css"; // Optional: Custom CSS for styling

// import build from "./blog.webp";
// import blogImage from "./blog.webp";

// const Homer = () => {
//   return (
//     <div>
//       {/* Main Banner
//       <div
//         className="banner"
//         style={{
//           backgroundImage: `url(${build})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "80vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//         }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <h1>Stay with God</h1>
//           <p>Proclaiming the standard of God</p>
//           <a href="/blog" className="button">
//             Explore Resources
//           </a>
//         </div>
//       </div>*/}

//       {/* Blog Banner */}
//       {/* Blog Banner */}
//       <div className="blog-banner">
//         {/* Image Section */}

//         {/* Text Section */}
//         <div className="blog-banner-text">
//           <h2>Responding to God</h2>
//           <p>Samson Adeosun | Faith | 04.09.2024</p>
//           <a href="/about" className="button">
//             Read Full Article
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homer;
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./pep.css";
import "./homebanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Homer() {
  // Array of people data
  const slide = [
    {
      buttonText2: "Read Full Article", // Unique button text
    },
  ];
  return (
    <div className="edublink-related-course-content-wrapper edublink-container">
      <div className="section-title">
        <h3
          className="title related-course-title"
          style={{ paddingTop: "40px", color: "white" }}
        >
          Stay with God
        </h3>

        <a
          href=""
          className="button"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#007bb5")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#00a5f5")}
        >
          Read full article
          <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
        </a>
      </div>
    </div>
  );
}

export default Homer;
