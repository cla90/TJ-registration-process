import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import "./style.css";

export const ForgotPasswordScreen = () => {
  return (
    <div className="forgot-password-screen">
      <div className="forgot-password-2">
        <div className="frame-9">
          <div className="text-3">
            <h1 className="text-wrapper-21">Forgot Password</h1>
            <p className="text-wrapper-22">Enter your registered email below to receive password reset instruction.</p>
          </div>
          <div className="content-2">
            <Form className="form-8" href="mailto:exapmle@e-mail.com" state="filled" type="textfiled" />
            <ButtonPrimary className="button-primary-8" text="Send" to="/forgot-password-3" />
          </div>
        </div>
        <Logo className="logo-4" />
      </div>
    </div>
  );
};
