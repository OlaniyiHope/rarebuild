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
import NewsSwipe from "./NewsSwipe";
const Blog = () => {
  return (
    <>
      <body class="blog paged wp-custom-logo wp-embed-responsive paged-2 theme-edublink woocommerce-no-js theme-name-edublink-child group-blog hfeed edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18">
        <div
          id="content"
          class="site-content"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <div class="site-content-inner  edublink-container">
            <div class="edublink-main-content-inner edublink-row">
              <div id="primary" class="content-area edublink-col-lg-8">
                <main id="main" class="site-main">
                  {" "}
                  {/*} <div class="edublink-row edublink-blog-post-archive-style-1 eb-masonry-grid-wrapper">
                    <div
                      id="post-15429"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-15429 post type-post status-publish format-standard has-post-thumbnail hentry category-learning category-science tag-elearning tag-software"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="https://demo.edublink.co/connecting-the-dots-in-education-with-learning-nexus/">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/03/course-45-590x430.jpg"
                                alt="course-45"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Learning</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                Connecting the Dots in Education with Learning
                                Nexus
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>08 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="post-19306"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-19306 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="/single-blog">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/03/course-18-590x430.jpg"
                                alt="course-18"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Nutrition</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                Essential Kitchen Skills for Aspiring Chefs
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>07 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="post-19305"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-19305 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="/single-blog">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/03/course-19-590x430.jpg"
                                alt="course-19"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Nutrition</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                Your Passport to Home Cooking Mastery
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>07 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="post-19304"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-19304 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="https://demo.edublink.co/a-kitchen-training-blog-for-home-cooks/">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/03/course-17-590x430.jpg"
                                alt="course-17"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Nutrition</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                A Kitchen Training Blog for Home Cooks
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>07 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="post-15583"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-15583 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="/single-blog">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/11/course-91-590x430.jpg"
                                alt="course-91"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Nutrition</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                Discover the Power of Nutrient-Rich Foods
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>07 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="post-15577"
                      class="edublink-post-one-single-grid edublink-col-lg-6 eb-masonry-item edublink-col-md-6 edublink-col-sm-12 post-15577 post type-post status-publish format-standard has-post-thumbnail hentry category-nutrition category-science tag-child-education tag-elearning"
                      data-sal
                    >
                      <div class="edu-blog blog-style-1">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="/single-blog">
                              <img
                                src="https://demo.edublink.co/wp-content/uploads/2023/11/course-93-590x430.jpg"
                                alt="course-93"
                              />
                            </a>
                          </div>
                          <div class="content">
                            <div class="category-wrap">
                              <a href="/single-blog">Nutrition</a>
                            </div>
                            <h5 class="title">
                              <a href="/single-blog">
                                Boost Your Well-being Through Smart Food Choices
                              </a>
                            </h5>
                            <ul class="blog-meta">
                              <li>
                                <i class="icon-27"></i>07 Nov, 2023
                              </li>
                              <li>
                                <i class="icon-28"></i>Com 0
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit, sed do eiusmod
                              tempor inc idid unt...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               <nav class="edublink-pagination-wrapper">
                    <ul class="page-number">
                      <li>
                        <a
                          class="page-numbers"
                          href="../../index.html"
                          title="previous"
                        >
                          <span class="edublink-pagination-icon icon-west"></span>
                        </a>
                      </li>
                      <li>
                        <a class="page-numbers" href="../../index.html">
                          {" "}
                          1
                        </a>
                      </li>
                      <li class="active">
                        <span class="page-numbers current">2</span>
                      </li>
                      <li>
                        <a class="page-numbers" href="../3/index.html">
                          {" "}
                          3
                        </a>
                      </li>
                      <li>
                        <a class="page-numbers" href="../4/index.html">
                          {" "}
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          class="page-numbers"
                          href="../3/index.html"
                          title="next"
                        >
                          <span class="edublink-pagination-icon icon-east"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>*/}
                </main>
              </div>

              <NewsSwipe />
              {/*<aside
                id="secondary"
                class="widget-area eb-sidebar-widget edublink-col-lg-4"
              >
                <div class="widget-area-wrapper">
                  <section id="search-2" class="widget widget_search">
                    <h2 class="widget-title">Search</h2>
                    <div class="edublink-search-box">
                      <form
                        class="search-form"
                        action="https://demo.edublink.co/"
                        method="get"
                      >
                        <input
                          type="search"
                          value=""
                          required
                          name="s"
                          placeholder="Search"
                        />
                        <button type="submit" class="search-button">
                          <i class="icon-2"></i>
                        </button>
                      </form>
                    </div>
                  </section>

                  <section
                    id="edublinkcore_recent_posts_widget-3"
                    class="widget widget_edublinkcore_recent_posts_widget"
                  >
                    <h2 class="widget-title">Latest Post</h2>
                    <div class="widget-posts recent-post-widget edublink-recent-post-widget">
                      <div class="edublink-recent-post-each-item">
                        <div class="edublink-post-widget-thumb">
                          <a href="/single-blog">
                            <img
                              src="https://demo.edublink.co/wp-content/uploads/2023/11/course-79-300x200.jpg"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div class="media-body">
                          <h5 class="entry-title">
                            <a href="/single-blog">
                              Crafting Effective Learning Guide Line
                            </a>
                          </h5>
                          <div class="post-meta">
                            <span class="post-icon">
                              <i class="icon-27"></i>
                            </span>
                            <span class="post-meta-date"> 15 Nov, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div class="edublink-recent-post-each-item">
                        <div class="edublink-post-widget-thumb">
                          <a href="/single-blog">
                            <img
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-09-300x200.jpg"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div class="media-body">
                          <h5 class="entry-title">
                            <a href="/single-blog">
                              Exploring Learning Landscapes in Academic
                            </a>
                          </h5>
                          <div class="post-meta">
                            <span class="post-icon">
                              <i class="icon-27"></i>
                            </span>
                            <span class="post-meta-date"> 14 Nov, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div class="edublink-recent-post-each-item">
                        <div class="edublink-post-widget-thumb">
                          <a href="/single-blog">
                            <img
                              src="https://demo.edublink.co/wp-content/uploads/2023/03/course-07-300x200.jpg"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div class="media-body">
                          <h5 class="entry-title">
                            <a href="/single-blog">
                              Voices from the Learning Education Hub
                            </a>
                          </h5>
                          <div class="post-meta">
                            <span class="post-icon">
                              <i class="icon-27"></i>
                            </span>
                            <span class="post-meta-date"> 13 Nov, 2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="categories-2" class="widget widget_categories">
                    <h2 class="widget-title">Categories</h2>
                    <ul>
                      <li class="cat-item cat-item-72">
                        <a href="/single-blog">Child Development</a> (2)
                      </li>
                      <li class="cat-item cat-item-77">
                        <a href="/single-blog">Computer Engineering</a> (3)
                      </li>
                      <li class="cat-item cat-item-70">
                        <a href="/single-blog">Learning</a> (11)
                      </li>
                      <li class="cat-item cat-item-80">
                        <a href="/single-blog">Nutrition</a> (11)
                      </li>
                      <li class="cat-item cat-item-66">
                        <a href="/single-blog">Science</a> (15)
                      </li>
                      <li class="cat-item cat-item-67">
                        <a href="/single-blog">Technology</a> (6)
                      </li>
                      <li class="cat-item cat-item-76">
                        <a href="/single-blog">Web Development</a> (4)
                      </li>
                    </ul>
                  </section>

                  <section id="media_image-4" class="widget widget_media_image">
                    <img
                      width="290"
                      height="370"
                      src="https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad.png"
                      class="image wp-image-17506  attachment-full size-full"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                      decoding="async"
                      srcset="https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad.png 290w, https://demo.edublink.co/wp-content/uploads/2023/11/sidebar-ad-235x300.png 235w"
                      sizes="(max-width: 290px) 100vw, 290px"
                    />
                  </section>
                  <section id="tag_cloud-2" class="widget widget_tag_cloud">
                    <h2 class="widget-title">Tags</h2>
                    <div class="tagcloud">
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-74 tag-link-position-1"
                        style={{ fontSize: "17.333333333333pt" }}
                        aria-label="Child Education (9 items)"
                      >
                        Child Education
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-75 tag-link-position-2"
                        style={{ fontSize: "8pt" }}
                        aria-label="Classroom (3 items)"
                      >
                        Classroom
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-68 tag-link-position-3"
                        style={{ fontSize: "18.266666666667pt" }}
                        aria-label="Design (10 items)"
                      >
                        Design
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-69 tag-link-position-4"
                        style={{ fontSize: "17.333333333333pt" }}
                        aria-label="Development (9 items)"
                      >
                        Development
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-78 tag-link-position-5"
                        style={{ fontSize: "22pt" }}
                        aria-label="eLearning (15 items)"
                      >
                        eLearning
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-73 tag-link-position-6"
                        style={{ fontSize: "13.833333333333pt" }}
                        aria-label="Future (6 items)"
                      >
                        Future
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-71 tag-link-position-7"
                        style={{ fontSize: "15pt" }}
                        aria-label="Higher Study (7 items)"
                      >
                        Higher Study
                      </a>
                      <a
                        href="/single-blog"
                        class="tag-cloud-link tag-link-79 tag-link-position-8"
                        style={{ fontSize: "12.2pt" }}
                        aria-label="Software (5 items)"
                      >
                        Software
                      </a>
                    </div>
                  </section>
                </div>
              </aside>*/}
            </div>
          </div>
        </div>
        <Footers />
      </body>
    </>
  );
};

export default Blog;
