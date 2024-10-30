import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./photo.jpg";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Footers from "./Footers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // use icons for buttons
import Builder from "./Builder";
import Swipes from "./Swipes";
import PeopleSlide from "./PeopleSlide";

const People = () => {
  return (
    <>
      <body class="home page-template-default page page-id-13480 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-disable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-13480">
        <div
          class="edublink-page-title-area edublink-breadcrumb-style-1 edublink-breadcrumb-has-bg"
          style={{ backgroundImage: `url(${r1})` }}
        >
          <div class="edublink-container">
            <div class="edublink-page-title">
              <h1 class="entry-title">RareBuild People</h1>
            </div>
            <div class="edublink-breadcrumb-wrapper">
              <nav class="edublink-breadcrumb">
                <ul class="breadcrumb">
                  <li>
                    <a href="../index.html">Home</a>{" "}
                  </li>{" "}
                  <li>
                    <span class="active">About Us</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="content" class="site-content">
          <div class="site-content-inner edublink-page-container edublink-container">
            <div class="edublink-main-content-inner edublink-row">
              <div id="primary" class="content-area edublink-col-lg-12">
                <main id="main" class="site-main">
                  <article
                    id="post-10265"
                    class="edublink-single-page post-10265 page type-page status-publish hentry"
                  >
                    <div class="entry-content">
                      <div
                        data-elementor-type="wp-page"
                        data-elementor-id="10265"
                        class="elementor elementor-10265"
                      >
                        <PeopleSlide />
                        <section
                          class="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-element_type="section"
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
                                  <h1
                                    class="pre-heading"
                                    style={{
                                      fontSize: "22px",
                                      fontWeight: "800",
                                    }}
                                  >
                                    BOARD OF BUILDERS
                                  </h1>

                                  <div class="title-shape">
                                    <i class="icon-19"></i>
                                  </div>
                                </div>{" "}
                              </div>

                              <section
                                class="zin elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="faace8e"
                                data-element_type="section"
                              >
                                <div class="elementor-container elementor-column-gap-no">
                                  <section>
                                    <div>
                                      <h6>FINGER PRINT COMMISSION</h6>

                                      <ul>
                                        <li>Pastor Adeniyi Adekunle</li>
                                        <li>Dr Damola Adesina</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                      </ul>
                                      <h6>LEBANA ACADEMY</h6>

                                      <ul>
                                        <li>Pastor Adeniyi Adekunle</li>
                                        <li>Dr Damola Adesina</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                        <li>Mr Samson Adeosun</li>
                                      </ul>
                                    </div>
                                  </section>
                                </div>
                              </section>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
          <Footers />
        </div>
      </body>
    </>
  );
};

export default People;
