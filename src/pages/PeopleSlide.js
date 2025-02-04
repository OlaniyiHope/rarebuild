import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./pep.css";

function PeopleSlide() {
  const people = [
    {
      id: 1,
      name: "Oluwasegun Akinwale Ekundayo",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 2,
      name: "      Pastor Adeniyi Adekunle",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-13-590x430.jpg",
    },
    {
      id: 3,
      name: "Dr Damola Adesina",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-14-590x430.jpg",
    },
    {
      id: 4,
      name: "Toluwanimi Oyegunle",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-11-590x430.jpg",
    },
    {
      id: 5,
      name: "Ptrich Michael",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    // Add more people as needed
  ];
  // State to track the currently selected person
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const swiperRef = useRef(null);

  const handleTabClick = (person) => {
    setSelectedPerson(person);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(person.id - 1); // Update the swiper slide
    }
  };

  const handleSlideChange = (swiper) => {
    setSelectedPerson(people[swiper.realIndex]);
  };
  // Array of people data

  return (
    <div className="edublink-related-course-content-wrapper edublink-container">
      <div className="section-title">
        <h3
          className="title related-course-title"
          style={{ marginTop: "40px", color: "black" }}
        >
          People
        </h3>
      </div>

      <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          onSlideChange={handleSlideChange}
          breakpoints={{
            340: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          <div className="custom-prev">
            <FaChevronLeft />
          </div>
          <div className="custom-next">
            <FaChevronRight />
          </div>

          {people.map((person) => (
            <SwiperSlide key={person.id}>
              <div
                className="edublink-single-course course-style-1"
                onClick={() => setSelectedPerson(person)} // Set selected person on click
                style={{
                  cursor: "pointer",
                  filter:
                    selectedPerson.id === person.id
                      ? "none"
                      : "brightness(30%)", // Darken non-selected images
                  transition: "filter 0.3s ease", // Smooth transition
                }}
              >
                <div className="inner">
                  <div className="thumbnail">
                    <img
                      className="w-100 pep"
                      src={person.imgSrc}
                      alt={person.name}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Display detailed information of selected person below the Swiper */}
      {selectedPerson && (
        <div className="person-details">
          <h2
            style={{
              color: "#00a5f5",
              fontWeight: "800",
              fontSize: "30px",
              marginTop: "40px",
            }}
          >
            {selectedPerson.name}
          </h2>
          <h2
            style={{
              color: "#000",
              fontWeight: "800",
              fontSize: "22px",
            }}
          >
            {selectedPerson.position}
          </h2>
          <p>{selectedPerson.description}</p>
        </div>
      )}
      <div>
        <hr
          style={{
            marginTop: "50px",
            border: "10px solid ash", // Adjust the thickness as needed
            color: "black",
          }}
        />
      </div>

      <section class="simple-section">
        <h3 style={{ marginTop: "40px", fontSize: "22px" }}>
          Board of Builders
        </h3>
        <p
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: "20px",
            color: "black",
          }}
        >
          Finger Print Commission
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>

        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Pastor Adeniyi Adekunle
        </p>
      </section>
    </div>
  );
}

export default PeopleSlide;
