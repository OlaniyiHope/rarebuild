import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./examtwo.png";
import b1 from "./b2.png";
import photo from "./build.png";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
import Header from "./Header";
import Team from "./Team";
import Builder from "./Builder";
import Carousel from "./Carousel";
import Footers from "./Footers";
import HomeBanner from "./HomeBanner";
import Homer from "./Homer";
import Homes from "./Homes";
import img from "./build.png";
const Home = () => {
  return (
    <>
      <body class="home page-template-default page page-id-13480 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-disable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-13480">
        <div id="page" class="site">
          <a class="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>

          <div id="content" class="site-content">
            <div class="site-content-inner edublink-page-container edublink-container">
              <div class="edublink-main-content-inner edublink-row">
                <div id="primary" class="content-area edublink-col-lg-12">
                  <main id="main" class="site-main">
                    <article
                      id="post-13480"
                      class="edublink-single-page post-13480 page type-page status-publish hentry"
                    >
                      <div class="entry-content">
                        <div
                          data-elementor-type="wp-page"
                          data-elementor-id="13480"
                          class="elementor elementor-13480"
                          style={{
                            backgroundImage: `url(${img})`, // Use the imported image here
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <Homes />
                          <HomeBanner />
                          <Homer />
                        </div>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <Footers />
        </div>
      </body>
    </>
  );
};

export default Home;
