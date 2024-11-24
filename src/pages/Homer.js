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
          style={{ marginTop: "40px", color: "white" }}
        >
          Responding to God
        </h3>
        <p style={{ fontWeight: "800", color: "white" }}>
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
  );
}

export default Homer;
