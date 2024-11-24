// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./pep.css";
// import "./homebanner.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// function Homer() {
//   // Array of people data
//   const slide = [
//     {
//       buttonText2: "Read Full Article", // Unique button text
//     },
//   ];
//   return (
//     <div className="edublink-related-course-content-wrapper edublink-container">
//       <div className="section-title">
//         <h3
//           className="title related-course-title"
//           style={{ marginTop: "40px", color: "white" }}
//         >
//           Responding to God
//         </h3>
//         <p style={{ fontWeight: "800", color: "white" }}>
//           Samson Adeosun | Faith | 04.09.2024
//         </p>

//         <a
//           href=""
//           className="button"
//           onMouseEnter={(e) => (e.target.style.backgroundColor = "#007bb5")}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "#00a5f5")}
//         >
//           Read full article
//           <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
//         </a>
//       </div>
//     </div>
//   );
// }

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
  return (
    // Outer wrapper for full-width background
    <div
      className="edublink-related-course-wrapper"
      style={{
        backgroundColor: "#AAFF00", // Full-width background color
        width: "100%",
        margin: "0",
        padding: "30px 0", // Top and bottom padding for visual spacing
        boxSizing: "border-box",
      }}
    >
      {/* Inner wrapper for centered content */}
      <div
        className="edublink-container"
        style={{
          width: "80%", // Content width restriction (adjust as needed)
          margin: "0 auto", // Center the content
          padding: "0", // Reset padding for inner container
        }}
      >
        <div className="section-title">
          <h3
            className="title related-course-title"
            style={{ paddingTop: "40px", color: "black" }}
          >
            Responding to God
          </h3>
          <p style={{ fontWeight: "800", color: "black" }}>
            Samson Adeosun | Faith | 04.09.2024
          </p>
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
    </div>
  );
}

export default Homer;
