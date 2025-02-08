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
const Register = () => {
  const [formData, setFormData] = useState({
    generalInfo: "",
    work: "",
    skills: "",
    problems: "",
    value: "",
    plan: "",
    admin: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleNext = () => {
  //   console.log("Current Page Before:", currentPage); // Log current page
  //   setCurrentPage(currentPage + 1);
  //   console.log("Current Page After:", currentPage + 1); // Log updated page
  //   // Save form data to the backend here if saving page by page
  // };

  const handleNext = async () => {
    // Save data before moving to the next step
    await handleNextStep();

    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextStep = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/save-step", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPage: currentPage, // Use currentPage here
          formData: {
            program: formData.program,
            email: formData.email,
            phone: formData.phone,
            firstName: formData.firstName,
            surName: formData.surName,
            address: formData.address,
            expectations: formData.expectations,
            occupation: formData.occupation,
            attendanceResponse: formData.attendanceResponse,
            typicalDay: formData.typicalDay,

            //next step
            doing: formData.doing,
            anyway: formData.anyway,
            howgood: formData.howgood,
            interested: formData.interested,

            //next step
            skilling: formData.skilling,
            earn: formData.earn,
            like: formData.like,
            confidence: formData.confidence,
            think: formData.think,
            currently: formData.currently,

            //next step
            solver: formData.solver,
            mind: formData.mind,
            wish: formData.wish,
            personal: formData.personal,
            problemtwo: formData.problemtwo,

            //next step

            creating: formData.creating,
            serving: formData.serving,
            need: formData.need,
            happen: formData.happen,
            manage: formData.manage,

            //next step
            future: formData.future,
            durate: formData.durate,
            follow: formData.follow,
            theresource: formData.theresource,

            //next step
            oath: formData.oath,
            // Include other fields based on the current step
          },
        }),
      });

      const result = await response.json();
      console.log(result); // Handle success or error as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <body class="page-template-default page page-id-17213 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-enable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-17213">
        <div id="page" class="site">
          <div class="edublink-page-title-area edublink-default-breadcrumb ">
            <div class="edublink-container">
              <div class="edublink-page-title">
                <h1 class="entry-title">Application Form</h1>
              </div>
              <div class="edublink-breadcrumb-wrapper">
                <nav class="edublink-breadcrumb">
                  <ul class="breadcrumb">
                    <li>
                      <a href="https://demo.edublink.co/">Home</a>
                    </li>{" "}
                    <li>
                      <span class="active">Apply here</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div
            id="content"
            class="site-content"
            style={{ marginTop: "60px", marginBottom: "60px" }}
          >
            <div class="edublink-course-details-page lp-course-single-page eb-course-single-style-1">
              <div class="edublink-container">
                <div class="edublink-row">
                  <div
                    id="learn-press-course"
                    class="course-summary edublink-col-lg-12"
                  >
                    <div class="eb-course-details-page-content ">
                      <div class="course-content course-summary-content ">
                        <div id="learn-press-course-tabs" class="course-tabs ">
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-overview-input"
                            checked={currentPage === 0} // Bind checked to the current page
                            onChange={() => setCurrentPage(0)} // Update state when changed
                            value="overview"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-curriculum-input"
                            checked={currentPage === 1}
                            onChange={() => setCurrentPage(1)}
                            value="curriculum"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-instructor-input"
                            checked={currentPage === 2}
                            onChange={() => setCurrentPage(2)}
                            value="instructor"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-reviews-input"
                            checked={currentPage === 3}
                            onChange={() => setCurrentPage(3)}
                            value="reviews"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-newvalue-input"
                            checked={currentPage === 4}
                            onChange={() => setCurrentPage(4)}
                            value="newvalue"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-plan-input"
                            checked={currentPage === 5}
                            onChange={() => setCurrentPage(5)}
                            value="plan"
                          />
                          <input
                            type="radio"
                            name="learn-press-course-tab-radio"
                            id="tab-admin-input"
                            checked={currentPage === 6}
                            onChange={() => setCurrentPage(6)}
                            value="admin"
                          />

                          <ul
                            className="learn-press-nav-tabs course-nav-tabs"
                            data-tabs="4"
                          >
                            {/* General Info */}
                            <li
                              className={`course-nav course-nav-tab-overview ${
                                currentPage === 0 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-overview-input">
                                General Info
                              </label>
                            </li>

                            {/* Work */}
                            <li
                              className={`course-nav course-nav-tab-curriculum ${
                                currentPage === 1 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-curriculum-input">Work</label>
                            </li>

                            {/* Skills */}
                            <li
                              className={`course-nav course-nav-tab-instructor ${
                                currentPage === 2 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-instructor-input">
                                Skills
                              </label>
                            </li>

                            {/* Problems */}
                            <li
                              className={`course-nav course-nav-tab-reviews ${
                                currentPage === 3 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-reviews-input">
                                Problems
                              </label>
                            </li>

                            {/* Value */}
                            <li
                              className={`course-nav course-nav-tab-newvalue ${
                                currentPage === 4 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-newvalue-input">Value</label>
                            </li>

                            {/* Future Plan */}
                            <li
                              className={`course-nav course-nav-tab-plan ${
                                currentPage === 5 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-plan-input">
                                Future Plan
                              </label>
                            </li>

                            {/* Administration */}
                            <li
                              className={`course-nav course-nav-tab-admin ${
                                currentPage === 6 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-admin-input">
                                Administration
                              </label>
                            </li>
                          </ul>

                          <div class="course-tab-panels wid">
                            {currentPage === 0 && (
                              <div
                                class="course-tab-panel-overview course-tab-panel"
                                id="tab-overview"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="course-description"
                                  id="learn-press-course-description"
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-3e24b46 elementor-widget elementor-widget-text-editor"
                                                            data-id="3e24b46"
                                                            data-element_type="widget"
                                                            data-widget_type="text-editor.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5>
                                                                Personal
                                                                Assessment Form
                                                              </h5>{" "}
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div className="elementor-widget-container">
                                                              <label
                                                                htmlFor="program-select"
                                                                style={{
                                                                  fontWeight:
                                                                    "bold",
                                                                  marginBottom:
                                                                    "8px",
                                                                  display:
                                                                    "block",
                                                                }}
                                                              >
                                                                Select a
                                                                Program:
                                                              </label>
                                                              <select
                                                                id="program-select"
                                                                className="wpcf7-form-control wpcf7-select edublink-contact-form-field"
                                                                style={{
                                                                  width: "100%",
                                                                  border:
                                                                    "none",
                                                                  borderBottom:
                                                                    "1px solid #e5e5e5",
                                                                }}
                                                                value={
                                                                  formData.program
                                                                } // Controlled input tied to React state
                                                                onChange={(e) =>
                                                                  setFormData({
                                                                    ...formData,
                                                                    program:
                                                                      e.target
                                                                        .value, // Update selected program in state
                                                                  })
                                                                }
                                                              >
                                                                <option
                                                                  value=""
                                                                  disabled
                                                                >
                                                                  -- Choose a
                                                                  Program --
                                                                </option>
                                                                <option value="Lebana Foundation Program">
                                                                  Lebana
                                                                  Foundation
                                                                  Life Program
                                                                  (LFP)
                                                                </option>
                                                                <option value="Higher Education Completion Program">
                                                                  Higher
                                                                  Education
                                                                  Completion
                                                                  Program (HECP)
                                                                </option>
                                                                <option value="Youth Skill Development Program">
                                                                  Youth Skill
                                                                  Development
                                                                  Program (YSDP)
                                                                </option>
                                                                <option value="Basic Wellness Program">
                                                                  Basic Wellness
                                                                  Program (BWP)
                                                                </option>
                                                              </select>
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                            data-id="43b0ae4"
                                                            data-element_type="widget"
                                                            data-widget_type="edublink-contact-form-seven.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <div class="edublink-contact-form-wrapper">
                                                                <div
                                                                  class="wpcf7 no-js"
                                                                  id="wpcf7-f17264-p17213-o1"
                                                                  lang="en-US"
                                                                  dir="ltr"
                                                                >
                                                                  <div class="screen-reader-response">
                                                                    <p
                                                                      role="status"
                                                                      aria-live="polite"
                                                                      aria-atomic="true"
                                                                    ></p>{" "}
                                                                    <ul></ul>
                                                                  </div>
                                                                  <form
                                                                    action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                    method="post"
                                                                    class="wpcf7-form init"
                                                                    aria-label="Contact form"
                                                                    novalidate="novalidate"
                                                                    data-status="init"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                      }}
                                                                    >
                                                                      <input
                                                                        name="_wpcf7"
                                                                        value="17264"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.8.3"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f17264-p17213-o1"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="17213"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                      />
                                                                    </div>
                                                                    <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                      <div class="edublink-contact-form-single-item">
                                                                        <div class="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              class="wpcf7-form-control-wrap"
                                                                              data-name="email-349"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter your email *"
                                                                                value={
                                                                                  formData.email
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      email:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                }
                                                                                type="email"
                                                                                name="email-349"
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="phone-349"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-phone wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-phone edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Enter your Phone Number *"
                                                                                type="tel" // Use "tel" for phone number input
                                                                                name="phone-349"
                                                                                value={
                                                                                  formData.phone
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      phone:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Updates the phone field in state
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="first-name-245"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="First Name *"
                                                                                type="text"
                                                                                name="first-name-245"
                                                                                value={
                                                                                  formData.firstName
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      firstName:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Updates the firstName field in state
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="surname-447"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="Surname *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.surName
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      surName:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Updates the surname field in state
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="address-447"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="Address (City, State and Country) *"
                                                                                type="text"
                                                                                name="address-447"
                                                                                value={
                                                                                  formData.address
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      address:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Updates the address field in state
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="expectations-447"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="What are your expectations from Foundation Life Program *"
                                                                                type="text"
                                                                                name="expectations-447"
                                                                                value={
                                                                                  formData.expectations
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      expectations:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Updates the expectations field in state
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="attendance-response"
                                                                          >
                                                                            <h1
                                                                              style={{
                                                                                fontSize:
                                                                                  "16px",
                                                                                fontWeight:
                                                                                  "400",
                                                                                marginTop:
                                                                                  "20px",
                                                                              }}
                                                                            >
                                                                              Are
                                                                              you
                                                                              attending
                                                                              with
                                                                              someone
                                                                              (colleague,
                                                                              family,
                                                                              spouse,
                                                                              friends,
                                                                              etc.)?
                                                                            </h1>
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0",
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="attendanceResponse" // Updated name for the group
                                                                                  value="yes"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.attendanceResponse ===
                                                                                    "yes"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        attendanceResponse:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Yes
                                                                              </label>

                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0",
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="attendanceResponse" // Updated name for the group
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.attendanceResponse ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        attendanceResponse:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="occupation"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="What do you do for a living?"
                                                                                value={
                                                                                  formData.occupation
                                                                                } // Controlled input
                                                                                type="text"
                                                                                name="occupation" // Updated name for clarity
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      occupation:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Update state on change
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="typicalDay"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="Briefly describe what your typical day looks like; weekdays and weekend"
                                                                                value={
                                                                                  formData.typicalDay
                                                                                } // Controlled input
                                                                                type="text"
                                                                                name="typicalDay" // Updated name for clarity
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      typicalDay:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                } // Update state on change
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="wpcf7-response-output"
                                                                      aria-hidden="true"
                                                                    ></div>
                                                                  </form>
                                                                </div>
                                                              </div>{" "}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
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
                                </div>

                                <button
                                  onClick={handleNext}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Next
                                </button>
                              </div>
                            )}

                            {currentPage === 1 && (
                              <div
                                class="course-tab-panel-curriculum course-tab-panel"
                                id="tab-curriculum"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="learnpress-course-curriculum"
                                  data-section=""
                                  data-id=""
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5 class="elementor-heading-title elementor-size-default">
                                                                Work
                                                              </h5>{" "}
                                                            </div>
                                                          </div>
                                                          <div
                                                            class="elementor-element elementor-element-3e24b46 elementor-widget elementor-widget-text-editor"
                                                            data-id="3e24b46"
                                                            data-element_type="widget"
                                                            data-widget_type="text-editor.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <p>
                                                                What you do to
                                                                generate income
                                                                - a business, a
                                                                paid employment,
                                                                an internship,
                                                                etc.
                                                              </p>{" "}
                                                            </div>
                                                          </div>
                                                          <div
                                                            class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                            data-id="43b0ae4"
                                                            data-element_type="widget"
                                                            data-widget_type="edublink-contact-form-seven.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <div class="edublink-contact-form-wrapper">
                                                                <div
                                                                  class="wpcf7 no-js"
                                                                  id="wpcf7-f17264-p17213-o1"
                                                                  lang="en-US"
                                                                  dir="ltr"
                                                                >
                                                                  <div class="screen-reader-response">
                                                                    <p
                                                                      role="status"
                                                                      aria-live="polite"
                                                                      aria-atomic="true"
                                                                    ></p>{" "}
                                                                    <ul></ul>
                                                                  </div>
                                                                  <form
                                                                    action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                    method="post"
                                                                    class="wpcf7-form init"
                                                                    aria-label="Contact form"
                                                                    novalidate="novalidate"
                                                                    data-status="init"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                      }}
                                                                    >
                                                                      <input
                                                                        name="_wpcf7"
                                                                        value="17264"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.8.3"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f17264-p17213-o1"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="17213"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                      />
                                                                    </div>
                                                                    <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Do
                                                                              you
                                                                              have
                                                                              something
                                                                              you
                                                                              like
                                                                              doing?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0",
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="doing"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.doing ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          doing:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="doing"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.doing ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          attendanceResponse:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="doing"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.doing ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          doing:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                  yet
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="doing"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.doing ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          doing:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              If
                                                                              yes
                                                                              are
                                                                              you
                                                                              doing
                                                                              it
                                                                              already?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="anyway"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.anyway ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          anyway:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="anyway"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.anyway ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          anyway:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="anyway"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.anyway ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          anyway:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="anyway"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.anyway ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          anyway:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              How
                                                                              good
                                                                              are
                                                                              you
                                                                              with
                                                                              what
                                                                              you
                                                                              do?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="howgood"
                                                                                    value="excellent"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.howgood ===
                                                                                      "excellent"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          howgood:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Excellent
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="howgood"
                                                                                    value="verygood"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.howgood ===
                                                                                      "verygood"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          howgood:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Very
                                                                                  Good
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="howgood"
                                                                                    value="good"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.howgood ===
                                                                                      "good"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          howgood:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Good
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="howgood"
                                                                                    value="beginner"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.howgood ===
                                                                                      "beginner"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          howgood:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Beginner
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="howgood"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.howgood ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          howgood:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>

                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Are
                                                                              you
                                                                              intereste
                                                                              in
                                                                              doing
                                                                              this
                                                                              for
                                                                              a
                                                                              long
                                                                              time
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="interested"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.interested ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          interested:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="interested"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.interested ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          interested:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="interested"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.interested ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          interested:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="interested"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.interested ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          interested:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="wpcf7-response-output"
                                                                      aria-hidden="true"
                                                                    ></div>
                                                                  </form>
                                                                </div>
                                                              </div>{" "}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
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
                                </div>
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}

                            {currentPage === 2 && (
                              <div
                                class="course-tab-panel-instructor course-tab-panel"
                                id="tab-instructor"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div class="site-content-inner edublink-page-container edublink-container">
                                  <div class="edublink-main-content-inner edublink-row">
                                    <div
                                      id="primary"
                                      class="content-area edublink-col-lg-12"
                                    >
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
                                              <section
                                                class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="7ed12df"
                                                data-element_type="section"
                                              >
                                                <div class="elementor-container elementor-column-gap-extended">
                                                  <div
                                                    class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                    data-id="88dca94"
                                                    data-element_type="column"
                                                    data-settings='{"background_background":"classic"}'
                                                  >
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                        data-id="3a53f08"
                                                        data-element_type="widget"
                                                        data-settings='{"_position":"absolute"}'
                                                        data-widget_type="edublink-animation.default"
                                                      ></div>
                                                      <div
                                                        class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                        data-id="1a61784"
                                                        data-element_type="widget"
                                                        data-settings='{"_position":"absolute"}'
                                                        data-widget_type="edublink-animation.default"
                                                      ></div>
                                                      <div
                                                        class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                        data-id="5690efc"
                                                        data-element_type="container"
                                                        data-settings='{"content_width":"full"}'
                                                        style={{
                                                          backgroundColor:
                                                            "white",

                                                          borderRadius: "10px",
                                                        }}
                                                      >
                                                        <div
                                                          class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                          data-id="5a24098"
                                                          data-element_type="widget"
                                                          data-widget_type="heading.default"
                                                        >
                                                          <div class="elementor-widget-container">
                                                            <h5 class="elementor-heading-title elementor-size-default">
                                                              Skills
                                                            </h5>{" "}
                                                          </div>
                                                        </div>
                                                        <div
                                                          class="elementor-element elementor-element-3e24b46 elementor-widget elementor-widget-text-editor"
                                                          data-id="3e24b46"
                                                          data-element_type="widget"
                                                          data-widget_type="text-editor.default"
                                                        >
                                                          <div class="elementor-widget-container">
                                                            <p>
                                                              Abilities or
                                                              talents that are
                                                              unique to you,
                                                              through which you
                                                              contribute to life
                                                              in a productive
                                                              way. Examples are
                                                              cooking, writing,
                                                              talking, tech,
                                                              singing,
                                                              organizing, etc.
                                                              Whatever you do
                                                              well enough.
                                                            </p>{" "}
                                                          </div>
                                                        </div>
                                                        <div
                                                          class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                          data-id="43b0ae4"
                                                          data-element_type="widget"
                                                          data-widget_type="edublink-contact-form-seven.default"
                                                        >
                                                          <div class="elementor-widget-container">
                                                            <div class="edublink-contact-form-wrapper">
                                                              <div
                                                                class="wpcf7 no-js"
                                                                id="wpcf7-f17264-p17213-o1"
                                                                lang="en-US"
                                                                dir="ltr"
                                                              >
                                                                <div class="screen-reader-response">
                                                                  <p
                                                                    role="status"
                                                                    aria-live="polite"
                                                                    aria-atomic="true"
                                                                  ></p>{" "}
                                                                  <ul></ul>
                                                                </div>
                                                                <form
                                                                  action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                  method="post"
                                                                  class="wpcf7-form init"
                                                                  aria-label="Contact form"
                                                                  novalidate="novalidate"
                                                                  data-status="init"
                                                                >
                                                                  <div
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <input
                                                                      name="_wpcf7"
                                                                      value="17264"
                                                                    />
                                                                    <input
                                                                      type="hidden"
                                                                      name="_wpcf7_version"
                                                                      value="5.8.3"
                                                                    />
                                                                    <input
                                                                      type="hidden"
                                                                      name="_wpcf7_locale"
                                                                      value="en_US"
                                                                    />
                                                                    <input
                                                                      type="hidden"
                                                                      name="_wpcf7_unit_tag"
                                                                      value="wpcf7-f17264-p17213-o1"
                                                                    />
                                                                    <input
                                                                      type="hidden"
                                                                      name="_wpcf7_container_post"
                                                                      value="17213"
                                                                    />
                                                                    <input
                                                                      type="hidden"
                                                                      name="_wpcf7_posted_data_hash"
                                                                      value=""
                                                                    />
                                                                  </div>
                                                                  <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            How
                                                                            many
                                                                            skills
                                                                            do
                                                                            you
                                                                            have?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="skilling"
                                                                                  value="three"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.skilling ===
                                                                                    "three"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        skilling:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                3
                                                                                or
                                                                                more
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="skilling"
                                                                                  value="two"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.skilling ===
                                                                                    "two"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        skilling:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                2
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="skilling"
                                                                                  value="one"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.skilling ===
                                                                                    "one"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        skilling:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                1
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="skilling"
                                                                                  value="idk"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.skilling ===
                                                                                    "idk"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        skilling:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                I
                                                                                dont
                                                                                know
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="skilling"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.skilling ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        skilling:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            Do
                                                                            you
                                                                            think
                                                                            the
                                                                            skill
                                                                            can
                                                                            earn
                                                                            you
                                                                            a
                                                                            decent
                                                                            living?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="earn"
                                                                                  value="yes"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.earn ===
                                                                                    "yes"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        earn: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Yes
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="earn"
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.earn ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        earn: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="earn"
                                                                                  value="maybe"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.earn ===
                                                                                    "maybe"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        earn: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Maybe
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="earn"
                                                                                  value="idk"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.earn ===
                                                                                    "idk"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        earn: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                I
                                                                                dont
                                                                                know
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="earn"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.earn ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        earn: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            Do
                                                                            you
                                                                            like
                                                                            the
                                                                            skill(s)
                                                                            you
                                                                            have?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="like"
                                                                                  value="yes"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.like ===
                                                                                    "yes"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        like: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Yes
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="like"
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.like ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        like: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="like"
                                                                                  value="maybe"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.like ===
                                                                                    "maybe"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        like: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Maybe
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="like"
                                                                                  value="idk"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.like ===
                                                                                    "idk"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        like: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                I
                                                                                dont
                                                                                know
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="like"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.like ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        like: e
                                                                                          .target
                                                                                          .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            How
                                                                            confidence
                                                                            are
                                                                            you
                                                                            about
                                                                            your
                                                                            skill?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="confidence"
                                                                                  value="high"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.confidence ===
                                                                                    "high"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        confidence:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                High
                                                                                Confidence
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="confidence"
                                                                                  value="average"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.confidence ===
                                                                                    "average"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        confidence:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Average
                                                                                confidence
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="confidence"
                                                                                  value="low"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.confidence ===
                                                                                    "low"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        confidence:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Low
                                                                                confidence
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="confidence"
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.confidence ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        confidence:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                                confidence
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="confidence"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.confidence ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        confidence:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            Do
                                                                            you
                                                                            think
                                                                            you
                                                                            need
                                                                            to
                                                                            acquire
                                                                            more
                                                                            skill?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="think"
                                                                                  value="yes"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.think ===
                                                                                    "yes"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        think:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Yes
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="think"
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.think ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        think:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="think"
                                                                                  value="maybe"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.think ===
                                                                                    "maybe"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        think:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Maybe
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="think"
                                                                                  value="idk"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.think ===
                                                                                    "idk"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        think:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />

                                                                                I
                                                                                dont
                                                                                know
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="think"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.think ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        think:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                    <div className="edublink-contact-form-single-item">
                                                                      <div className="edublink-contact-form-single-item-content">
                                                                        <p>
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="text-245"
                                                                          >
                                                                            Are
                                                                            you
                                                                            currently
                                                                            using
                                                                            the
                                                                            skills?
                                                                            <div
                                                                              className="radio-group"
                                                                              style={{
                                                                                display:
                                                                                  "flex",
                                                                                flexDirection:
                                                                                  "column",
                                                                                gap: "5px", // Reduced gap between the labels
                                                                              }}
                                                                            >
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="currently"
                                                                                  value="yes"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.currently ===
                                                                                    "yes"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        currently:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Yes
                                                                              </label>
                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="currently"
                                                                                  value="no"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.currently ===
                                                                                    "no"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        currently:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                No
                                                                              </label>

                                                                              <label
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  alignItems:
                                                                                    "center",
                                                                                  marginBottom:
                                                                                    "0", // Remove extra space below each label
                                                                                  gap: "8px",
                                                                                }}
                                                                              >
                                                                                <input
                                                                                  type="radio"
                                                                                  name="currently"
                                                                                  value="other"
                                                                                  className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                  style={{
                                                                                    width:
                                                                                      "auto",
                                                                                  }}
                                                                                  checked={
                                                                                    formData.currently ===
                                                                                    "other"
                                                                                  } // Controlled input
                                                                                  onChange={(
                                                                                    e
                                                                                  ) =>
                                                                                    setFormData(
                                                                                      {
                                                                                        ...formData,
                                                                                        currently:
                                                                                          e
                                                                                            .target
                                                                                            .value,
                                                                                      }
                                                                                    )
                                                                                  } // Update state on change
                                                                                />
                                                                                Other
                                                                              </label>
                                                                            </div>
                                                                          </span>
                                                                        </p>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    class="wpcf7-response-output"
                                                                    aria-hidden="true"
                                                                  ></div>
                                                                </form>
                                                              </div>
                                                            </div>{" "}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
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
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}

                            {currentPage === 3 && (
                              <div
                                class="course-tab-panel-reviews course-tab-panel"
                                id="tab-reviews"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="learnpress-course-review"
                                  data-id="12798"
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5 class="elementor-heading-title elementor-size-default">
                                                                Problems
                                                              </h5>{" "}
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                            data-id="43b0ae4"
                                                            data-element_type="widget"
                                                            data-widget_type="edublink-contact-form-seven.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <div class="edublink-contact-form-wrapper">
                                                                <div
                                                                  class="wpcf7 no-js"
                                                                  id="wpcf7-f17264-p17213-o1"
                                                                  lang="en-US"
                                                                  dir="ltr"
                                                                >
                                                                  <div class="screen-reader-response">
                                                                    <p
                                                                      role="status"
                                                                      aria-live="polite"
                                                                      aria-atomic="true"
                                                                    ></p>{" "}
                                                                    <ul></ul>
                                                                  </div>
                                                                  <form
                                                                    action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                    method="post"
                                                                    class="wpcf7-form init"
                                                                    aria-label="Contact form"
                                                                    novalidate="novalidate"
                                                                    data-status="init"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                      }}
                                                                    >
                                                                      <input
                                                                        name="_wpcf7"
                                                                        value="17264"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.8.3"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f17264-p17213-o1"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="17213"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                      />
                                                                    </div>
                                                                    <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              DO
                                                                              you
                                                                              see
                                                                              yourself
                                                                              as
                                                                              a
                                                                              problem
                                                                              solver?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="solver"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.solver ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          solver:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="solver"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.solver ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          solver:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="solver"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.solver ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          solver:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="solver"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.solver ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          solver:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="solver"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.solver ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          solver:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              What
                                                                              comes
                                                                              to
                                                                              your
                                                                              mind
                                                                              when
                                                                              you
                                                                              encounter
                                                                              problems
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="mind"
                                                                                    value="cause"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.mind ===
                                                                                      "cause"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          mind: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  What
                                                                                  is
                                                                                  the
                                                                                  cause?
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="mind"
                                                                                    value="solution"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.mind ===
                                                                                      "solution"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          mind: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Who
                                                                                  has
                                                                                  the
                                                                                  solution?
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="mind"
                                                                                    value="alternative"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.mind ===
                                                                                      "alternative"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          mind: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  What
                                                                                  is
                                                                                  the
                                                                                  alternative?
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="mind"
                                                                                    value="walk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.mind ===
                                                                                      "walk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          mind: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  need
                                                                                  to
                                                                                  walk
                                                                                  away!
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="mind"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.mind ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          mind: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Is
                                                                              there
                                                                              any
                                                                              problem
                                                                              you
                                                                              really
                                                                              wish
                                                                              you
                                                                              could
                                                                              solve?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="wish"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.wish ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          wish: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="wish"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.wish ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          wish: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="wish"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.wish ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          wish: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="wish"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.wish ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          wish: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="wish"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.wish ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          wish: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div class="edublink-contact-form-single-item">
                                                                        <div class="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              class="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="If yes, what is the problem?"
                                                                                type="text"
                                                                                name="whatproblem"
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Are
                                                                              there
                                                                              personal
                                                                              problems
                                                                              you
                                                                              wish
                                                                              to
                                                                              solve?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="personal"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.personal ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          personal:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="personal"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.personal ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          personal:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="personal"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.personal ===
                                                                                      "amybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          personal:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="personal"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.personal ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          personal:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="personal"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.personal ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          personal:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div class="edublink-contact-form-single-item">
                                                                        <div class="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              class="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="If yes, what is the problem?"
                                                                                value={
                                                                                  formData.problemtwo
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      problemtwo:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                }
                                                                                type="text"
                                                                                name="text-245"
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="wpcf7-response-output"
                                                                      aria-hidden="true"
                                                                    ></div>
                                                                  </form>
                                                                </div>
                                                              </div>{" "}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
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
                                </div>
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}

                            {currentPage === 4 && (
                              <div
                                class="course-tab-panel-newvalue course-tab-panel"
                                id="tab-newvalue"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="learnpress-course-review"
                                  data-id="12798"
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5 class="elementor-heading-title elementor-size-default">
                                                                Vaule
                                                              </h5>{" "}
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                            data-id="43b0ae4"
                                                            data-element_type="widget"
                                                            data-widget_type="edublink-contact-form-seven.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <div class="edublink-contact-form-wrapper">
                                                                <div
                                                                  class="wpcf7 no-js"
                                                                  id="wpcf7-f17264-p17213-o1"
                                                                  lang="en-US"
                                                                  dir="ltr"
                                                                >
                                                                  <div class="screen-reader-response">
                                                                    <p
                                                                      role="status"
                                                                      aria-live="polite"
                                                                      aria-atomic="true"
                                                                    ></p>{" "}
                                                                    <ul></ul>
                                                                  </div>
                                                                  <form
                                                                    action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                    method="post"
                                                                    class="wpcf7-form init"
                                                                    aria-label="Contact form"
                                                                    novalidate="novalidate"
                                                                    data-status="init"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                      }}
                                                                    >
                                                                      <input
                                                                        name="_wpcf7"
                                                                        value="17264"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.8.3"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f17264-p17213-o1"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="17213"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                      />
                                                                    </div>
                                                                    <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Are
                                                                              you
                                                                              interested
                                                                              in
                                                                              creating
                                                                              a
                                                                              product?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="creating"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.creating ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          creating:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="creating"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.creating ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          creating:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="creating"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.creating ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          creating:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="creating"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.creating ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          creating:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="creating"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.creating ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          creating:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Are
                                                                              you
                                                                              interested
                                                                              in
                                                                              serving
                                                                              others?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="serving"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.serving ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          serving:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="serving"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.serving ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          serving:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="serving"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.serving ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          serving:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="serving"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.serving ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          serving:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="serving"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.serving ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          serving:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Do
                                                                              you
                                                                              have
                                                                              anything
                                                                              people
                                                                              are
                                                                              really
                                                                              in
                                                                              neeed
                                                                              of?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="need"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.need ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          need: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="need"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.need ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          need: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="need"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.need ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          need: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="need"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.need ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          need: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="need"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.need ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          need: e
                                                                                            .target
                                                                                            .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              If
                                                                              yes
                                                                              what
                                                                              are
                                                                              you
                                                                              doing
                                                                              to
                                                                              make
                                                                              it
                                                                              happen?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="happen"
                                                                                    value="offer"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.happen ===
                                                                                      "offer"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          happen:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  am
                                                                                  already
                                                                                  offering
                                                                                  it
                                                                                  to
                                                                                  them
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="happen"
                                                                                    value="process"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.happen ===
                                                                                      "process"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          happen:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  am
                                                                                  in
                                                                                  the
                                                                                  process
                                                                                  of
                                                                                  making
                                                                                  it
                                                                                  available
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="happen"
                                                                                    value="think"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.happen ===
                                                                                      "think"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          happen:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  am
                                                                                  still
                                                                                  thinking
                                                                                  about
                                                                                  it
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="happen"
                                                                                    value="notdone"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.happen ===
                                                                                      "notdone"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          happen:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  have
                                                                                  not
                                                                                  done
                                                                                  anything
                                                                                  yet
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="happen"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.happen ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          happen:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Would
                                                                              you
                                                                              be
                                                                              interested
                                                                              in
                                                                              managing
                                                                              what
                                                                              other
                                                                              persons
                                                                              have
                                                                              built?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="manage"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.manage ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          manage:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="manage"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.manage ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          manage:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="manage"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.manage ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          manage:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="manage"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.manage ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          manage:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="manage"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.manage ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          manage:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="wpcf7-response-output"
                                                                      aria-hidden="true"
                                                                    ></div>
                                                                  </form>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>{" "}
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
                                </div>
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}
                            {currentPage === 5 && (
                              <div
                                class="course-tab-panel-plan course-tab-panel"
                                id="tab-plan"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="learnpress-course-review"
                                  data-id="12798"
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5
                                                                class="elementor-heading-title elementor-size-default"
                                                                style={{
                                                                  marginBottom:
                                                                    "20px",
                                                                }}
                                                              >
                                                                Future Plan
                                                              </h5>{" "}
                                                            </div>
                                                          </div>

                                                          <div
                                                            class="elementor-element elementor-element-43b0ae4 elementor-widget elementor-widget-edublink-contact-form-seven"
                                                            data-id="43b0ae4"
                                                            data-element_type="widget"
                                                            data-widget_type="edublink-contact-form-seven.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <div class="edublink-contact-form-wrapper">
                                                                <div
                                                                  class="wpcf7 no-js"
                                                                  id="wpcf7-f17264-p17213-o1"
                                                                  lang="en-US"
                                                                  dir="ltr"
                                                                >
                                                                  <div class="screen-reader-response">
                                                                    <p
                                                                      role="status"
                                                                      aria-live="polite"
                                                                      aria-atomic="true"
                                                                    ></p>{" "}
                                                                    <ul></ul>
                                                                  </div>
                                                                  <form
                                                                    action="https://demo.edublink.co/contact-us/#wpcf7-f17264-p17213-o1"
                                                                    method="post"
                                                                    class="wpcf7-form init"
                                                                    aria-label="Contact form"
                                                                    novalidate="novalidate"
                                                                    data-status="init"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "none",
                                                                      }}
                                                                    >
                                                                      <input
                                                                        name="_wpcf7"
                                                                        value="17264"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.8.3"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f17264-p17213-o1"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="17213"
                                                                      />
                                                                      <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                      />
                                                                    </div>
                                                                    <div class="edublink-contact-form-wrapper eb-contact-us-form">
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Do
                                                                              you
                                                                              think
                                                                              having
                                                                              future
                                                                              plans
                                                                              is
                                                                              good
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="future"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.future ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          future:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="future"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.future ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          future:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="future"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.future ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          future:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="future"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.future ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          future:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="future"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.future ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          future:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              If
                                                                              yes,
                                                                              what
                                                                              is
                                                                              the
                                                                              duration
                                                                              of
                                                                              your
                                                                              future
                                                                              plan?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="ten"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "ten"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  10
                                                                                  years
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="five"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "five"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  5
                                                                                  years
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="three"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "three"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  3
                                                                                  years
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="one"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "one"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  1
                                                                                  year
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="zero"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "zero"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  0
                                                                                  year
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="durate"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.durate ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          durate:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Are
                                                                              you
                                                                              currently
                                                                              following
                                                                              that
                                                                              plan?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="follow"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.follow ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          follow:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="follow"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.follow ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          follow:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="follow"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.follow ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          follow:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="follow"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.follow ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          follow:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="follow"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.follow ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          follow:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div class="edublink-contact-form-single-item">
                                                                        <div class="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              class="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="If not what is the reason?"
                                                                                value={
                                                                                  formData.reason
                                                                                } // Controlled input tied to React state
                                                                                onChange={(
                                                                                  e
                                                                                ) =>
                                                                                  setFormData(
                                                                                    {
                                                                                      ...formData,
                                                                                      reason:
                                                                                        e
                                                                                          .target
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                }
                                                                                type="text"
                                                                                name="text-245"
                                                                              />
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                      <div className="edublink-contact-form-single-item">
                                                                        <div className="edublink-contact-form-single-item-content">
                                                                          <p>
                                                                            <span
                                                                              className="wpcf7-form-control-wrap"
                                                                              data-name="text-245"
                                                                            >
                                                                              Do
                                                                              you
                                                                              have
                                                                              the
                                                                              resources
                                                                              you
                                                                              need
                                                                              to
                                                                              follow
                                                                              the
                                                                              plan?
                                                                              <div
                                                                                className="radio-group"
                                                                                style={{
                                                                                  display:
                                                                                    "flex",
                                                                                  flexDirection:
                                                                                    "column",
                                                                                  gap: "5px", // Reduced gap between the labels
                                                                                }}
                                                                              >
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="theresource"
                                                                                    value="yes"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.theresource ===
                                                                                      "yes"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          theresource:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Yes
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="theresource"
                                                                                    value="no"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.theresource ===
                                                                                      "no"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          theresource:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  No
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="theresource"
                                                                                    value="maybe"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.theresource ===
                                                                                      "maybe"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          theresource:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Maybe
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="theresource"
                                                                                    value="idk"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.theresource ===
                                                                                      "idk"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          theresource:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />

                                                                                  I
                                                                                  dont
                                                                                  know
                                                                                </label>
                                                                                <label
                                                                                  style={{
                                                                                    display:
                                                                                      "flex",
                                                                                    alignItems:
                                                                                      "center",
                                                                                    marginBottom:
                                                                                      "0", // Remove extra space below each label
                                                                                    gap: "8px",
                                                                                  }}
                                                                                >
                                                                                  <input
                                                                                    type="radio"
                                                                                    name="theresource"
                                                                                    value="other"
                                                                                    className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                                    style={{
                                                                                      width:
                                                                                        "auto",
                                                                                    }}
                                                                                    checked={
                                                                                      formData.theresource ===
                                                                                      "other"
                                                                                    } // Controlled input
                                                                                    onChange={(
                                                                                      e
                                                                                    ) =>
                                                                                      setFormData(
                                                                                        {
                                                                                          ...formData,
                                                                                          theresource:
                                                                                            e
                                                                                              .target
                                                                                              .value,
                                                                                        }
                                                                                      )
                                                                                    } // Update state on change
                                                                                  />
                                                                                  Other
                                                                                </label>
                                                                              </div>
                                                                            </span>
                                                                          </p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="wpcf7-response-output"
                                                                      aria-hidden="true"
                                                                    ></div>
                                                                  </form>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>{" "}
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
                                </div>
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}

                            {currentPage === 6 && (
                              <div
                                class="course-tab-panel-admin course-tab-panel"
                                id="tab-admin"
                                style={{
                                  display: "block",
                                  color: "black",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  class="learnpress-course-review"
                                  data-id="12798"
                                >
                                  <div class="site-content-inner edublink-page-container edublink-container">
                                    <div class="edublink-main-content-inner edublink-row">
                                      <div
                                        id="primary"
                                        class="content-area edublink-col-lg-12"
                                      >
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
                                                <section
                                                  class="elementor-section elementor-top-section elementor-element elementor-element-7ed12df elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                  data-id="7ed12df"
                                                  data-element_type="section"
                                                >
                                                  <div class="elementor-container elementor-column-gap-extended">
                                                    <div
                                                      class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88dca94"
                                                      data-id="88dca94"
                                                      data-element_type="column"
                                                      data-settings='{"background_background":"classic"}'
                                                    >
                                                      <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                          class="elementor-element elementor-element-3a53f08 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="3a53f08"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-1a61784 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation"
                                                          data-id="1a61784"
                                                          data-element_type="widget"
                                                          data-settings='{"_position":"absolute"}'
                                                          data-widget_type="edublink-animation.default"
                                                        ></div>
                                                        <div
                                                          class="elementor-element elementor-element-5690efc e-con-full e-flex e-con e-child"
                                                          data-id="5690efc"
                                                          data-element_type="container"
                                                          data-settings='{"content_width":"full"}'
                                                          style={{
                                                            backgroundColor:
                                                              "white",

                                                            borderRadius:
                                                              "10px",
                                                          }}
                                                        >
                                                          <div
                                                            class="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                            data-id="5a24098"
                                                            data-element_type="widget"
                                                            data-widget_type="heading.default"
                                                          >
                                                            <div class="elementor-widget-container">
                                                              <h5 class="elementor-heading-title elementor-size-default">
                                                                Administration
                                                              </h5>{" "}
                                                              <p>
                                                                1. Tuition for
                                                                Foundational
                                                                Life
                                                                Program(FLP) is
                                                                FREE! it is a
                                                                fully-funded
                                                                program for now{" "}
                                                              </p>
                                                              <p>
                                                                2. Enrolment fee
                                                                is NGN10,000 per
                                                                person.
                                                              </p>
                                                              <p>
                                                                3. You will be
                                                                required to sign
                                                                an undertaking
                                                                with us to
                                                                freely teach
                                                                others what you
                                                                have been freely
                                                                taught.
                                                              </p>
                                                              <p>
                                                                4. Other useful
                                                                Academy
                                                                resources
                                                                (Books,
                                                                Handbooks, Case
                                                                Studies and
                                                                Exercises) are
                                                                also available
                                                                for purchase at
                                                                affordable and
                                                                discounted
                                                                rates.
                                                              </p>
                                                              <p>
                                                                5. Refreshments
                                                                are available on
                                                                site, at your
                                                                cost, for ONSITE
                                                                participants.
                                                              </p>
                                                              <p>
                                                                I therefore
                                                                undertake to be
                                                                responsible for
                                                                teaching other
                                                                people the
                                                                content of this
                                                                program, as I
                                                                have been freely
                                                                taught, within
                                                                Lebana Academy's
                                                                structure. In
                                                                doing this, I
                                                                affirm my
                                                                commitment to
                                                                growing the
                                                                spread of
                                                                life-giving
                                                                knowledge to
                                                                other people, so
                                                                that we can all
                                                                grow together in
                                                                community.
                                                              </p>
                                                              <div className="edublink-contact-form-single-item">
                                                                <div className="edublink-contact-form-single-item-content">
                                                                  <span
                                                                    className="wpcf7-form-control-wrap"
                                                                    data-name="text-447"
                                                                  >
                                                                    <div
                                                                      className="radio-group"
                                                                      style={{
                                                                        display:
                                                                          "flex",
                                                                        flexDirection:
                                                                          "column",
                                                                        // Reduced gap between the labels
                                                                      }}
                                                                    >
                                                                      <label
                                                                        style={{
                                                                          display:
                                                                            "flex",
                                                                          alignItems:
                                                                            "center",
                                                                          marginBottom:
                                                                            "0", // Remove extra space below each label
                                                                          gap: "8px",
                                                                        }}
                                                                      >
                                                                        <input
                                                                          type="radio"
                                                                          name="oath"
                                                                          value="yes"
                                                                          className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                          style={{
                                                                            width:
                                                                              "auto",
                                                                          }}
                                                                          checked={
                                                                            formData.oath ===
                                                                            "yes"
                                                                          } // Controlled input
                                                                          onChange={(
                                                                            e
                                                                          ) =>
                                                                            setFormData(
                                                                              {
                                                                                ...formData,
                                                                                oath: e
                                                                                  .target
                                                                                  .value,
                                                                              }
                                                                            )
                                                                          } // Update state on change
                                                                        />
                                                                        Yes
                                                                      </label>

                                                                      <label
                                                                        style={{
                                                                          display:
                                                                            "flex",
                                                                          alignItems:
                                                                            "center",
                                                                          marginBottom:
                                                                            "0", // Remove extra space below each label
                                                                          gap: "8px",
                                                                        }}
                                                                      >
                                                                        <input
                                                                          type="radio"
                                                                          name="oath"
                                                                          value="no"
                                                                          className="wpcf7-form-control wpcf7-radio edublink-contact-form-field"
                                                                          style={{
                                                                            width:
                                                                              "auto",
                                                                          }}
                                                                          checked={
                                                                            formData.oath ===
                                                                            "no"
                                                                          } // Controlled input
                                                                          onChange={(
                                                                            e
                                                                          ) =>
                                                                            setFormData(
                                                                              {
                                                                                ...formData,
                                                                                oath: e
                                                                                  .target
                                                                                  .value,
                                                                              }
                                                                            )
                                                                          } // Update state on change
                                                                        />
                                                                        No
                                                                      </label>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <p>
                                                                Write your full
                                                                name as your
                                                                signature and
                                                                append the
                                                                current date to
                                                                it.
                                                              </p>
                                                              <p>For example</p>
                                                              <p>
                                                                <strong>
                                                                  JOHN DOE
                                                                </strong>
                                                                . March 14, 2023
                                                              </p>
                                                              <input
                                                                size="40"
                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                placeholder="Your answer"
                                                                value={
                                                                  formData.answer
                                                                } // Controlled input tied to React state
                                                                onChange={(e) =>
                                                                  setFormData({
                                                                    ...formData,
                                                                    answer:
                                                                      e.target
                                                                        .value,
                                                                  })
                                                                }
                                                                type="text"
                                                                name="text-245"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>{" "}
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
                                </div>
                                <button
                                  onClick={handlePrevious}
                                  style={{ marginLeft: "55px" }}
                                >
                                  Previous
                                </button>
                                <button onClick={handleNext}>Next</button>
                              </div>
                            )}
                          </div>
                        </div>
                        {/*}    <div class="edublink-contact-form-single-item eb-contact-button">
                          <div class="elementor-container elementor-column-gap-extended">
                            <div class="eb-contact-button-wrapper elementor-column elemmentor-col-50">
                              <p>
                                <input
                                  class="wpcf7-form-control wpcf7-submit has-spinner edublink-button-with-icon"
                                  type="submit"
                                  value="Next"
                                />
                              </p>
                            </div>
                          </div>
                        </div>*/}
                        <div
                          id="comments"
                          class="comments-area edublink-comments-area"
                        ></div>
                      </div>
                    </div>
                  </div>
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

export default Register;
