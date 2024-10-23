import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./builder.css";

const Builder = () => {
  useEffect(() => {
    // Optional: add any initialization code if needed
  }, []);

  return (
    <section
      className="elementor-section elementor-inner-section elementor-element elementor-element-352cba1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="352cba1"
      data-element_type="section"
      data-settings='{"animation":"edublink--slide-up","animation_delay":150}'
    >
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-400163e"
          data-id="400163e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-47010b3 elementor-widget elementor-widget-edublink-testimonial"
              data-id="47010b3"
              data-element_type="widget"
              data-widget_type="edublink-testimonial.default"
            >
              <div className="elementor-widget-container">
                <div className="eb-testimonial-wrapper eb-testimonial-wrapper-style-4">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                  >
                    <SwiperSlide>
                      <div className="eb-testimonial-item">
                        <div className="eb-testimonial-slide">
                          <div className="content">
                            <div className="author-info">
                              <div className="thumbnail">
                                <img
                                  decoding="async"
                                  src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-05.png"
                                  className="testimonial-author-avatar"
                                  alt="Testimonial-5"
                                />
                              </div>
                            </div>
                            <p className="description">
                              Has been in professional architectural practice
                              since his post-graduate from the School of
                              Architecture, University of Lagos, in 2007, and
                              has participated in the design and execution of a
                              broad variety of building projects from inception
                              to final stage.
                            </p>
                            <div className="info">
                              <h5 className="title">
                                Olusegun Akinwale EkunDay
                              </h5>
                              <span className="subtitle">President</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="eb-testimonial-item">
                        <div className="eb-testimonial-slide">
                          <div className="content">
                            <div className="author-info">
                              <div className="thumbnail">
                                <img
                                  decoding="async"
                                  src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-06.png"
                                  className="testimonial-author-avatar"
                                  alt="Testimonial-6"
                                />
                              </div>
                            </div>
                            <p className="description">
                              Lorem ipsum dolor amet consec tur elit adicing sed
                              do usmod zx tempor enim minim veniam quis nostrud
                              exer citation.
                            </p>
                            <div className="info">
                              <h5 className="title">Thomas Lopez</h5>
                              <span className="subtitle">Designer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="eb-testimonial-item">
                        <div className="eb-testimonial-slide">
                          <div className="content">
                            <div className="author-info">
                              <div className="thumbnail">
                                <img
                                  decoding="async"
                                  src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-07.png"
                                  className="testimonial-author-avatar"
                                  alt="Testimonial-7"
                                />
                              </div>
                            </div>
                            <p className="description">
                              Lorem ipsum dolor amet consec tur elit adicing sed
                              do usmod zx tempor enim minim veniam quis nostrud
                              exer citation.
                            </p>
                            <div className="info">
                              <h5 className="title">Amber Page</h5>
                              <span className="subtitle">Developer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="eb-testimonial-item">
                        <div className="eb-testimonial-slide">
                          <div className="content">
                            <div className="author-info">
                              <div className="thumbnail">
                                <img
                                  decoding="async"
                                  src="https://demo.edublink.co/wp-content/uploads/2023/06/testimonial-08.png"
                                  className="testimonial-author-avatar"
                                  alt="Testimonial-8"
                                />
                              </div>
                            </div>
                            <p className="description">
                              Lorem ipsum dolor amet consec tur elit adicing sed
                              do usmod zx tempor enim minim veniam quis nostrud
                              exer citation.
                            </p>
                            <div className="info">
                              <h5 className="title">James Flowers</h5>
                              <span className="subtitle">Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Pagination */}
                  <div className="swiper-pagination"></div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builder;
