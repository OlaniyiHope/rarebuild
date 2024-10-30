import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Swipes() {
  return (
    <div className="edublink-related-course-content-wrapper edublink-container">
      <div className="section-title">
        <h3 className="title related-course-title"></h3>
      </div>

      <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Adjust based on screen size if needed
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <div className="custom-prev">
            <FaChevronLeft />
          </div>
          <div className="custom-next">
            <FaChevronRight />
          </div>

          <SwiperSlide>
            <div className="edublink-single-course course-style-1">
              <div className="inner">
                <div className="thumbnail">
                  <a
                    className="course-thumb"
                    href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                  >
                    <img
                      className="w-100"
                      src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
                      alt="course-12"
                    />
                  </a>
                </div>
                <div className="content">
                  <span className="course-level">Finger Print Commission</span>
                  <h6 className="title">
                    <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                      Restoring the body of Christ to the desire and purpose of
                      her Lord through spirit-enabled engagements
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edublink-single-course course-style-1">
              <div className="inner">
                <div className="thumbnail">
                  <a
                    className="course-thumb"
                    href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                  >
                    <img
                      className="w-100"
                      src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
                      alt="course-12"
                    />
                  </a>
                </div>
                <div className="content">
                  <span className="course-level">The Shade Network</span>
                  <h6 className="title">
                    <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                      Restoring the body of Christ to the desire and purpose of
                      her Lord through spirit-enabled engagements
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edublink-single-course course-style-1">
              <div className="inner">
                <div className="thumbnail">
                  <a
                    className="course-thumb"
                    href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                  >
                    <img
                      className="w-100"
                      src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
                      alt="course-12"
                    />
                  </a>
                </div>
                <div className="content">
                  <span className="course-level">Lebana Academy</span>
                  <h6 className="title">
                    <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                      Restoring the body of Christ to the desire and purpose of
                      her Lord through spirit-enabled engagements
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edublink-single-course course-style-1">
              <div className="inner">
                <div className="thumbnail">
                  <a
                    className="course-thumb"
                    href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                  >
                    <img
                      className="w-100"
                      src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
                      alt="course-12"
                    />
                  </a>
                </div>
                <div className="content">
                  <span className="course-level">Finger Print Commission</span>
                  <h6 className="title">
                    <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                      Restoring the body of Christ to the desire and purpose of
                      her Lord through spirit-enabled engagements
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  );
}

export default Swipes;
