import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import "./style.css";

export const ForgotPasswordWrapper = () => {
  return (
    <div className="forgot-password-wrapper">
      <div className="forgot-password-3">
        <img className="element-success-2" alt="Element success" src="/img/68994-success-1.gif" />
        <div className="frame-16">
          <div className="text-wrapper-41">Verify Email</div>
          <p className="an-email-has-been">
            <span className="text-wrapper-42">An Email has been send to your email address </span>
            <span className="text-wrapper-43">example@e-mail.com</span>
            <span className="text-wrapper-43">. </span>
            <span className="text-wrapper-42">Please click on that link to verify your email address.</span>
          </p>
        </div>
        <div className="button-primary-instance-wrapper">
          <ButtonPrimary className="button-primary-13" text="Resend" />
        </div>
      </div>
    </div>
  );
};
