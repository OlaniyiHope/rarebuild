import React, { useEffect, useState } from "react";

const Login = () => {
  return (
    <>
      <body class="home page-template-default page page-id-13480 wp-custom-logo wp-embed-responsive theme-edublink woocommerce-no-js edublink-page-content edublink-page-breadcrumb-disable edublink-page-boxed edublink-page-sidebar-disable theme-name-edublink-child group-blog edublink-sticky-header-enable woocommerce woocommerce-active elementor-default elementor-kit-18 elementor-page elementor-page-13480">
        <div class="content-wrap">
          <div className="edublink-login-form-item register-form" id="tab2">
            <div className="edublink-register-box-text">
              <h3 className="sign-up-heading">Sign up</h3>
              <div className="edublink-login-text">
                <span className="note-for-account-user">
                  Already have an account?
                </span>
                <span id="edublink-login-form-trigger"> Sign in</span>
              </div>
            </div>
            <form
              action="https://demo.edublink.co/wp-login.php?action=register"
              className="edublink-register-form-container"
              method="post"
            >
              <div className="edublink-login-item">
                <input
                  type="text"
                  name="user_login"
                  id="reg_username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="edublink-login-item">
                <input
                  type="email"
                  name="user_email"
                  id="reg_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="edublink-login-item">
                <input
                  type="password"
                  name="user_pass"
                  id="reg_password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="edublink-login-register-button button-register">
                <div className="edublink-login-register-wrapper">
                  <input
                    type="submit"
                    value="Sign up"
                    className="edublink-submit-button register"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
