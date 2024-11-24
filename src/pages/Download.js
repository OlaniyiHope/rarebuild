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
import Swipes from "./Swipes";
import DataTable from "./DataTable";
import ResourcesSwipe from "./ResourcesSwipe";

const Download = () => {
  return (
    <>
      <body class="archive tax-product_cat term-book term-63 wp-custom-logo wp-embed-responsive theme-edublink woocommerce woocommerce-page woocommerce-no-js theme-name-edublink-child group-blog hfeed edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18">
        <div
          id="content"
          class="site-content"
          style={{ marginBottom: "160px" }}
        >
          <div class="site-content-inner edublink-container">
            <div class="edublink-main-content-inner">
              <div id="primary" class="content-area">
                <main id="main" class="site-main" role="main">
                  <div class="woocommerce-notices-wrapper"></div>
                  {/*} <div
                    class="edublink-woocommerce-shop-top"
                    style={{ marginTop: "70px" }}
                  >
                    <div class="edublink-woocommerce-shop-top-count">
                      <p class="woocommerce-result-count">
                        Showing 1&ndash;12 of 20 results
                      </p>
                    </div>

                    <div class="edublink-woocommerce-shop-top-order">
                      <form class="woocommerce-ordering" method="get">
                        <select
                          name="orderby"
                          class="orderby"
                          aria-label="Shop order"
                        >
                          <option value="menu_order" selected="selected">
                            Default sorting
                          </option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by latest</option>
                          <option value="price">
                            Sort by price: low to high
                          </option>
                          <option value="price-desc">
                            Sort by price: high to low
                          </option>
                        </select>
                        <input type="hidden" name="paged" value="1" />
                      </form>
                    </div>
                  </div>
                  <div class="products edublink-archive-products edublink-row">
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15073 status-publish first instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s2})` }}
                            ></div>
                          </a>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15073"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexab7d.html?add-to-cart=15073"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15073"
                                    data-product_sku="Book-1"
                                    aria-label="Add &ldquo;Book Demo A&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo A
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: "80%" }}>
                                Rated <strong class="rating">4.00</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (4.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                49<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15086 status-publish instock product_cat-book product_tag-business-administration has-post-thumbnail featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s9})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15086"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexdf5b.html?add-to-cart=15086"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15086"
                                    data-product_sku="Book-2"
                                    aria-label="Add &ldquo;Book Demo B&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo B
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            (5.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                59<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15087 status-publish last instock product_cat-book product_tag-business-administration has-post-thumbnail sale featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s5})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                            <span class="eb-product-offer-percent">-29%</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a href="/resources-details">
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index4f5e.html?add-to-cart=15087"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15087"
                                    data-product_sku="Book-3"
                                    aria-label="Add &ldquo;Book Demo C&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo C
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.50 out of 5"
                            >
                              <span style={{ width: "90%" }}>
                                Rated <strong class="rating">4.50</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (4.50)
                          </div>
                          <span class="price">
                            <del aria-hidden="true">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  35<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </del>{" "}
                            <ins>
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  25<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15088 status-publish first instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s8})` }}
                            ></div>
                          </a>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15088"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexe939.html?add-to-cart=15088"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15088"
                                    data-product_sku="Book-4"
                                    aria-label="Add &ldquo;Book Demo D&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo D
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 3.00 out of 5"
                            >
                              <span style={{ width: "60%" }}>
                                Rated <strong class="rating">3.00</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (3.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                45<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15089 status-publish instock product_cat-book product_tag-business-administration has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s12})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-product-offer-percent">-14%</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15089"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexee33.html?add-to-cart=15089"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15089"
                                    data-product_sku="Book-5"
                                    aria-label="Add &ldquo;Book Demo E&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo E
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            (5.00)
                          </div>
                          <span class="price">
                            <del aria-hidden="true">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  70<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </del>{" "}
                            <ins>
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  60<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15090 status-publish last instock product_cat-book product_tag-business-administration has-post-thumbnail featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s11})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15090"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index585c.html?add-to-cart=15090"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15090"
                                    data-product_sku="Book-6"
                                    aria-label="Add &ldquo;Book Demo F&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo F
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: "80%" }}>
                                Rated <strong class="rating">4.00</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (4.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                19<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15091 status-publish first instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s10})` }}
                            ></div>
                          </a>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15091"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexe0a2.html?add-to-cart=15091"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15091"
                                    data-product_sku="Book-7"
                                    aria-label="Add &ldquo;Book Demo G&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo G
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            (5.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                69<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15092 status-publish instock product_cat-book product_tag-business-administration has-post-thumbnail sale featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s7})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                            <span class="eb-product-offer-percent">-17%</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15092"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index6d88.html?add-to-cart=15092"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15092"
                                    data-product_sku="Book-8"
                                    aria-label="Add &ldquo;Book Demo H&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo H
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 3.50 out of 5"
                            >
                              <span style={{ width: "70%" }}>
                                Rated <strong class="rating">3.50</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (3.50)
                          </div>
                          <span class="price">
                            <del aria-hidden="true">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  90<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </del>{" "}
                            <ins>
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  75<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15093 status-publish last instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s6})` }}
                            ></div>
                          </a>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15093"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index59f9.html?add-to-cart=15093"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15093"
                                    data-product_sku="Book-9"
                                    aria-label="Add &ldquo;Book Demo I&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo I
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.50 out of 5"
                            >
                              <span style={{ width: "90%" }}>
                                Rated <strong class="rating">4.50</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (4.50)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                25<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15095 status-publish first instock product_cat-book product_tag-business-administration has-post-thumbnail sale featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s4})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                            <span class="eb-product-offer-percent">-22%</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15095"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index90f1.html?add-to-cart=15095"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15095"
                                    data-product_sku="Book-10"
                                    aria-label="Add &ldquo;Book Demo J&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo J
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            (5.00)
                          </div>
                          <span class="price">
                            <del aria-hidden="true">
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  45<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </del>{" "}
                            <ins>
                              <span class="woocommerce-Price-amount amount">
                                <bdi>
                                  <span class="woocommerce-Price-currencySymbol">
                                    &#36;
                                  </span>
                                  35<span class="decimal-separator">.00</span>
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15096 status-publish instock product_cat-book product_tag-business-administration has-post-thumbnail shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s3})` }}
                            ></div>
                          </a>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15096"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="indexc36f.html?add-to-cart=15096"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15096"
                                    data-product_sku="Book-11"
                                    aria-label="Add &ldquo;Book Demo K&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo K
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: "80%" }}>
                                Rated <strong class="rating">4.00</strong> out
                                of 5 based on <span class="rating">2</span>{" "}
                                customer ratings
                              </span>
                            </div>
                            (4.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                65<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="edublink-single-product-item edublink-col-lg-3 edublink-col-md-4 edublink-col-sm-6 product type-product post-15098 status-publish last instock product_cat-book product_tag-business-administration has-post-thumbnail featured shipping-taxable purchasable product-type-simple">
                      <div class="edublink-single-product-inner">
                        <div class="edublink-single-product-thumb-wrapper">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <div
                              class="edublink-single-product-thumb"
                              style={{ backgroundImage: `url(${s1})` }}
                            ></div>
                          </a>
                          <div class="eb-product-image-top-content">
                            <span class="eb-featured-product-tag">Hot</span>
                          </div>
                          <div class="product-over-info">
                            <ul>
                              <li>
                                <a
                                  href="/resources-details"
                                  class="button yith-wcqv-button"
                                  data-product_id="15098"
                                >
                                  <span class="edublink-product-popup-icon">
                                    <i class="icon-2"></i>
                                  </span>
                                  <span class="edublink-product-popup-text">
                                    Quick View
                                  </span>
                                </a>
                              </li>
                              <li class="add-to-cart">
                                <span>
                                  <a
                                    href="index623f.html?add-to-cart=15098"
                                    data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="15098"
                                    data-product_sku="Book-12"
                                    aria-label="Add &ldquo;Book Demo L&rdquo; to your cart"
                                    aria-describedby=""
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="content">
                          <a
                            href="/resources-details"
                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            <h2 class="woocommerce-loop-product__title">
                              Book Demo L
                            </h2>
                          </a>
                          <div class="edublink-product-rating-wrapper">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5 based on <span class="rating">1</span>{" "}
                                customer rating
                              </span>
                            </div>
                            (5.00)
                          </div>
                          <span class="price">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                49<span class="decimal-separator">.00</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>*/}

                  <ResourcesSwipe />
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </body>
    </>
  );
};

export default Download;
