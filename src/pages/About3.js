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
const About3 = () => {
  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id="10265"
        class="elementor elementor-10265"
        style={{ marginBottom: "150px", backgroundColor: "none" }}
      >
        <section
          class="elementor-section elementor-top-section elementor-element  elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
        >
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8e0b822"
              data-id="8e0b822"
              data-element_type="column"
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-faace8e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="faace8e"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-no">
                    <div
                      class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-919723e"
                      data-id="919723e"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-5b44946  elementor-widget elementor-widget-edublink-icon-box"
                          data-id="5b44946"
                          data-element_type="widget"
                          data-settings='{"_animation":"edublink--slide-up","_animation_delay":50}'
                          data-widget_type="edublink-icon-box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                              <div
                                class="edublink-icon-box-icon edublink-icon-box-enable"
                                style={{ backgroundColor: "green" }}
                              >
                                <i
                                  aria-hidden="true"
                                  class="fas fa-bullseye"
                                  style={{ color: "white" }}
                                ></i>
                              </div>
                              <div class="edublink-icon-box-content">
                                <h4 class="edublink-icon-box-title">
                                  Our Mission
                                </h4>
                                <div class="edublink-icon-box-details">
                                  <p>
                                    To deliver functional, sustainable and
                                    beautiful designs and build solutions that
                                    exceed our clients expectation while
                                    fostrering a culture of excellence to enrich
                                    life
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-041d259"
                      data-id="041d259"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-e68ab37  elementor-widget elementor-widget-edublink-icon-box"
                          data-id="e68ab37"
                          data-element_type="widget"
                          data-settings='{"_animation":"edublink--slide-up","_animation_delay":100}'
                          data-widget_type="edublink-icon-box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                              <div
                                class="edublink-icon-box-icon edublink-icon-box-enable"
                                style={{ backgroundColor: "green" }}
                              >
                                <i
                                  aria-hidden="true"
                                  class="fas fa-binoculars"
                                  style={{ color: "white" }}
                                ></i>
                              </div>
                              <div class="edublink-icon-box-content">
                                <h4 class="edublink-icon-box-title">
                                  Our Vision
                                </h4>
                                <div class="edublink-icon-box-details">
                                  <p>
                                    To deliver functional, sustainable and
                                    beautiful designs and build solutions that
                                    exceed our clients expectation while
                                    fostrering a culture of excellence to enrich
                                    life
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b73d0ca"
                      data-id="b73d0ca"
                      data-element_type="column"
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-f4813d3  elementor-widget elementor-widget-edublink-icon-box"
                          data-id="f4813d3"
                          data-element_type="widget"
                          data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}'
                          data-widget_type="edublink-icon-box.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                              <div
                                class="edublink-icon-box-icon edublink-icon-box-enable"
                                style={{ backgroundColor: "green" }}
                              >
                                <i
                                  aria-hidden="true"
                                  class="fas fa-church"
                                  style={{ color: "white" }}
                                ></i>
                              </div>
                              <div class="edublink-icon-box-content">
                                <h4 class="edublink-icon-box-title">
                                  OUR MINISTRIES
                                </h4>
                                <div class="edublink-icon-box-details">
                                  <p>
                                    To deliver functional, sustainable and
                                    beautiful designs and build solutions that
                                    exceed our clients expectation while
                                    fostrering a culture of excellence to enrich
                                    life
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About3;
