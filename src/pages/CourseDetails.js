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
const CourseDetails = () => {
  return (
    <>
      <body class="blog paged wp-custom-logo wp-embed-responsive paged-2 theme-edublink woocommerce-no-js theme-name-edublink-child group-blog hfeed edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18">
        <div id="content" class="site-content">
          <div class="lp-archive-courses">
            <div class="edublink-course-page-header edublink-course-page-header">
              <div class="eb-course-header-breadcrumb">
                <div class="edublink-container">
                  <nav class="edublink-breadcrumb">
                    <ul class="breadcrumb">
                      <li>
                        <a href="https://demo.edublink.co/">Home</a>{" "}
                      </li>{" "}
                      <li>
                        <a href="https://demo.edublink.co/courses/">Course</a>
                      </li>{" "}
                      <li>
                        <span class="active">
                          Grow Personal Financial Security Thinking &#038;
                          Principles
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="eb-course-header-breadcrumb-content">
                <div class="edublink-container">
                  <div class="edublink-course-breadcrumb-inner">
                    <div class="edublink-course-title">
                      <h1 class="entry-title">
                        Grow Personal Financial Security Thinking &#038;
                        Principles
                      </h1>
                    </div>
                    <div class="edublink-course-header-meta">
                      <ul class="eb-course-header-meta-items">
                        <li class="instructor">
                          <i class="icon-58"></i>By Emilie Bryant
                        </li>
                        <li class="category">
                          <i class="icon-59"></i>
                          <a href="https://demo.edublink.co/course-category/motivation/">
                            Motivation
                          </a>
                        </li>
                        <li class="rating">
                          <div class="edublink-course-review-wrapper">
                            <div
                              class="review-stars-rated"
                              title="5 out of 5 stars"
                            >
                              <div class="review-star">
                                <span class="far">
                                  <svg
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                <span class="fas" style={{ width: "100%" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16"></polygon>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div class="review-star">
                                <span class="far">
                                  <svg
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                <span class="fas" style={{ width: "100%" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16"></polygon>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div class="review-star">
                                <span class="far">
                                  <svg
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                <span class="fas" style={{ width: "100%" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16"></polygon>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div class="review-star">
                                <span class="far">
                                  <svg
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                <span class="fas" style={{ width: "100%" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16"></polygon>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                              <div class="review-star">
                                <span class="far">
                                  <svg
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <path d="M8.5,0 L10.9285714,6.15384615 L17,6.15384615 L11.5357143,9.84615385 L13.9642857,16 L8.5,12.3076923 L3.03571429,16 L5.46428571,9.84615385 L0,6.15384615 L6.07142857,6.15384615 L8.5,0 Z M8.46921775,3.53848077 L7.09419569,7.21637091 L3.96923077,7.21637091 L6.96923077,9.20675852 L5.63589261,12.5384808 L8.46921775,10.5710529 L11.3025689,12.5384808 L9.96921341,9.20675852 L12.9692308,7.21637091 L9.84423981,7.21637091 L8.46921775,3.53848077 Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                                <span class="fas" style={{ width: "100%" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17px"
                                    height="16px"
                                    viewBox="0 0 17 16"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                    >
                                      <g fill="#FFB606" fill-rule="nonzero">
                                        <polygon points="8.5 12.3076923 3.03571429 16 5.46428571 9.84615385 0 6.15384615 6.07142857 6.15384615 8.5 0 10.9285714 6.15384615 17 6.15384615 11.5357143 9.84615385 13.9642857 16"></polygon>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <span>(2 Reviews)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="edublink-course-details-page lp-course-single-page eb-course-single-style-1">
              <div class="edublink-container">
                <div class="edublink-row">
                  <div
                    id="learn-press-course"
                    class="course-summary edublink-col-lg-8"
                  >
                    <div class="eb-course-details-page-content">
                      <div class="course-content course-summary-content">
                        <div id="learn-press-course-tabs" class="course-tabs">
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-overview-input"
                            checked="checked"
                            value="overview"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-curriculum-input"
                            value="curriculum"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-instructor-input"
                            value="instructor"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-reviews-input"
                            value="reviews"
                          />

                          <ul
                            class="learn-press-nav-tabs course-nav-tabs"
                            data-tabs="4"
                          >
                            <li class="course-nav course-nav-tab-overview active">
                              <label for="tab-overview-input">Overview</label>
                            </li>

                            <li class="course-nav course-nav-tab-curriculum">
                              <label for="tab-curriculum-input">
                                Curriculum
                              </label>
                            </li>

                            <li class="course-nav course-nav-tab-instructor">
                              <label for="tab-instructor-input">
                                Instructor
                              </label>
                            </li>

                            <li class="course-nav course-nav-tab-reviews">
                              <label for="tab-reviews-input">Reviews</label>
                            </li>
                          </ul>

                          <div class="course-tab-panels">
                            <div
                              class="course-tab-panel-overview course-tab-panel"
                              id="tab-overview"
                            >
                              <div
                                class="course-description"
                                id="learn-press-course-description"
                              >
                                <h4>Course Description</h4>
                                <p>
                                  Lorem ipsum dolor sit amet consectur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis.
                                </p>
                                <h4>What You’ll Learn From This Course</h4>
                                <ul>
                                  <li>
                                    Neque sodales ut etiam sit amet nisl purus
                                    non tellus orci ac auctor
                                  </li>
                                  <li>
                                    Tristique nulla aliquet enim tortor at
                                    auctor urna. Sit amet aliquam id diam maer
                                  </li>
                                  <li>
                                    Nam libero justo laoreet sit amet. Lacus sed
                                    viverra tellus in hac
                                  </li>
                                  <li>
                                    Tempus imperdiet nulla malesuada
                                    pellentesque elit eget gravida cum sociis
                                  </li>
                                </ul>
                                <h4>Certification</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Quis ipsum suspendisse ultrices gravida. Risus
                                  commodo viverra maecenas accumsan lacus vel
                                  facilisis.
                                </p>
                              </div>
                            </div>
                            <div
                              class="course-tab-panel-curriculum course-tab-panel"
                              id="tab-curriculum"
                            >
                              <div
                                class="learnpress-course-curriculum"
                                data-section=""
                                data-id=""
                              >
                                <ul class="lp-skeleton-animation">
                                  <li style={{ width: "100%" }}></li>
                                  <li style={{ width: "76%" }}></li>
                                  <li style={{ width: "86%" }}></li>
                                  <li style={{ width: "63%" }}></li>
                                  <li style={{ width: "95%" }}></li>
                                  <li style={{ width: "90%" }}></li>
                                  <li style={{ width: "82%" }}></li>
                                  <li style={{ width: "85%" }}></li>
                                  <li style={{ width: "84%" }}></li>
                                  <li style={{ width: "83%" }}></li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="course-tab-panel-instructor course-tab-panel"
                              id="tab-instructor"
                            >
                              <div class="edublink-course-author-wrapper">
                                <div class="edublink-course-author-thumb">
                                  <img
                                    width="270"
                                    height="320"
                                    src="https://demo.edublink.co/wp-content/uploads/2023/06/team-03.webp"
                                    class="avatar avatar-350 photo"
                                    alt=""
                                    decoding="async"
                                    srcset="https://demo.edublink.co/wp-content/uploads/2023/06/team-03.webp 270w, https://demo.edublink.co/wp-content/uploads/2023/06/team-03-253x300.webp 253w"
                                    sizes="(max-width: 270px) 100vw, 270px"
                                  />
                                </div>
                                <div class="edublink-course-author-details">
                                  <div class="edublink-author-bio-name">
                                    <a href="https://demo.edublink.co/instructor/borisjohn490/">
                                      <span>
                                        <span class="instructor-display-name">
                                          Emilie Bryant
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div class="edublink-author-bio-designation">
                                    <span>Shopify Expert</span>
                                  </div>
                                  <div class="edublink-author-bio-details">
                                    <p>
                                      Consectetur adipisicing elit, sed do
                                      eiusmod tempor incididunt labore et dolore
                                      magna aliqua enim minim veniam quis
                                      nostrud exercitation ulla mco laboris nisi
                                      ut aliquip ex ea commodo consequat. duis
                                      aute irure dolor in reprehenderit in
                                      voluptate.
                                    </p>
                                  </div>
                                  <div class="edublink-author-social-info">
                                    <a href="#" target="_blank">
                                      <i class="icon-facebook"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                      <i class="icon-twitter"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                      <i class="icon-linkedin2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                            <div
                              class="course-tab-panel-reviews course-tab-panel"
                              id="tab-reviews"
                            >
                              <div
                                class="learnpress-course-review"
                                data-id="12798"
                              >
                                <ul class="lp-skeleton-animation">
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                  <li
                                    style={{ width: "100%", height: "20px" }}
                                  ></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="comments"
                          class="comments-area edublink-comments-area"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="ed-course-sidebar edublink-col-lg-4">
                    <div class="edublink-course-details-sidebar eb-course-single-1 sidebar-enable">
                      <div class="edublink-course-details-sidebar-inner">
                        <div
                          class="edublink-course-details-card-preview"
                          style={{
                            backgroundImage:
                              "url(https://demo.edublink.co/wp-content/themes/edublink/assets/images/course-preview.jpg)",
                          }}
                        >
                          <div class="edublink-course-video-preview-area">
                            <a
                              data-fancybox
                              href="https://www.youtube.com/watch?v=m2m5Xx5T4No"
                              class="edublink-course-video-popup"
                            >
                              <i class="icon-18"></i>
                            </a>
                          </div>
                        </div>
                        <div class="edublink-course-details-sidebar-content">
                          <h4 class="widget-title">Course Includes:</h4>
                          <ul class="edublink-course-meta-informations">
                            <li class="edublink-course-details-features-item course-price">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-60"></i>Price:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                <div class="course-price">
                                  <span class="course-item-price">
                                    <span class="origin-price">&#036;59</span>
                                    <span class="price">&#036;49</span>
                                  </span>
                                </div>
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-instructor">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-62"></i>Instructor:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                Emilie Bryant
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-duration">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-61"></i>Duration:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                12 weeks
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-lesson">
                              <span class="edublink-course-feature-item-label">
                                <img
                                  src="https://demo.edublink.co/wp-content/themes/edublink/assets/images/icons/books.svg"
                                  class="edublink-course-sidebar-img-icon"
                                />
                                Lessons:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                8
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-student">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-63"></i>Students:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                72
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-language">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-59"></i>Language:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                English
                              </span>
                            </li>
                            <li class="edublink-course-details-features-item course-certificate">
                              <span class="edublink-course-feature-item-label">
                                <i class="icon-64"></i>Certifications:
                              </span>
                              <span class="edublink-course-feature-item-value">
                                Yes
                              </span>
                            </li>
                          </ul>
                          <div class="edublink-course-details-sidebar-buttons">
                            <div class="lp-course-buttons">
                              <form
                                name="purchase-course"
                                class="purchase-course"
                                method="post"
                                enctype="multipart/form-data"
                              >
                                <input
                                  type="hidden"
                                  name="purchase-course"
                                  value="12798"
                                />

                                <button class="lp-button button button-purchase-course">
                                  Buy Now{" "}
                                </button>
                              </form>
                            </div>
                          </div>
                          <div class="edublink-single-event-social-share">
                            <h4 class="share-title">Share On:</h4>
                            <ul class="edublink-social-share-icons-wrapper">
                              <li class="edublink-social-share-each-icon facebook">
                                <a
                                  class="edublink-social-share-link"
                                  href="https://www.facebook.com/sharer.php?s=100&amp;u=https://demo.edublink.co/courses/grow-personal-financial-security-thinking-principles/&amp;i=https%3A%2F%2Fdemo.edublink.co%2Fwp-content%2Fuploads%2F2023%2F03%2Fcourse-08.jpg"
                                  target="_blank"
                                  title="Share on facebook"
                                >
                                  <i class="icon-facebook"></i>
                                </a>
                              </li>

                              <li class="edublink-social-share-each-icon twitter">
                                <a
                                  class="edublink-social-share-link"
                                  href="https://twitter.com/intent/tweet?url=https://demo.edublink.co/courses/grow-personal-financial-security-thinking-principles/"
                                  target="_blank"
                                  title="Share on Twitter"
                                >
                                  <i class="icon-twitter"></i>
                                </a>
                              </li>

                              <li class="edublink-social-share-each-icon linkedin">
                                <a
                                  class="edublink-social-share-link"
                                  href="https://linkedin.com/shareArticle?mini=true&amp;url=https://demo.edublink.co/courses/grow-personal-financial-security-thinking-principles/&amp;title=Grow%20Personal%20Financial%20Security%20Thinking%20&amp;%20Principles"
                                  target="_blank"
                                  title="Share on LinkedIn"
                                >
                                  <i class="icon-linkedin2"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="edublink-related-course-content-wrapper edublink-container">
              <div class="section-title">
                <h3 class="title related-course-title">Courses You May Like</h3>
              </div>
              <div
                class="edublink-related-course-items eb-swiper-carousel-activator swiper swiper-container"
                data-lg-items="3"
                data-md-items="3"
                data-sm-items="2"
                data-xs-items="2"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="edublink-single-course course-style-1">
                      <div class="inner">
                        <div class="thumbnail">
                          <a
                            class="course-thumb"
                            href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                          >
                            <img
                              class="w-100"
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-12-590x430.jpg"
                              alt="course-12"
                            />
                          </a>
                          <div class="time-top">
                            <span class="duration">
                              <i class="icon-61"></i>20 hours
                            </span>
                          </div>
                        </div>
                        <div class="content">
                          <span class="course-level">All Levels</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                              The Complete Guide to Build RESTful API
                              Application
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="free">Free</span>
                            </span>
                          </div>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>9 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>46 Students
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course-hover-content-wrapper">
                        <div class="wishlist-top-right">
                          <button class="edublink-wishlist-wrapper edublink-lp-non-logged-user"></button>
                        </div>
                      </div>
                      <div class="course-hover-content">
                        <div class="content">
                          <span class="course-level">All Levels</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/">
                              The Complete Guide to Build RESTful API
                              Application
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="free">Free</span>
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis...
                          </p>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>9 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>46 Students
                            </li>
                          </ul>
                          <a
                            class="edu-btn btn-secondary btn-small"
                            href="https://demo.edublink.co/courses/the-complete-guide-to-build-restful-api-application/"
                          >
                            Enroll Now<i class="icon-4"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="edublink-single-course course-style-1">
                      <div class="inner">
                        <div class="thumbnail">
                          <a
                            class="course-thumb"
                            href="https://demo.edublink.co/courses/machine-learning-a-z-hands-on-python-and-java/"
                          >
                            <img
                              class="w-100"
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-47-590x430.jpg"
                              alt="course-47"
                            />
                          </a>
                          <div class="time-top">
                            <span class="duration">
                              <i class="icon-61"></i>30 hours
                            </span>
                          </div>
                        </div>
                        <div class="content">
                          <span class="course-level">intermediate</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/machine-learning-a-z-hands-on-python-and-java/">
                              Machine Learning A-Z: Hands-On Python and java
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;99</span>
                              <span class="price">&#036;79</span>
                            </span>
                          </div>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>672 Students
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course-hover-content-wrapper">
                        <div class="wishlist-top-right">
                          <button class="edublink-wishlist-wrapper edublink-lp-non-logged-user"></button>
                        </div>
                      </div>
                      <div class="course-hover-content">
                        <div class="content">
                          <span class="course-level">intermediate</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/machine-learning-a-z-hands-on-python-and-java/">
                              Machine Learning A-Z: Hands-On Python and java
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;99</span>
                              <span class="price">&#036;79</span>
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis...
                          </p>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>672 Students
                            </li>
                          </ul>
                          <a
                            class="edu-btn btn-secondary btn-small"
                            href="https://demo.edublink.co/courses/machine-learning-a-z-hands-on-python-and-java/"
                          >
                            Enroll Now<i class="icon-4"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="edublink-single-course course-style-1">
                      <div class="inner">
                        <div class="thumbnail">
                          <a
                            class="course-thumb"
                            href="https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/"
                          >
                            <img
                              class="w-100"
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-01-590x430.jpg"
                              alt="course-01"
                            />
                          </a>
                          <div class="time-top">
                            <span class="duration">
                              <i class="icon-61"></i>15 hours
                            </span>
                          </div>
                        </div>
                        <div class="content">
                          <span class="course-level">beginner</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/">
                              Learning How To Write As A Professional Author
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;39</span>
                              <span class="price">&#036;29</span>
                            </span>
                          </div>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>423 Students
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course-hover-content-wrapper">
                        <div class="wishlist-top-right">
                          <button class="edublink-wishlist-wrapper edublink-lp-non-logged-user"></button>
                        </div>
                      </div>
                      <div class="course-hover-content">
                        <div class="content">
                          <span class="course-level">beginner</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/">
                              Learning How To Write As A Professional Author
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;39</span>
                              <span class="price">&#036;29</span>
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis...
                          </p>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>423 Students
                            </li>
                          </ul>
                          <a
                            class="edu-btn btn-secondary btn-small"
                            href="https://demo.edublink.co/courses/learning-how-to-write-as-a-professional-author/"
                          >
                            Enroll Now<i class="icon-4"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="edublink-single-course course-style-1">
                      <div class="inner">
                        <div class="thumbnail">
                          <a
                            class="course-thumb"
                            href="https://demo.edublink.co/courses/educating-through-christ-to-learn-and-to-serve/"
                          >
                            <img
                              class="w-100"
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-06-590x430.jpg"
                              alt="course-06"
                            />
                          </a>
                          <div class="time-top">
                            <span class="duration">
                              <i class="icon-61"></i>11 weeks
                            </span>
                          </div>
                        </div>
                        <div class="content">
                          <span class="course-level">All Levels</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/educating-through-christ-to-learn-and-to-serve/">
                              Educating Through Christ to Learn And to Serve
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;39</span>
                              <span class="price">&#036;29</span>
                            </span>
                          </div>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>96 Students
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course-hover-content-wrapper">
                        <div class="wishlist-top-right">
                          <button class="edublink-wishlist-wrapper edublink-lp-non-logged-user"></button>
                        </div>
                      </div>
                      <div class="course-hover-content">
                        <div class="content">
                          <span class="course-level">All Levels</span>
                          <h6 class="title">
                            <a href="https://demo.edublink.co/courses/educating-through-christ-to-learn-and-to-serve/">
                              Educating Through Christ to Learn And to Serve
                            </a>
                          </h6>

                          <div class="course-price">
                            <span class="course-item-price">
                              <span class="origin-price">&#036;39</span>
                              <span class="price">&#036;29</span>
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,
                            quis...
                          </p>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>7 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>96 Students
                            </li>
                          </ul>
                          <a
                            class="edu-btn btn-secondary btn-small"
                            href="https://demo.edublink.co/courses/educating-through-christ-to-learn-and-to-serve/"
                          >
                            Enroll Now<i class="icon-4"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footers />
      </body>
    </>
  );
};

export default CourseDetails;
