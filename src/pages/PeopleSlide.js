// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function PeopleSlide() {
//   return (
//     <div className="edublink-related-course-content-wrapper edublink-container">
//       <div className="section-title">
//         <h3 className="title related-course-title"></h3>
//       </div>

//       <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
//         {/* Swiper Component */}
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
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 1, // Show 1 slide on mobile
//             },
//             // when window width is >= 768px
//             768: {
//               slidesPerView: 3, // Show 2 slides on tablet and above
//             },
//             // when window width is >= 1024px
//             1024: {
//               slidesPerView: 3, // Show 2 slides on larger screens
//             },
//           }}
//         >
//           <div className="custom-prev">
//             <FaChevronLeft />
//           </div>
//           <div className="custom-next">
//             <FaChevronRight />
//           </div>

//           <SwiperSlide>
//             <div className="edublink-single-course course-style-1">
//               <div className="inner">
//                 <div className="thumbnail">
//                   <a
//                     className="course-thumb"
//                     href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
//                   >
//                     <img
//                       className="w-100"
//                       src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
//                       alt="course-12"
//                     />
//                   </a>
//                 </div>
//                 <div className="content">
//                   <span
//                     style={{
//                       backgroundColor: "none",
//                       color: "black",
//                       fontWeight: "800",
//                       fontSize: "20px",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     Finger Print Commission
//                   </span>
//                   <h6 className="title">
//                     <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
//                       Restoring the body of Christ to the desire and purpose of
//                       her Lord through spirit-enabled engagements
//                     </a>
//                   </h6>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="edublink-single-course course-style-1">
//               <div className="inner">
//                 <div className="thumbnail">
//                   <a
//                     className="course-thumb"
//                     href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
//                   >
//                     <img
//                       className="w-100"
//                       src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
//                       alt="course-12"
//                     />
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="edublink-single-course course-style-1">
//               <div className="inner">
//                 <div className="thumbnail">
//                   <a
//                     className="course-thumb"
//                     href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
//                   >
//                     <img
//                       className="w-100"
//                       src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
//                       alt="course-12"
//                     />
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="edublink-single-course course-style-1">
//               <div className="inner">
//                 <div className="thumbnail">
//                   <a
//                     className="course-thumb"
//                     href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
//                   >
//                     <img
//                       className="w-100"
//                       src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
//                       alt="course-12"
//                     />
//                   </a>
//                 </div>

//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Add more SwiperSlide components as needed */}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default PeopleSlide;

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function PeopleSlide() {
//   // State to track the currently selected person
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   // Array of people data
//   const people = [
//     {
//       id: 1,
//       name: "Finger Print Commission",
//       description:
//         "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     {
//       id: 2,
//       name: "Another Person",
//       description:
//         "Engaging with the community through a series of faith-led initiatives and support systems.",
//       imgSrc:
//         "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     },
//     // Add more people as needed
//   ];

//   return (
//     <div className="edublink-related-course-content-wrapper edublink-container">
//       <div className="section-title">
//         <h3 className="title related-course-title">People</h3>
//       </div>

//       <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
//         {/* Swiper Component */}
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
//                 onClick={() => setSelectedPerson(person)} // Set selected person on click
//               >
//                 <div className="inner">
//                   <div className="thumbnail">
//                     <a className="course-thumb" href={person.link}>
//                       <img
//                         className="w-100"
//                         src={person.imgSrc}
//                         alt={person.name}
//                       />
//                     </a>
//                   </div>
//                   <div className="content">
//                     <span
//                       style={{
//                         color: "black",
//                         fontWeight: "800",
//                         fontSize: "20px",
//                         textTransform: "uppercase",
//                       }}
//                     >
//                       {person.name}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Display detailed information of selected person below the Swiper */}
//       {selectedPerson && (
//         <div className="person-details">
//           <h2>{selectedPerson.name}</h2>
//           <p>{selectedPerson.description}</p>
//           <a
//             href={selectedPerson.link}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read More
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PeopleSlide;
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PeopleSlide() {
  const people = [
    {
      id: 1,
      name: "Oluwasegun Akinwale Ekundayo",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 2,
      name: "      Pastor Adeniyi Adekunle",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 3,
      name: "Dr Damola Adesina",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 4,
      name: "Toluwanimi Oyegunle",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    {
      id: 5,
      name: "Ptrich Michael",
      position: "President",
      description:
        "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements.",
      imgSrc:
        "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
    },
    // Add more people as needed
  ];
  // State to track the currently selected person
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  // Array of people data

  return (
    <div className="edublink-related-course-content-wrapper edublink-container">
      <div className="section-title">
        <h3
          className="title related-course-title"
          style={{ marginTop: "40px" }}
        >
          People
        </h3>
      </div>

      <div className="edublink-related-course-items eb-swiper-carousel-activator swiper-container">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                onClick={() => setSelectedPerson(person)} // Set selected person on click
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
            border: "0.1px solid black", // Adjust the thickness as needed
            color: "black",
          }}
        />
      </div>

      <section class="simple-section">
        <h3 style={{ marginTop: "40px" }}>Board of Builders</h3>
        <p
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          Finger Print Commission
        </p>

        <ul class="simple-list" style={{ listStyle: "none", fontSize: "20px" }}>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
          <li>Pastor Adeniyi Adekunle</li>
        </ul>
      </section>
    </div>
  );
}

export default PeopleSlide;
