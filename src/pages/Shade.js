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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // use icons for buttons
import Builder from "./Builder";
import Swipes from "./Swipes";

import img from "./blog.webp";

const Shade = () => {
  return (
    <>
      <body class="home page-template-default page page-id-13480 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-disable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-13480">
        <div class="entry-content">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="10265"
            class="elementor elementor-10265"
          >
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-3ae61d7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="3ae61d7"
              data-element_type="section"
              data-settings='{"background_background":"classic","shape_divider_bottom":"tilt"}'
            >
              <h3 class="entry-title" style={{ textAlign: "center" }}>
                The Shade
              </h3>
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8e0b822"
                  data-id="8e0b822"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="zin elementor-section elementor-inner- s   ection elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="faace8e"
                      data-element_type="section"
                      style={{ marginBottom: "20px" }}
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-041d259"
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
                              <div>
                                <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                  {/*}  <div class="edublink-icon-box-icon edublink-icon-box-enable">
                <i
                  aria-hidden="true"
                  class="fas fa-binoculars"
                ></i>
              </div>*/}
                                  <div class="edublink-icon-box-content">
                                    {/*}  <h4 class="edublink-icon-box-title">
                  Our Vision
                </h4>*/}
                                    <div class="edublink-icon-box-details">
                                      <p
                                        style={{
                                          fontSize: "18px",
                                          textAlign: "justify",
                                          color: "black",
                                        }}
                                      >
                                        The Shade is where all of the activities
                                        of Rarebuild and other ministries take
                                        place - live and digitally. The space
                                        afford everyone who comes an opportunity
                                        to genuinely meet with GOD.
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
        </div>

        <div
          class="edublink-page-title-area edublink-breadcrumb-style-1 edublink-breadcrumb-has-bg"
          style={{
            backgroundImage: `url(${img})`, // Use the imported image here
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div class="edublink-container"></div>
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
                        <section
                          class="elementor-section elementor-top-section elementor-element elementor-element-3ae61d7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                          data-id="3ae61d7"
                          data-element_type="section"
                          data-settings='{"background_background":"classic","shape_divider_bottom":"tilt"}'
                        >
                          <div class="elementor-container elementor-column-gap-no">
                            <div
                              class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8e0b822"
                              data-id="8e0b822"
                              data-element_type="column"
                            >
                              <div class="elementor-widget-wrap elementor-element-populated">
                                {/*}    <section
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
                                              <span class="pre-heading">
                                                WHO WE ARE
                                              </span>
                                              <h6 class="heading ead">
                                                We aim to provide a responsive,
                                                imaginative and professional
                                                architecture service tailored to
                                                the aspiration of each of our
                                                client and to deliver quality
                                                results regardless of
                                                commission, size or type.
                                                <br></br> We seek to develop a
                                                sustainable and cost efficient
                                                design, which speaks the
                                                language of global architecture
                                                and fulfils the expectation of
                                                building users by addressing
                                                their identity , physical and
                                                socialogical context
                                              </h6>

                                              <div class="title-shape">
                                                <i class="icon-19"></i>
                                              </div>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>*/}

                                <section
                                  class="zin elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="faace8e"
                                  data-element_type="section"
                                >
                                  <div class="elementor-container elementor-column-gap-no">
                                    <div
                                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-919723e"
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
                                          <div>
                                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                              {/*}   <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-bullseye"
                                              ></i>
                                            </div>*/}
                                              <div class="edublink-icon-box-content">
                                                <h4
                                                  class="edublink-icon-box-title"
                                                  style={{
                                                    textTransform: "uppercase",
                                                    color: "#00a5f5",
                                                    textAlign: "justify",
                                                    fontWeight: "900",
                                                  }}
                                                >
                                                  Our Mission
                                                </h4>

                                                <div class="edublink-icon-box-details">
                                                  <p
                                                    style={{
                                                      fontSize: "18px",
                                                      textAlign: "justify",
                                                      color: "black",
                                                    }}
                                                  >
                                                    Our mission is to curate
                                                    experiences and moderate
                                                    encounters/ engagement with
                                                    God and other followers of
                                                    Jesus, the Christ while on
                                                    earth
                                                  </p>
                                                </div>
                                              </div>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-041d259"
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
                                          <div>
                                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                              {/*}  <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-binoculars"
                                              ></i>
                                            </div>*/}
                                              <div class="edublink-icon-box-content">
                                                <h4
                                                  class="edublink-icon-box-title"
                                                  style={{
                                                    textTransform: "uppercase",
                                                    color: "#00a5f5",
                                                    textAlign: "justify",
                                                    fontWeight: "900",
                                                  }}
                                                >
                                                  Our Vision
                                                </h4>
                                                <div class="edublink-icon-box-details">
                                                  <p
                                                    style={{
                                                      fontSize: "18px",
                                                      textAlign: "justify",
                                                      color: "black",
                                                    }}
                                                  >
                                                    To become the address for
                                                    the LORD on earth,
                                                    accessible to all
                                                    communities where people
                                                    live.
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

                                <section
                                  class="zin elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="faace8e"
                                  data-element_type="section"
                                >
                                  <div class="elementor-container elementor-column-gap-no">
                                    <div
                                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-919723e"
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
                                          <div>
                                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                              {/*}   <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-bullseye"
                                              ></i>
                                            </div>*/}
                                              <div class="edublink-icon-box-content">
                                                <h4
                                                  class="edublink-icon-box-title"
                                                  style={{
                                                    textTransform: "uppercase",
                                                    color: "#00a5f5",
                                                    textAlign: "justify",
                                                    fontWeight: "900",
                                                  }}
                                                >
                                                  Objectives
                                                </h4>

                                                <div class="edublink-icon-box-details">
                                                  <p
                                                    style={{
                                                      fontSize: "18px",
                                                      textAlign: "justify",
                                                      color: "black",
                                                    }}
                                                  >
                                                    We are looking forward to a
                                                    time on earth when no one is
                                                    a stranger, who truly
                                                    desires a relationship with
                                                    the Most High God and the
                                                    knowledge of His ways. We
                                                    hope to accomplish this
                                                    through real-life and
                                                    digital tools and platforms.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-041d259"
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
                                          <div>
                                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                              {/*}  <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-binoculars"
                                              ></i>
                                            </div>*/}
                                              <div class="edublink-icon-box-content">
                                                <h4
                                                  class="edublink-icon-box-title"
                                                  style={{
                                                    textTransform: "uppercase",
                                                    color: "#00a5f5",
                                                    textAlign: "justify",
                                                    fontWeight: "900",
                                                  }}
                                                ></h4>
                                                <div class="edublink-icon-box-details">
                                                  <h4
                                                    class="edublink-icon-box-title"
                                                    style={{
                                                      textTransform:
                                                        "uppercase",
                                                      color: "#00a5f5",
                                                      textAlign: "justify",
                                                      fontWeight: "900",
                                                    }}
                                                  >
                                                    Strategy
                                                  </h4>

                                                  <p
                                                    style={{
                                                      fontSize: "18px",
                                                      textAlign: "justify",
                                                      color: "black",
                                                    }}
                                                  >
                                                    We know the world is
                                                    changing and what used to be
                                                    tested and trusted are no
                                                    longer adequate because of
                                                    changing cultures.
                                                    Therefore, we are resolved
                                                    to tell compelling stories
                                                    until everyone is blessed
                                                    with a clear and relatable
                                                    understanding of the person
                                                    of God.
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

                                <section
                                  class="zin elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="faace8e"
                                  data-element_type="section"
                                >
                                  <div class="elementor-container elementor-column-gap-no">
                                    <div
                                      class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-041d259"
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
                                          <div>
                                            <div class="edublink-icon-box-wrapper edublink-icon-box-icon edublink-icon-box-icon-position-top">
                                              {/*}  <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-binoculars"
                                            ></i>
                                          </div>*/}
                                              <div class="edublink-icon-box-content">
                                                <h4
                                                  class="edublink-icon-box-title"
                                                  style={{
                                                    textTransform: "uppercase",
                                                    color: "#00a5f5",
                                                    textAlign: "justify",
                                                    fontWeight: "900",
                                                  }}
                                                ></h4>
                                                <div class="edublink-icon-box-details">
                                                  <p
                                                    style={{
                                                      fontSize: "18px",
                                                      textAlign: "justify",
                                                      color: "black",
                                                    }}
                                                  >
                                                    Our buildings are merely
                                                    facilities for our
                                                    activities. Our people are
                                                    the real Shade, built by our
                                                    stewardship and
                                                    discipleship, representing
                                                    the LORD in their spheres of
                                                    influence. Our network of
                                                    studios are platforms for
                                                    sharing the messages of the
                                                    kingdom of God with our
                                                    world, contributed into by
                                                    everyone who is a part of
                                                    the communities therein.
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

                        {/*} <section
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
                                  <span class="pre-heading">
                                    OUR MINISTRIES
                                  </span>
                                  <h6 class="heading">
                                    Our Multi
                                    <mark> Dimesional </mark> engagement
                                    includes <br />
                                    the following
                                  </h6>
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
                                  <div
                                    class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-919723e"
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
                                            <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-bullseye"
                                              ></i>
                                            </div>
                                            <div class="edublink-icon-box-content">
                                              <h4 class="edublink-icon-box-title">
                                                The fingerprint commission
                                              </h4>
                                              <div class="edublink-icon-box-details">
                                                <p>
                                                  Our in rich to the church of
                                                  God in christ Jesus
                                                </p>
                                              </div>
                                            </div>
                                          </div>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-919723e"
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
                                            <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-bullseye"
                                              ></i>
                                            </div>
                                            <div class="edublink-icon-box-content">
                                              <h4 class="edublink-icon-box-title">
                                                Lebana Academy
                                              </h4>
                                              <div class="edublink-icon-box-details">
                                                <p>
                                                  Our education outreach through
                                                  school for life & School for
                                                  future
                                                </p>
                                              </div>
                                            </div>
                                          </div>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-041d259"
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
                                            <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-binoculars"
                                              ></i>
                                            </div>
                                            <div class="edublink-icon-box-content">
                                              <h4 class="edublink-icon-box-title">
                                                Life tree Academy
                                              </h4>
                                              <div class="edublink-icon-box-details">
                                                <p>
                                                  Our empowerment outreach
                                                  through idea development and
                                                  deployment
                                                </p>
                                              </div>
                                            </div>
                                          </div>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-041d259"
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
                                            <div class="edublink-icon-box-icon edublink-icon-box-enable">
                                              <i
                                                aria-hidden="true"
                                                class="fas fa-binoculars"
                                              ></i>
                                            </div>
                                            <div class="edublink-icon-box-content">
                                              <h4 class="edublink-icon-box-title">
                                                The Shade Network
                                              </h4>
                                              <div class="edublink-icon-box-details">
                                                <p>
                                                  Our media outreach through
                                                  every form of media channel
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
                        </section>*/}

                        <Swipes />

                        {/*} <section
                          class="elementor-section elementor-top-section elementor-element elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                          data-element_type="section"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <section
                              class="elementor-section elementor-inner-section elementor-element elementor-element-92a4bcd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="92a4bcd"
                              data-element_type="section"
                            >
                              <div class="elementor-container elementor-column-gap-extended">
                                <div
                                  class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d6e410d"
                                  data-id="d6e410d"
                                  data-element_type="column"
                                >
                                  <div class="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      class="elementor-element elementor-element-b3ba4fe  elementor-widget elementor-widget-edublink-heading"
                                      data-id="b3ba4fe"
                                      data-element_type="widget"
                                      data-settings='{"_animation":"edublink--slide-up","_animation_delay":150}'
                                      data-widget_type="edublink-heading.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <div class="edublink-section-heading">
                                          <span class="pre-heading">
                                            People
                                          </span>
                                          <h3 class="heading">
                                            BOARD OF BUILDERS
                                          </h3>
                                          <div class="title-shape">
                                            <i class="icon-19"></i>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section
                              class="elementor-section elementor-inner-section elementor-element elementor-element-9b029b4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                              data-id="9b029b4"
                              data-element_type="section"
                            >
                              <div class="elementor-container elementor-column-gap-extended">
                                <div
                                  class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-272ebdb"
                                  data-id="272ebdb"
                                  data-element_type="column"
                                >
                                  <div class="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      class="elementor-element elementor-element-625a89b  elementor-widget elementor-widget-edublink-team"
                                      data-id="625a89b"
                                      data-element_type="widget"
                                      data-settings='{"_animation":"edublink--slide-up","_animation_delay":250}'
                                      data-widget_type="edublink-team.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <div class="eb-team-wrapper">
                                          <div class="eb-team-container eb-team-grid edublink-row">
                                            <div
                                              class="edublink-team-3-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6"
                                              data-sal=""
                                            >
                                              <div class="edublink-team-item">
                                                <div class="thumbnail-wrap">
                                                  <div class="thumbnail">
                                                    <a>
                                                      <img
                                                        decoding="async"
                                                        src="../wp-content/uploads/2023/06/team-01.webp"
                                                        alt="Team-1"
                                                      />
                                                    </a>
                                                  </div>
                                                  <ul class="team-share-info">
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-facebook"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-twitter"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-linkedin2"></i>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div class="content">
                                                  <h5 class="title">
                                                    <a>
                                                      Olusegun Akinwale Egundayo
                                                    </a>
                                                  </h5>
                                                  <span class="designation">
                                                    UI Designer
                                                  </span>
                                                  <p class="description">
                                                    Consectetur adipisicing
                                                    elit, sed do eius mod tempor
                                                    incididunt
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="edublink-team-3-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6"
                                              data-sal=""
                                            >
                                              <div class="edublink-team-item">
                                                <div class="thumbnail-wrap">
                                                  <div class="thumbnail">
                                                    <a>
                                                      <img
                                                        decoding="async"
                                                        src="../wp-content/uploads/2023/06/team-02.webp"
                                                        alt="Team-2"
                                                      />
                                                    </a>
                                                  </div>
                                                  <ul class="team-share-info">
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-facebook"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-twitter"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-linkedin2"></i>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div class="content">
                                                  <h5 class="title">
                                                    <a>Edward Norton</a>
                                                  </h5>
                                                  <span class="designation">
                                                    UI Designer
                                                  </span>
                                                  <p class="description">
                                                    Consectetur adipisicing
                                                    elit, sed do eius mod tempor
                                                    incididunt
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="edublink-team-3-widget edublink-col-lg-4 edublink-col-md-6 edublink-col-sm-6"
                                              data-sal=""
                                            >
                                              <div class="edublink-team-item">
                                                <div class="thumbnail-wrap">
                                                  <div class="thumbnail">
                                                    <a>
                                                      <img
                                                        decoding="async"
                                                        src="../wp-content/uploads/2023/06/team-03.webp"
                                                        alt="Team-3"
                                                      />
                                                    </a>
                                                  </div>
                                                  <ul class="team-share-info">
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-facebook"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-twitter"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="#"
                                                        target="_blank"
                                                      >
                                                        <i class="icon-linkedin2"></i>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div class="content">
                                                  <h5 class="title">
                                                    <a>Penelope Cruz</a>
                                                  </h5>
                                                  <span class="designation">
                                                    UI Designer
                                                  </span>
                                                  <p class="description">
                                                    Consectetur adipisicing
                                                    elit, sed do eius mod tempor
                                                    incididunt
                                                  </p>
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
                            </section>
                          </div>
                        </section>*/}
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

export default Shade;
