// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function ResourcesSwipe() {
//   const tableData = {
//     1: [
//       {
//         id: 1,
//         name: "Graphics Designer",
//         code: "RKM/2024/07/233",
//         deadline: "September 2025",
//       },
//       {
//         id: 2,
//         name: "Graphics Designer",
//         code: "RKM/2024/07/234",
//         deadline: "October 2025",
//       },
//     ],
//     2: [
//       {
//         id: 3,
//         name: "Web Developer",
//         code: "RKM/2024/07/235",
//         deadline: "November 2025",
//       },
//     ],
//     3: [],
//     4: [
//       {
//         id: 4,
//         name: "Data Analyst",
//         code: "RKM/2024/07/236",
//         deadline: "December 2025",
//       },
//       {
//         id: 5,
//         name: "Project Manager",
//         code: "RKM/2024/07/237",
//         deadline: "January 2026",
//       },
//     ],
//   };

//   const people = [
//     {
//       id: 1,
//       name: "ALL",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc: "https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp",
//     },
//     {
//       id: 2,
//       name: "GENERAL",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
//     },
//     {
//       id: 3,
//       name: "FINGERPRIINT",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 4,
//       name: "LEBANA",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-13-590x430.jpg",
//     },
//     {
//       id: 5,
//       name: "LIFETREE",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-14-590x430.jpg",
//     },
//     {
//       id: 6,
//       name: "SHADE",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//   ];

//   const [selectedPerson, setSelectedPerson] = useState(people[0]);

//   const handleTabClick = (person) => {
//     setSelectedPerson(person);
//   };

//   const handleSlideChange = (swiper) => {
//     setSelectedPerson(people[swiper.realIndex]);
//   };

//   const handleAfterChange = (currentIndex) => {
//     const validIndex = currentIndex % people.length; // Wrap index within bounds

//     // Check if the selected person has changed (if the valid index corresponds to a different person)
//     if (people[validIndex].id !== selectedPerson.id) {
//       setSelectedPerson(people[validIndex]);
//       console.log("Selected person has changed:", people[validIndex]);
//     } else {
//       console.log("No change in selected person.");
//     }
//   };

//   // Effect to log whenever selectedPerson changes
//   useEffect(() => {
//     console.log("Selected person has changed:", selectedPerson);
//   }, [selectedPerson]);
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 2,
//       slidesToSlide: 1,
//     },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
//   };

//   return (
//     <div className="container">
//       <h3 className="section-title"></h3>

//       <div className="swiper-container">
//         <Carousel
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           responsive={responsive}
//           loop
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2 },
//           }}
//           afterChange={handleAfterChange}
//           // onSlideChange={handleSlideChange}
//         >
//           {people.map((person) => (
//             <SwiperSlide key={person.id}>
//               <div
//                 className="edublink-single-course course-style-1"
//                 onClick={() => handleTabClick(person)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="inner">
//                   <div className="thumbnail">
//                     <img
//                       className="w-100"
//                       src={person.imgSrc}
//                       alt={person.name}
//                       style={{ height: "400px" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Carousel>
//       </div>

//       <ul className="tabs">
//         {people.map((person) => (
//           <li
//             key={person.id}
//             onClick={() => handleTabClick(person)}
//             className={selectedPerson.id === person.id ? "active-tab" : ""}
//           >
//             {person.name}
//           </li>
//         ))}
//       </ul>

//       <div className="tab-content">
//         <h2>{selectedPerson.name}</h2>
//         <p> {selectedPerson.position}</p>

//         {tableData[selectedPerson.id]?.length ? (
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Role</th>
//                 <th>Code</th>
//                 <th>Deadline</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData[selectedPerson.id].map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.code}</td>
//                   <td>{item.deadline}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No data available for this tab.</p>
//         )}
//       </div>

//       <style jsx>{`
//         .tabs {
//           display: flex;
//           gap: 15px;
//           list-style: none;
//           padding: 0;
//           margin-top: 20px;
//         }
//         .tabs li {
//           cursor: pointer;

//           border-bottom: 2px solid transparent;
//           font-weight: bold;
//         }
//         .tabs .active-tab {
//           color: #00a5f5;

//           border-bottom: 2px solid #00a5f5;
//         }
//         .data-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 20px;
//         }
//         .data-table th,
//         .data-table td {
//           border: 1px solid #ddd;
//           padding: 12px;
//           text-align: left;
//         }
//         .data-table th {
//           background-color: #f4f4f4;
//         }
//       `}</style>
//     </div>
//   );
// }

