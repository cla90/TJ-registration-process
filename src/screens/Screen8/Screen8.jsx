import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="registration-4">
        <Link className="frame-11" to="/registration-6">
          <div className="text-4">
            <h1 className="text-wrapper-29">Validate Phone Number</h1>
            <p className="text-wrapper-30">We have sent an OTP to your phone number</p>
          </div>
          <div className="content-3">
            <div className="form-12">
              <Form className="form-13" state="default" text="0" type="code" />
              <Form className="form-13" state="default" text="0" type="code" />
              <Form className="form-13" state="default" text="0" type="code" />
              <Form className="form-13" state="default" text="0" type="code" />
            </div>
            <ButtonPrimary className="button-primary-10" text="Verify" />
            <div className="frame-12">
              <div className="text-wrapper-31">Did not get OTP?</div>
              <div className="frame-13">
                <div className="text-wrapper-32">Resend</div>
                <div className="text-wrapper-33">or</div>
                <div className="text-wrapper-32">Change number</div>
              </div>
            </div>
          </div>
        </Link>
        <Navbar
          className="navbar-8"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="black"
          logoLogoClassNameOverride="navbar-9"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
