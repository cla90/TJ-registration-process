import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const RegistrationScreen = () => {
  return (
    <div className="registration-screen">
      <div className="registration-2">
        <div className="content">
          <div className="text-2">
            <h1 className="text-wrapper-9">Validate Phone Number</h1>
            <p className="text-wrapper-10">We have sent an OTP to your phone number</p>
          </div>
          <div className="form-3">
            <Form className="form-4" state="filled" text="1" type="code" />
            <Form className="form-4" state="filled" text="2" type="code" />
            <Form className="form-4" state="filled" text="3" type="code" />
            <Form className="form-4" state="filled" text="4" type="code" />
          </div>
          <ButtonPrimary className="button-primary-5" text="Verify" to="/registration-7" />
          <div className="frame-5">
            <div className="text-wrapper-11">Did not get OTP?</div>
            <div className="frame-6">
              <div className="text-wrapper-12">Resend</div>
              <div className="text-wrapper-13">or</div>
              <div className="text-wrapper-12">Change number</div>
            </div>
          </div>
        </div>
        <Navbar
          className="navbar-3"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="#2E3032"
          logoLogoClassNameOverride="navbar-2"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
