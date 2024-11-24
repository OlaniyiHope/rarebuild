import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./edublink-breadcrumb-bg.webp";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Footers from "./Footers";
import DataTable from "./DataTable";
import Swipes from "./Swipes";
import CareerSwipe from "./CareerSwipe";
const Career = () => {
  return (
    <>
      <body class="page-template-default page page-id-17213 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-enable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-17213">
        <div id="page" class="site">
          <div id="content" class="site-content" style={{ marginTop: "60px" }}>
            <div class="site-content-inner edublink-page-container edublink-container">
              <div class="edublink-main-content-inner edublink-row">
                <div id="primary" class="content-area edublink-col-lg-12">
                  <main id="main" class="site-main">
                    <article
                      id="post-17213"
                      class="edublink-single-page post-17213 page type-page status-publish hentry"
                    >
                      <div class="entry-content">
                        <div
                          data-elementor-type="wp-page"
                          data-elementor-id="17213"
                          class="elementor elementor-17213"
                        >
                          {/*<section
                            class="elementor-section elementor-inner-section elementor-element elementor-element-21ebc1c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="21ebc1c"
                            data-element_type="section"
                          >
                            <div class="elementor-container elementor-column-gap-extended">
                              <div
                                class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-521e0af"
                                data-id="521e0af"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-9835d56 edublink-br-m-none  elementor-widget elementor-widget-edublink-heading"
                                    data-id="9835d56"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}'
                                    data-widget_type="edublink-heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="edublink-section-heading">
                                        <h6 class="heading ead">
                                          We aim to provide a responsive,
                                          imaginative and professional
                                          architecture service{" "}
                                          <mark>
                                            tailored to the aspiration of each
                                            of our client and to deliver quality
                                            results regardless of commission,
                                            size or type.
                                          </mark>
                                          <br></br> We seek to develop a
                                          sustainable and cost efficient design,{" "}
                                          <mark>
                                            which speaks the language of global
                                            architecture and fulfils the
                                            expectation of building users{" "}
                                          </mark>
                                          by addressing their identity ,
                                          physical and socialogical context
                                        </h6>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>*/}
                          {/*}   <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-57db4c6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="57db4c6"
                            data-element_type="section"
                          >
                            <div class="elementor-container elementor-column-gap-extended">
                              <div
                                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67acdf4"
                                data-id="67acdf4"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-bf2cfd1  elementor-widget elementor-widget-edublink-heading"
                                    data-id="bf2cfd1"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}'
                                    data-widget_type="edublink-heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="edublink-section-heading">
                                        <h3 class="heading">
                                          Volunteering Jobs
                                        </h3>
                                        <div class="title-shape">
                                          <i class="icon-19"></i>
                                        </div>
                                        <div class="sub-heading">
                                          We are an equal and
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-ed255e6  elementor-widget elementor-widget-edublink-lp-course-category"
                                    data-id="ed255e6"
                                    data-element_type="widget"
                                    data-settings='{"_animation_delay":150,"_animation":"edublink--slide-up"}'
                                    data-widget_type="edublink-lp-course-category.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="eb-course-cat-wrapper">
                                        <div class="eb-course-cat-container-grid eb-course-cat-grid edublink-row">
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-71e2b22"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-paint-brush"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/business/index.html">
                                                    Graphics Design
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-21733b5"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-video"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/online-art/index.html">
                                                    Cinematographer
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-29d920a"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-cut"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/motivation/index.html">
                                                    Video Editor
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-b3ea4bf"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-headphones"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/fitness/index.html">
                                                    Sound Engineer
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-d90e237"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-user"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/digital-marketing/index.html">
                                                    Admin Assistance
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-e8ec8a9"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-chalkboard-teacher"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/digital-marketing/index.html">
                                                    Teachers
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-8b37cc2"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-atom"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/business/index.html">
                                                    Science Teachers
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            class="edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6 edublink-course-single-cat edublink-course-cat-single-grid elementor-repeater-item-cb1086d"
                                            data-sal=""
                                          >
                                            <div class="edublink-category-1">
                                              <div class="icon">
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-desktop"
                                                ></i>
                                              </div>
                                              <div class="content">
                                                <h5 class="title">
                                                  <a href="course-category/programming/index.html">
                                                    Computer Science
                                                  </a>
                                                </h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>*/}
                          <CareerSwipe />
                        </div>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
            <Footers />
          </div>
        </div>
      </body>
    </>
  );
};

export default Career;