// // export default ResourcesSwipe;
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function ResourcesSwipe() {
//   const tableData = {
//     1: [
//       {
//         id: 1,
//         name: "Graphics Designer",
//         code: "RKM/2024/07/233",
//         deadline: "September 2025",
//       },
//       {
//         id: 2,
//         name: "Graphics Designer",
//         code: "RKM/2024/07/234",
//         deadline: "October 2025",
//       },
//     ],
//     2: [
//       {
//         id: 3,
//         name: "Web Developer",
//         code: "RKM/2024/07/235",
//         deadline: "November 2025",
//       },
//     ],
//     3: [],
//     4: [
//       {
//         id: 4,
//         name: "Data Analyst",
//         code: "RKM/2024/07/236",
//         deadline: "December 2025",
//       },
//       {
//         id: 5,
//         name: "Project Manager",
//         code: "RKM/2024/07/237",
//         deadline: "January 2026",
//       },
//     ],
//   };

//   const people = [
//     {
//       id: 1,
//       name: "ALL",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc: "https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp",
//     },
//     {
//       id: 2,
//       name: "GENERAL",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
//     },
//     {
//       id: 3,
//       name: "FINGERPRINT",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 4,
//       name: "LEBANA",
//       position:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-13-590x430.jpg",
//     },
//   ];

//   const [selectedPerson, setSelectedPerson] = useState(people[0]);

//   const handleTabClick = (person, swiper) => {
//     setSelectedPerson(person);
//     swiper.slideTo(person.id - 1); // Adjust the slide to match the selected person
//   };
//   setTimeout(() => {
//     if (carouselRef.current && carouselRef.current.slideTo) {
//       carouselRef.current.slideTo(index);
//     }
//   }, 100);

//   const handleSlideChange = (swiper) => {
//     setSelectedPerson(people[swiper.realIndex]);
//   };

//   return (
//     <div className="container">
//       <div className="swiper-container">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           onSlideChange={handleSlideChange}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{ clickable: true }}
//         >
//           {people.map((person) => (
//             <SwiperSlide key={person.id}>
//               <div
//                 className="edublink-single-course course-style-1"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => setSelectedPerson(person)}
//               >
//                 <div className="inner">
//                   <div className="thumbnail">
//                     <img
//                       className="w-100"
//                       src={person.imgSrc}
//                       alt={person.name}
//                       style={{ height: "300px", objectFit: "cover" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="swiper-button-next">
//             <FaChevronRight />
//           </div>
//           <div className="swiper-button-prev">
//             <FaChevronLeft />
//           </div>
//         </Swiper>
//       </div>

//       <ul className="tabs">
//         {people.map((person) => (
//           <li
//             key={person.id}
//             onClick={(e) => handleTabClick(person, e.currentTarget.swiper)}
//             className={selectedPerson.id === person.id ? "active-tab" : ""}
//           >
//             {person.name}
//           </li>
//         ))}
//       </ul>

//       <div className="tab-content">
//         <h2>{selectedPerson.name}</h2>
//         <p>{selectedPerson.position}</p>

//         {tableData[selectedPerson.id]?.length ? (
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Role</th>
//                 <th>Code</th>
//                 <th>Deadline</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData[selectedPerson.id].map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.code}</td>
//                   <td>{item.deadline}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No data available for this tab.</p>
//         )}
//       </div>

//       <style jsx>{`
//         .tabs {
//           display: flex;
//           gap: 15px;
//           list-style: none;
//           padding: 0;
//           margin-top: 20px;
//         }
//         .tabs li {
//           cursor: pointer;
//           border-bottom: 2px solid transparent;
//           font-weight: bold;
//         }
//         .tabs .active-tab {
//           color: #00a5f5;
//           border-bottom: 2px solid #00a5f5;
//         }
//         .data-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 20px;
//         }
//         .data-table th,
//         .data-table td {
//           border: 1px solid #ddd;
//           padding: 12px;
//           text-align: left;
//         }
//         .data-table th {
//           background-color: #f4f4f4;
//         }
//         .swiper-button-next,
//         .swiper-button-prev {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 10;
//           cursor: pointer;
//         }
//         .swiper-button-next {
//           right: 10px;
//         }
//         .swiper-button-prev {
//           left: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ResourcesSwipe;

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ResourcesSwipe() {
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
        name: "Graphics Designer",
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
      name: "ALL",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc: "https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp",
    },
    {
      id: 2,
      name: "GENERAL",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
    },
    {
      id: 3,
      name: "FINGERPRINT",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 4,
      name: "LEBANA",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-13-590x430.jpg",
    },
  ];

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

  return (
    <div className="container">
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
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {people.map((person) => (
            <SwiperSlide key={person.id}>
              <div
                className="edublink-single-course course-style-1"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedPerson(person)}
              >
                <div className="inner">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={person.imgSrc}
                      alt={person.name}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <FaChevronRight />
          </div>
          <div className="swiper-button-prev">
            <FaChevronLeft />
          </div>
        </Swiper>
      </div>

      <ul className="tabs">
        {people.map((person) => (
          <li
            key={person.id}
            onClick={() => handleTabClick(person)}
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
          cursor: pointer;
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </div>
  );
}

export default ResourcesSwipe;
