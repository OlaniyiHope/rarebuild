import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./team.css"; // Assuming you have custom styles for layout

const Team = () => {
  return (
    <div className="elementor-widget-container">
      <div className="eb-team-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={4} // Display 4 slides
          navigation // Enable navigation buttons
          pagination={{ clickable: true }} // Enable pagination
          autoplay={false} // Disable autoplay
          loop={false} // Disable looping
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4, // 4 slides on extra-large screens
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="edublink-team-item">
              <div className="thumbnail-wrap">
                <div className="thumbnail">
                  <a href="instructor-details/index.html">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2023/06/team-01.webp"
                      alt="Team-1"
                    />
                  </a>
                </div>
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="instructor-details/index.html">Edward Norton</a>
                </h5>
                <span className="designation">Web Developer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="edublink-team-item">
              <div className="thumbnail-wrap">
                <div className="thumbnail">
                  <a href="instructor-details/index.html">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2023/06/team-02.webp"
                      alt="Team-2"
                    />
                  </a>
                </div>
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="instructor-details/index.html">Penelope Cruz</a>
                </h5>
                <span className="designation">Digital Marketer</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="edublink-team-item">
              <div className="thumbnail-wrap">
                <div className="thumbnail">
                  <a href="instructor-details/index.html">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2023/06/team-03.webp"
                      alt="Team-3"
                    />
                  </a>
                </div>
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="instructor-details/index.html">John Travolta</a>
                </h5>
                <span className="designation">WordPress Expert</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="edublink-team-item">
              <div className="thumbnail-wrap">
                <div className="thumbnail">
                  <a href="instructor-details/index.html">
                    <img
                      decoding="async"
                      src="wp-content/uploads/2023/06/team-04.webp"
                      alt="Team-4"
                    />
                  </a>
                </div>
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="instructor-details/index.html">Scarlett Johansson</a>
                </h5>
                <span className="designation">Graphic Designer</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
