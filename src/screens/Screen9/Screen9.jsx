import React from "react";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/ButtonOutline";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonPtimary } from "../../components/ButtonPtimary";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="registration-5">
        <Link className="frame-14" to="/registration-3">
          <h1 className="text-wrapper-34">Sign Up</h1>
          <div className="input-form-5">
            <Form
              className="form-14"
              href="mailto:exapmle@e-mail.com"
              state="filled"
              text2="exapmle@e-mail.com"
              type="textfiled"
            />
            <div className="text-input-5">
              <Form className="form-15" state="filled" type="password" />
              <p className="text-wrapper-35">Maximum of 6 characters with numbers</p>
            </div>
            <div className="text-input-5">
              <Form className="form-15" state="filled" type="password" />
              <p className="text-wrapper-36">Maximum of 6 characters with numbers</p>
            </div>
            <ButtonPrimary className="button-primary-11" text="Register" />
            <ButtonOutline className="button-outline-instance" />
            <div className="text-input-6">
              <div className="text-wrapper-37">Already have an account?</div>
              <ButtonPtimary className="button-ptimary-2" text="Login" to="/login" />
            </div>
          </div>
        </Link>
        <Navbar
          className="navbar-10"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="#2E3032"
          logoLogoClassNameOverride="navbar-11"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
