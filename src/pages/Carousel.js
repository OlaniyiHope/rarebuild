import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    slidesToShow: 5,
    arrows: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    {
      imgSrc: "/wp-content/uploads/2023/06/church.jpeg",
      imgAlt: "New York",
      title: "Lagos",
      price: "20 Properties",
      link: "single-property-1.html",
    },
    {
      imgSrc: "/wp-content/uploads/2023/06/church.jpeg",
      imgAlt: "Los Angeles",
      title: "Abuja",
      price: "20 Properties",
      link: "single-property-1.html",
    },
    {
      imgSrc: "wp-content/uploads/2023/06/church.jpeg",
      imgAlt: "San Jose",
      title: "Ogun",
      price: "20 Properties",
      link: "single-property-1.html",
    },
    {
      imgSrc: "wp-content/uploads/2023/06/church.jpeg",
      imgAlt: "Fort Worth",
      title: "Oyo",
      price: "20 Properties",
      link: "single-property-1.html",
    },
    {
      imgSrc: "wp-content/uploads/2023/06/church.jpeg",
      imgAlt: "Kansas City",
      title: "Osun",
      price: "20 Properties",
      link: "single-property-1.html",
    },
  ];

  return (
    <div>
      <Slider {...settings} key={items.length}>
        {items.map((item, index) => (
          <div className="box px-2" key={index}>
            <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
              <img src={item.imgSrc} className="card-img" alt={item.imgAlt} />
              <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                <h2 className="card-title mb-0 fs-20 lh-182">
                  <a className="text-white">{item.title}</a>
                </h2>
                <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                  <span className="ml-2 fs-15 font-weight-bold">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
