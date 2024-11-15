// import React, { useState, useEffect } from "react";

// import "./caro.css";

// const people = [
//   {
//     id: 1,
//     name: "ALL",
//     position:
//       "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements...",
//     imgSrc: "https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp",
//     additionalData: [
//       {
//         id: 1,
//         role: "Graphics Designer",
//         code: "RKM/2024/07/233",
//         deadline: "September 2025",
//       },
//       {
//         id: 2,
//         role: "Graphics Designer",
//         code: "RKM/2024/07/234",
//         deadline: "October 2025",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "GENERAL",
//     position: "Providing resources and support to aid the journey of faith...",
//     imgSrc:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     additionalData: [
//       {
//         id: 3,
//         role: "Web Developer",
//         code: "RKM/2024/07/235",
//         deadline: "November 2025",
//       },
//     ],
//   },
//   // Add more people as needed...
// ];

// function Caro() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0]);

//   // Function to handle carousel slide change
//   const handleAfterChange = (currentIndex) => {
//     console.log("Slide changed. Current Index:", currentIndex);

//     // Wrap the index around if it's out of bounds
//     const validIndex = currentIndex % people.length; // This ensures index wraps around within the array bounds

//     const selected = people[validIndex];
//     console.log("Selected person has changed:", selected);
//     setSelectedPerson(selected);
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
//     <div>
//       <Carousel
//         swipeable
//         draggable
//         responsive={responsive}
//         infinite
//         keyBoardControl
//         transitionDuration={500}
//         afterChange={handleAfterChange} // Capture slide change
//         containerClass="carousel-container"
//         itemClass="carousel-item-padding-40-px"
//         dotListClass="custom-dot-list-style"
//       >
//         {people.map((person) => (
//           <div
//             key={person.id}
//             className="carousel-item"
//             onClick={() => setSelectedPerson(person)} // Handle click to select person
//           >
//             <div className="inner">
//               <div className="thumbnail">
//                 <img
//                   src={person.imgSrc}
//                   alt={person.name}
//                   className="carousel-image"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       <div className="tab-content">
//         <h2>{selectedPerson.name}</h2>
//         <p>{selectedPerson.position}</p>

//         {selectedPerson.additionalData?.length > 0 ? (
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
//               {selectedPerson.additionalData.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.role}</td>
//                   <td>{item.code}</td>
//                   <td>{item.deadline}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No additional data available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Caro;

// import React, { useState, useEffect } from "react";

// import "./caro.css";

// const people = [
//   {
//     id: 1,
//     name: "ALL",
//     position:
//       "Restoring the body of Christ to the desire and purpose of her Lord through spirit-enabled engagements...",
//     imgSrc: "https://demo.edublink.co/wp-content/uploads/2023/05/girl-1.webp",
//     additionalData: [
//       {
//         id: 1,
//         role: "Graphics Designer",
//         code: "RKM/2024/07/233",
//         deadline: "September 2025",
//       },
//       {
//         id: 2,
//         role: "Graphics Designer",
//         code: "RKM/2024/07/234",
//         deadline: "October 2025",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "GENERAL",
//     position: "Providing resources and support to aid the journey of faith...",
//     imgSrc:
//       "https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg",
//     additionalData: [
//       {
//         id: 3,
//         role: "Web Developer",
//         code: "RKM/2024/07/235",
//         deadline: "November 2025",
//       },
//     ],
//   },
//   // Add more people as needed...
// ];

// function Caro() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0]);

//   // Function to handle carousel slide change
//   const handleAfterChange = (currentIndex) => {
//     console.log("Slide changed. Current Index:", currentIndex);

//     // Wrap the index around if it's out of bounds
//     const validIndex = currentIndex % people.length; // This ensures index wraps around within the array bounds

//     const selected = people[validIndex];
//     console.log("Selected person has changed:", selected);

//     // Update the selectedPerson state when the carousel changes
//     setSelectedPerson(selected);
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

//   // Handle manual clicks on the carousel items
//   const handleItemClick = (person) => {
//     setSelectedPerson(person);
//   };

//   return (
//     <div>
//       <Carousel
//         swipeable
//         draggable
//         responsive={responsive}
//         infinite
//         keyBoardControl
//         transitionDuration={500}
//         afterChange={handleAfterChange} // Capture slide change
//         containerClass="carousel-container"
//         itemClass="carousel-item-padding-40-px"
//         dotListClass="custom-dot-list-style"
//       >
//         {people.map((person) => (
//           <div
//             key={person.id}
//             className="carousel-item"
//             onClick={() => handleItemClick(person)} // Handle click to select person
//           >
//             <div className="inner">
//               <div className="thumbnail">
//                 <img
//                   src={person.imgSrc}
//                   alt={person.name}
//                   className="carousel-image"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       <div className="tab-content">
//         <h2>{selectedPerson.name}</h2>
//         <p>{selectedPerson.position}</p>

//         {selectedPerson.additionalData?.length > 0 ? (
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
//               {selectedPerson.additionalData.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.role}</td>
//                   <td>{item.code}</td>
//                   <td>{item.deadline}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No additional data available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Caro;
