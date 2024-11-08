// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import DataTable from "./DataTable";

// function CareerSwipe() {
//   const tableData = [
//     {
//       id: 1,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 2,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 3,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 4,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 5,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 6,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },
//     {
//       id: 7,
//       name: "Graphics Designer",
//       surname: "RKM/2024/07/233",
//       description: "September 2025",
//     },

//     // Add more data as needed
//   ];
//   const people = [
//     {
//       id: 1,
//       name: "Oluwasegun Akinwale Ekundayo",
//       position: "President",
//       description: "Description for Oluwasegun Akinwale Ekundayo.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 2,
//       name: "Pastor Adeniyi Adekunle",
//       position: "President",
//       description: "Description for Pastor Adeniyi Adekunle.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 3,
//       name: "Dr Damola Adesina",
//       position: "President",
//       description: "Description for Dr Damola Adesina.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 4,
//       name: "Toluwanimi Oyegunle",
//       position: "President",
//       description: "Description for Toluwanimi Oyegunle.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//   ];

//   // State to track the currently selected person and tab
//   const [selectedPerson, setSelectedPerson] = useState(people[0]);

//   // Track which tab is active
//   const handleTabClick = (person) => {
//     setSelectedPerson(person);
//   };

//   return (
//     <div className="edublink-related-course-content-wrapper edublink-container">
//       {/* Section Title */}
//       <div className="section-title">
//         <h3
//           className="title related-course-title"
//           style={{ marginTop: "40px" }}
//         >
//           People
//         </h3>
//       </div>

//       {/* Swiper Component */}
//       <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           loop
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           <div className="custom-prev">
//             <FaChevronLeft />
//           </div>
//           <div className="custom-next">
//             <FaChevronRight />
//           </div>

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
//         </Swiper>
//       </div>

//       {/* Tab Navigation */}
//       <div
//         id="content"
//         className="site-content"
//         style={{ marginTop: "60px", marginBottom: "60px" }}
//       >
//         <div className="edublink-course-details-page lp-course-single-page eb-course-single-style-1">
//           <div className="edublink-container">
//             <div className="edublink-row">
//               <div
//                 id="learn-press-course"
//                 className="course-summary edublink-col-lg-12"
//               >
//                 <div className="eb-course-details-page-content">
//                   <div className="course-content course-summary-content">
//                     <ul className="learn-press-nav-tabs course-nav-tabs">
//                       {people.map((person) => (
//                         <li
//                           key={person.id}
//                           className={`course-nav ${
//                             selectedPerson.id === person.id ? "active" : ""
//                           }`}
//                           onClick={() => handleTabClick(person)}
//                           style={{ cursor: "pointer", padding: "10px 20px" }}
//                         >
//                           {person.name}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Content for Selected Person */}
//                     <div className="person-details">
//                       <h2
//                         style={{
//                           color: "#00a5f5",
//                           fontSize: "30px",
//                           marginTop: "40px",
//                         }}
//                       >
//                         {selectedPerson.name}
//                       </h2>
//                       <p>{selectedPerson.description}</p>
//                     </div>

//                     {/* Table for Selected Person */}
//                     <div>
//                       <hr
//                         style={{ marginTop: "50px", border: "1px solid black" }}
//                       />
//                       <section
//                         class="elementor-section elementor-top-section elementor-element elementor-element-57db4c6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
//                         data-id="57db4c6"
//                         data-element_type="section"
//                         style={{ marginTop: "50px", marginBottom: "50px" }}
//                       >
//                         <div class="elementor-container elementor-column-gap-extended">
//                           <table className="data-table">
//                             <thead>
//                               <tr>
//                                 <th>ID</th>
//                                 <th>Role</th>
//                                 <th>Code</th>
//                                 <th>Deadline</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {tableData.map((item) => (
//                                 <tr key={item.id}>
//                                   <td>{item.id}</td>
//                                   <td>{item.name}</td>
//                                   <td>{item.surname}</td>
//                                   <td>{item.description}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </table>
//                           <style jsx>{`
//                             .data-table {
//                               width: 100%;
//                               border-collapse: collapse;
//                               margin-top: 20px;
//                               margin: auto;
//                             }
//                             .data-table th,
//                             .data-table td {
//                               border: 1px solid #ddd;
//                               padding: 12px;
//                               text-align: left;
//                             }
//                             .data-table th {
//                               background-color: #f4f4f4;
//                             }
//                             .data-table tr:hover {
//                               background-color: #f1f1f1;
//                             }
//                             .table-title {
//                               text-align: center;
//                               margin-bottom: 10px;
//                             }
//                           `}</style>
//                         </div>
//                       </section>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CareerSwipe;

import React, { useState } from "react";
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
      name: "JOBS",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 2,
      name: "VOLUNTEERING",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 3,
      name: "CONTRACT",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 4,
      name: "CAREER",
      position:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const handleTabClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="container">
      <h3 className="section-title"></h3>

      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
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
                onClick={() => handleTabClick(person)}
                style={{ cursor: "pointer" }}
              >
                <div className="inner">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={person.imgSrc}
                      alt={person.name}
                      style={{ height: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
        <p> {selectedPerson.position}</p>

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
      `}</style>
    </div>
  );
}

export default CareerSwipe;
