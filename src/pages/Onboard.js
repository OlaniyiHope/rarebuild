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
const Onboard = () => {
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
      const response = await fetch("http://localhost:8000/api/save-step", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPage: currentPage, // Use currentPage here
          formData: {
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
                <h1 class="entry-title">Finger Print Commission</h1>
              </div>
              <div class="edublink-breadcrumb-wrapper">
                <nav class="edublink-breadcrumb">
                  <ul class="breadcrumb">
                    <li>
                      <a href="https://demo.edublink.co/">Home</a>
                    </li>{" "}
                    <li>
                      <span class="active">Onboarding Registration</span>
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
                              <label htmlFor="tab-overview-input">Page 1</label>
                            </li>

                            {/* Work */}
                            <li
                              className={`course-nav course-nav-tab-curriculum ${
                                currentPage === 1 ? "active" : ""
                              }`}
                            >
                              <label htmlFor="tab-curriculum-input">
                                Page 2
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
                                                                              data-name="first-name-245"
                                                                            >
                                                                              <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Full Name*"
                                                                                type="text"
                                                                                name="first-name-245"
                                                                                value={
                                                                                  formData.fullname
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

                                                                      <div
                                                                        className="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                                        data-id="5a24098"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                      >
                                                                        <div className="elementor-widget-container">
                                                                          <select
                                                                            id="program-select"
                                                                            className="wpcf7-form-control wpcf7-select edublink-contact-form-field"
                                                                            style={{
                                                                              width:
                                                                                "100%",
                                                                              border:
                                                                                "none",
                                                                              borderBottom:
                                                                                "1px solid #e5e5e5",
                                                                            }}
                                                                            value={
                                                                              formData.program
                                                                            } // Controlled input tied to React state
                                                                            onChange={(
                                                                              e
                                                                            ) =>
                                                                              setFormData(
                                                                                {
                                                                                  ...formData,
                                                                                  program:
                                                                                    e
                                                                                      .target
                                                                                      .value, // Update selected program in state
                                                                                }
                                                                              )
                                                                            }
                                                                          >
                                                                            <option value="">
                                                                              --
                                                                              Select
                                                                              your
                                                                              Country
                                                                              --
                                                                            </option>
                                                                            <option value="lfp">
                                                                              Nigeria
                                                                            </option>
                                                                            <option value="hecp">
                                                                              Ghana
                                                                            </option>
                                                                            <option value="ysdp">
                                                                              South
                                                                              Africa
                                                                            </option>
                                                                            <option value="bwp">
                                                                              Togo
                                                                            </option>
                                                                          </select>
                                                                        </div>
                                                                      </div>
                                                                      <div
                                                                        className="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                                        data-id="5a24098"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                      >
                                                                        <div className="elementor-widget-container">
                                                                          <select
                                                                            id="program-select"
                                                                            className="wpcf7-form-control wpcf7-select edublink-contact-form-field"
                                                                            style={{
                                                                              width:
                                                                                "100%",
                                                                              border:
                                                                                "none",
                                                                              borderBottom:
                                                                                "1px solid #e5e5e5",
                                                                            }}
                                                                            value={
                                                                              formData.program
                                                                            } // Controlled input tied to React state
                                                                            onChange={(
                                                                              e
                                                                            ) =>
                                                                              setFormData(
                                                                                {
                                                                                  ...formData,
                                                                                  program:
                                                                                    e
                                                                                      .target
                                                                                      .value, // Update selected program in state
                                                                                }
                                                                              )
                                                                            }
                                                                          >
                                                                            <option value="">
                                                                              --
                                                                              Select
                                                                              your
                                                                              State
                                                                              --
                                                                            </option>
                                                                            <option value="lfp">
                                                                              Lagos
                                                                            </option>
                                                                            <option value="hecp">
                                                                              Kano
                                                                            </option>
                                                                            <option value="ysdp">
                                                                              Port
                                                                              Harcourt
                                                                            </option>
                                                                            <option value="bwp">
                                                                              Oyo
                                                                            </option>
                                                                          </select>
                                                                        </div>
                                                                      </div>
                                                                      <div
                                                                        className="elementor-element elementor-element-5a24098 elementor-widget elementor-widget-heading"
                                                                        data-id="5a24098"
                                                                        data-element_type="widget"
                                                                        data-widget_type="heading.default"
                                                                      >
                                                                        <div className="elementor-widget-container">
                                                                          <select
                                                                            id="program-select"
                                                                            className="wpcf7-form-control wpcf7-select edublink-contact-form-field"
                                                                            style={{
                                                                              width:
                                                                                "100%",
                                                                              border:
                                                                                "none",
                                                                              borderBottom:
                                                                                "1px solid #e5e5e5",
                                                                            }}
                                                                            value={
                                                                              formData.program
                                                                            } // Controlled input tied to React state
                                                                            onChange={(
                                                                              e
                                                                            ) =>
                                                                              setFormData(
                                                                                {
                                                                                  ...formData,
                                                                                  program:
                                                                                    e
                                                                                      .target
                                                                                      .value, // Update selected program in state
                                                                                }
                                                                              )
                                                                            }
                                                                          >
                                                                            <option value="">
                                                                              --
                                                                              Select
                                                                              your
                                                                              Domination
                                                                              --
                                                                            </option>
                                                                            <option value="lfp">
                                                                              Nigeria
                                                                            </option>
                                                                            <option value="hecp">
                                                                              Ghana
                                                                            </option>
                                                                            <option value="ysdp">
                                                                              South
                                                                              Africa
                                                                            </option>
                                                                            <option value="bwp">
                                                                              Togo
                                                                            </option>
                                                                          </select>
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
                                                                                placeholder="Position *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                          <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="attendance-response"
                                                                          >
                                                                            <p
                                                                              style={{
                                                                                fontSize:
                                                                                  "16px",
                                                                                fontWeight:
                                                                                  "400",
                                                                                marginTop:
                                                                                  "20px",
                                                                              }}
                                                                            >
                                                                              Where
                                                                              you
                                                                              Referred?
                                                                            </p>
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
                                                                                placeholder="If Yes, by who?"
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
                                  style={{
                                    backgroundColor: "#00a5f5",
                                    color: "white",
                                    padding: "12px",
                                  }}
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="General Background (Tell us about yourself, where you are and where you are going ) *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="Have you received a call from God to active service in his kingdom? *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="When and how did you receive the call? *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="Do you know enough what the call is about *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="What have you done thus far with the call of God upon your life? *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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
                                                                              data-name="surname-447"
                                                                            >
                                                                              <textarea
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required edublink-contact-form-field"
                                                                                aria-invalid="false"
                                                                                placeholder="What area do you believe you need to fulfil the call of God upon your life? *"
                                                                                type="text"
                                                                                name="surname-447"
                                                                                value={
                                                                                  formData.position
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

export default Onboard;
