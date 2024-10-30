import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import s1 from "./image/1.jpg";
import s2 from "./image/2.jpg";
import s3 from "./image/3.jpg";
import s4 from "./image/4.jpg";
import s5 from "./image/5.jpg";

import s6 from "./image/6.jpg";
import s7 from "./image/7.jpg";
import s8 from "./image/8.jpg";
import s9 from "./image/9.jpg";
import s10 from "./image/10.jpg";
import s11 from "./image/11.jpg";
import s12 from "./image/12.jpg";

import "./style.css";
import Footer from "./Footer";
import Footers from "./Footers";

const BookDetails = () => {
  return (
    <>
      <body class="product-template-default single single-product postid-15073 wp-custom-logo wp-embed-responsive theme-edublink woocommerce woocommerce-page woocommerce-no-js theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18">
        <div class="edublink-page-title-area edublink-default-breadcrumb ">
          <div class="edublink-container">
            <div class="edublink-page-title">
              <h1 class="entry-title">Book Demo A</h1>
            </div>
            <div class="edublink-breadcrumb-wrapper">
              <nav class="edublink-breadcrumb">
                <ul class="breadcrumb">
                  <li>
                    <a href="../../index.html">Home</a>{" "}
                  </li>{" "}
                  <li>
                    <a href="../index.html">Product</a>
                  </li>
                  <li>
                    <span class="active">Book Demo A</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="content" class="site-content" style={{ marginTop: "60px" }}>
          <div
            id="primary"
            class="content-area edublink-main-content-inner edublink-container"
          >
            <main id="main" class="site-main" role="main">
              <div class="woocommerce-notices-wrapper"></div>
              <div
                id="product-15073"
                class="product type-product post-15073 status-publish first instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple"
              >
                <div class="edublink-single-product-main-content-wrapper">
                  <div
                    class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                    data-columns="4"
                    style={{
                      opacity: "0",
                      transition: "opacity .25s ease-in-out",
                    }}
                  >
                    <figure class="woocommerce-product-gallery__wrapper">
                      <div
                        data-thumb="https://demo.edublink.co/wp-content/uploads/2023/11/2-100x100.jpg"
                        data-thumb-alt=""
                        class="woocommerce-product-gallery__image"
                      >
                        <a href="../../wp-content/uploads/2023/11/2.jpg">
                          <img
                            width="520"
                            height="770"
                            src="../../wp-content/uploads/2023/11/2.jpg"
                            class="wp-post-image"
                            alt=""
                            title="2"
                            data-caption=""
                            data-src="https://demo.edublink.co/wp-content/uploads/2023/11/2.jpg"
                            data-large_image="https://demo.edublink.co/wp-content/uploads/2023/11/2.jpg"
                            data-large_image_width="520"
                            data-large_image_height="770"
                            decoding="async"
                            srcset="https://demo.edublink.co/wp-content/uploads/2023/11/2.jpg 520w, https://demo.edublink.co/wp-content/uploads/2023/11/2-203x300.jpg 203w"
                            sizes="(max-width: 520px) 100vw, 520px"
                          />
                        </a>
                      </div>{" "}
                    </figure>
                  </div>

                  <div class="summary entry-summary">
                    <h1 class="product_title entry-title">Book Demo A</h1>
                    <div class="woocommerce-product-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 4.00 out of 5"
                      >
                        <span style={{ width: "80%" }}>
                          Rated <strong class="rating">4.00</strong> out of 5
                          based on <span class="rating">2</span> customer
                          ratings
                        </span>
                      </div>{" "}
                      <a
                        href="#reviews"
                        class="woocommerce-review-link"
                        rel="nofollow"
                      >
                        (<span class="count">2</span> customer reviews)
                      </a>
                    </div>

                    <p class="price">
                      <span class="woocommerce-Price-amount amount">
                        <bdi>
                          <span class="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          49<span class="decimal-separator">.00</span>
                        </bdi>
                      </span>
                    </p>
                    <div class="woocommerce-product-details__short-description">
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin vel
                        sed aliquet iaculis urna. Lacinia tellus maecenas odio
                        accumsan duis nunc non facilisis. Eu eget ultricies
                        volutpat consequat. Accumsan congue feugiat nibh purus
                        magna metus porttitor egestas aliquam. Aenean urna quam
                        diam turpis et nibh. Nulla eget cras sit hendrerit
                        habitasse fermentum egestas egestas. Cursus sociis duis
                        diam curabitur lacus.
                      </p>
                    </div>

                    <form
                      class="cart"
                      action="https://demo.edublink.co/product/book-demo-a/"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <div class="quantity">
                        <label
                          class="screen-reader-text"
                          for="quantity_670b2b3cb72ec"
                        >
                          Book Demo A quantity
                        </label>
                        <input
                          type="number"
                          id="quantity_670b2b3cb72ec"
                          class="input-text qty text"
                          name="quantity"
                          value="1"
                          aria-label="Product quantity"
                          size="4"
                          min="1"
                          max=""
                          step="1"
                          placeholder=""
                          inputmode="numeric"
                          autocomplete="off"
                        />
                      </div>

                      <button
                        type="submit"
                        name="add-to-cart"
                        value="15073"
                        class="single_add_to_cart_button button alt"
                      >
                        Add to cart
                      </button>
                    </form>

                    <div class="product_meta">
                      <span class="sku_wrapper">
                        SKU: <span class="sku">Book-1</span>
                      </span>

                      <span class="posted_in">
                        <label>Category:</label>{" "}
                        <a
                          href="../../product-category/book/index.html"
                          rel="tag"
                        >
                          Book
                        </a>
                      </span>
                      <span class="tagged_as">
                        <label>Tag:</label>{" "}
                        <a
                          href="../../product-tag/business-administration/index.html"
                          rel="tag"
                        >
                          Business Administration
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="woocommerce-tabs wc-tabs-wrapper">
                  <ul class="tabs wc-tabs" role="tablist">
                    <li
                      class="description_tab"
                      id="tab-title-description"
                      role="tab"
                      aria-controls="tab-description"
                    >
                      <a href="#tab-description">Description </a>
                    </li>
                    <li
                      class="reviews_tab"
                      id="tab-title-reviews"
                      role="tab"
                      aria-controls="tab-reviews"
                    >
                      <a href="#tab-reviews">Reviews (2) </a>
                    </li>
                  </ul>
                  <div
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                    id="tab-description"
                    role="tabpanel"
                    aria-labelledby="tab-title-description"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum
                      dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore dolore.
                    </p>
                  </div>
                  <div
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                    id="tab-reviews"
                    role="tabpanel"
                    aria-labelledby="tab-title-reviews"
                  >
                    <div id="reviews" class="woocommerce-Reviews">
                      <div id="comments">
                        <h2 class="woocommerce-Reviews-title">
                          2 reviews for <span>Book Demo A</span>{" "}
                        </h2>

                        <ol class="commentlist">
                          <li
                            class="review byuser comment-author-steve even thread-even depth-1"
                            id="li-comment-106"
                          >
                            <div id="comment-106" class="comment_container">
                              <div class="edublink-woo-review the-comment">
                                <div class="avatar">
                                  <img
                                    width="80"
                                    height="80"
                                    src="../../wp-content/uploads/2023/06/team-04-96x96.webp"
                                    class="avatar avatar-80 photo"
                                    alt=""
                                    decoding="async"
                                    srcset="https://demo.edublink.co/wp-content/uploads/2023/06/team-04-96x96.webp 96w, https://demo.edublink.co/wp-content/uploads/2023/06/team-04-100x100.webp 100w, https://demo.edublink.co/wp-content/uploads/2023/06/team-04-150x150.webp 150w, https://demo.edublink.co/wp-content/uploads/2023/06/team-04-24x24.webp 24w, https://demo.edublink.co/wp-content/uploads/2023/06/team-04-48x48.webp 48w"
                                    sizes="(max-width: 80px) 100vw, 80px"
                                  />{" "}
                                </div>

                                <div class="comment-box">
                                  <div class="edublink-woo-review-info">
                                    <div class="reviewer-name-date">
                                      <h3 class="name-comment">Steve Martin</h3>
                                      <div class="date">
                                        <time
                                          itemprop="datePublished"
                                          datetime="2023-11-13T13:03:57+00:00"
                                        >
                                          November 13, 2023
                                        </time>
                                      </div>
                                    </div>

                                    <div
                                      itemprop="reviewRating"
                                      itemscope
                                      itemtype="http://schema.org/Rating"
                                      class="star-rating ms-auto"
                                      title="Rated 5 out of 5"
                                    >
                                      <span style={{ width: "100%" }}>
                                        <strong itemprop="ratingValue">
                                          5
                                        </strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>

                                  <div
                                    itemprop="description"
                                    class="comment-text"
                                  >
                                    <p>
                                      Excepteur sint occaecat cupidatat non
                                      proident sunt in culpa qui officia
                                      deserunt mollit anim est laborum. Sed
                                      perspiciatis unde omnis natus error sit
                                      voluptatem accusa dolore mque laudant
                                      totam rem aperiam eaque ipsa quae ab illo
                                      inventore veritatis et quasi arch tecto
                                      beatae vitae dicta.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            class="review odd alt thread-odd thread-alt depth-1"
                            id="li-comment-126"
                          >
                            <div id="comment-126" class="comment_container">
                              <div class="edublink-woo-review the-comment">
                                <div class="avatar">
                                  <img
                                    alt=""
                                    src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g"
                                    srcset="https://secure.gravatar.com/avatar/?s=160&#038;d=mm&#038;r=g 2x"
                                    class="avatar avatar-80 photo avatar-default"
                                    height="80"
                                    width="80"
                                    decoding="async"
                                  />{" "}
                                </div>

                                <div class="comment-box">
                                  <div class="edublink-woo-review-info">
                                    <div class="reviewer-name-date">
                                      <h3 class="name-comment">Hilary Swank</h3>
                                      <div class="date">
                                        <time
                                          itemprop="datePublished"
                                          datetime="2023-11-13T13:08:05+00:00"
                                        >
                                          November 13, 2023
                                        </time>
                                      </div>
                                    </div>

                                    <div
                                      itemprop="reviewRating"
                                      itemscope
                                      itemtype="http://schema.org/Rating"
                                      class="star-rating ms-auto"
                                      title="Rated 3 out of 5"
                                    >
                                      <span style={{ width: "60%" }}>
                                        <strong itemprop="ratingValue">
                                          3
                                        </strong>{" "}
                                        out of 5
                                      </span>
                                    </div>
                                  </div>

                                  <div
                                    itemprop="description"
                                    class="comment-text"
                                  >
                                    <p>
                                      Excepteur sint occaecat cupidatat non
                                      proident sunt in culpa qui officia
                                      deserunt mollit anim est laborum. Sed
                                      perspiciatis unde omnis natus error sit
                                      voluptatem accusa dolore mque laudant
                                      totam rem aperiam eaque ipsa quae ab illo
                                      inventore veritatis et quasi arch tecto
                                      beatae vitae dicta.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>

                      <div id="review_form_wrapper">
                        <div id="review_form">
                          <div id="respond" class="comment-respond">
                            <h3 id="reply-title" class="comment-reply-title">
                              Add A Review{" "}
                              <small>
                                <a
                                  rel="nofollow"
                                  id="cancel-comment-reply-link"
                                  href="index.html#respond"
                                  style={{ display: "none" }}
                                >
                                  Cancel reply
                                </a>
                              </small>
                            </h3>
                            <form
                              action="https://demo.edublink.co/wp-comments-post.php"
                              method="post"
                              id="commentform"
                              class="edublink-woo-comment-form"
                              novalidate
                            >
                              <p class="eb-custom-rating-form">
                                <label for="rating">Your Rating</label>
                                <select name="rating" id="rating">
                                  <option value="">Rate&hellip;</option>
                                  <option value="5">Perfect</option>
                                  <option value="4">Good</option>
                                  <option value="3">Average</option>
                                  <option value="2">Not that bad</option>
                                  <option value="1">Very Poor</option>
                                </select>
                              </p>
                              <div class="edublink-row">
                                <div class="edublink-col-md-6">
                                  <div class="comment-form-author form-group">
                                    <label>Name</label>
                                    <input
                                      id="author"
                                      name="author"
                                      class="form-control"
                                      placeholder="Your Name"
                                      type="text"
                                      value=""
                                      size="30"
                                      aria-required="true"
                                    />
                                  </div>
                                </div>
                                <div class="edublink-col-md-6">
                                  <div class="comment-form-email form-group">
                                    <label>Email</label>
                                    <input
                                      id="email"
                                      name="email"
                                      class="form-control"
                                      placeholder="Your Email"
                                      type="text"
                                      value=""
                                      size="30"
                                      aria-required="true"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group space-comment">
                                <label>Review</label>
                                <textarea
                                  class="form-control"
                                  id="comment"
                                  name="comment"
                                  cols="45"
                                  rows="8"
                                  placeholder="Your Review"
                                  aria-required="true"
                                ></textarea>
                              </div>
                              <p class="form-submit">
                                <button
                                  name="submit"
                                  type="submit"
                                  id="submit"
                                  class="eb-woo-product-review-submit edublink-button-item edublink-button-type-fill submit"
                                  value="Submit Review"
                                >
                                  Submit Review
                                </button>{" "}
                                <input
                                  type="hidden"
                                  name="comment_post_ID"
                                  value="15073"
                                  id="comment_post_ID"
                                />
                                <input
                                  type="hidden"
                                  name="comment_parent"
                                  id="comment_parent"
                                  value="0"
                                />
                              </p>
                            </form>{" "}
                          </div>
                        </div>
                      </div>

                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <Footers />
      </body>
    </>
  );
};

export default BookDetails;
