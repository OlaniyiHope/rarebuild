import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function CareerSwipe() {
  const tableData = {
    1: [
      {
        id: 1,
        name: "Graphics Designer",
        code: "RKM/2024/07/233",
        deadline: "September 2025",
      },
      {
        id: 2,
        name: "GraphicsDesigner",
        code: "RKM/2024/07/234",
        deadline: "October 2025",
      },
    ],
    2: [
      {
        id: 3,
        name: "Web Developer",
        code: "RKM/2024/07/235",
        deadline: "November 2025",
      },
    ],
    3: [],
    4: [
      {
        id: 4,
        name: "Data Analyst",
        code: "RKM/2024/07/236",
        deadline: "December 2025",
      },
      {
        id: 5,
        name: "Project Manager",
        code: "RKM/2024/07/237",
        deadline: "January 2026",
      },
    ],
  };

  const people = [
    {
      id: 1,
      name: "JOB",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-10-590x430.jpg",
    },
    {
      id: 2,
      name: "VOLUNTEERING",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-11-590x430.jpg",
    },
    {
      id: 3,
      name: "CONTRACT",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    // {
    //   id: 4,
    //   name: "LEBANA",
    //   position:
    //     "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
    //   imgSrc: "/wp-content/uploads/2023/03/course-13-590x430.jpg",
    // },
  ];

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const swiperRef = useRef(null);

  // const handleTabClick = (person) => {
  //   setSelectedPerson(person);
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.slideTo(person.id - 1); // Update the swiper slide
  //   }
  // };

  const handleTabClick = (person) => {
    setSelectedPerson(person);
    if (swiperRef.current && swiperRef.current.swiper) {
      const targetIndex = people.findIndex((p) => p.id === person.id); // Get index of selected person
      swiperRef.current.swiper.slideToLoop(targetIndex); // Use slideToLoop to handle loop mode
    }
  };

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex; // Get real index ignoring cloned slides
    const activePerson = people[realIndex];
    if (activePerson) setSelectedPerson(activePerson);
  };

  return (
    <div className="container">
      <div className="section-title">
        <h3
          className="title related-course-title"
          style={{ marginTop: "40px", color: "black" }}
        >
          Career
        </h3>
      </div>
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 }, // For mobile devices
            768: { slidesPerView: 2 }, // For tablets and small screens
            1024: { slidesPerView: 2 }, // For large screens and above
          }}
          loop
          onSlideChange={handleSlideChange}
          keyBoardControl
          itemClass="carousel-item-padding-40-px"
          dotListClass="custom-dot-list-style"
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {people.map((person) => (
            <SwiperSlide key={person.id}>
              <div
                className="edublink-single-course course-style-1"
                style={{
                  cursor: "pointer",
                  filter:
                    selectedPerson.id === person.id
                      ? "none"
                      : "brightness(30%)", // Darken non-selected images
                  transition: "filter 0.3s ease", // Smooth transition
                }}
                onClick={() => setSelectedPerson(person)}
              >
                <div className="inner">
                  <div className="thumbnail">
                    <img
                      src={person.imgSrc}
                      alt={person.name}
                      className="carousel-image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-prev">
            <FaChevronLeft />
          </div>
          <div className="custom-next">
            <FaChevronRight />
          </div>
        </Swiper>
      </div>

      <ul className="tabs">
        {people.map((person) => (
          <li
            key={person.id}
            onClick={(event) => handleTabClick(person, event)}
            className={selectedPerson.id === person.id ? "active-tab" : ""}
          >
            {person.name}
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <h2>{selectedPerson.name}</h2>
        <p>{selectedPerson.position}</p>

        {tableData[selectedPerson.id]?.length ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Code</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {tableData[selectedPerson.id].map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.code}</td>
                  <td>{item.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available for this tab.</p>
        )}
      </div>

      <style jsx>{`
        .tabs {
          display: flex;
          gap: 15px;
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }
        .tabs li {
          cursor: pointer;
          border-bottom: 2px solid transparent;
          font-weight: bold;
        }
        .tabs .active-tab {
          color: #00a5f5;
          border-bottom: 2px solid #00a5f5;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .data-table th,
        .data-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        .data-table th {
          background-color: #f4f4f4;
        }
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          color: black; /* Make arrow black */

          cursor: pointer;
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .custom-arrow {
          color: black; /* Ensures color is black */
        }
      `}</style>
    </div>
  );
}

export default CareerSwipe;
