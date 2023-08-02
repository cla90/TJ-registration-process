import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonPtimary } from "../../components/ButtonPtimary";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import "./style.css";

export const LoginFilled = () => {
  return (
    <div className="login-filled">
      <div className="div-6">
        <div className="frame-8">
          <h1 className="text-wrapper-18">Login</h1>
          <div className="input-form-3">
            <Form className="form-6" href="mailto:exapmle@e-mail.com" state="filled" type="textfiled" />
            <Form className="form-7" state="filled" type="password" />
            <Link className="text-wrapper-19" to="/forgot-password-1">
              Forgot Password?
            </Link>
            <ButtonPrimary
              buttonClassName="design-component-instance-node-3"
              className="button-primary-7"
              text="Login"
            />
            <div className="text-input-2">
              <div className="text-wrapper-20">Don’t have an account?</div>
              <ButtonPtimary
                cancelClassName="design-component-instance-node-3"
                className="button-ptimary-instance"
                text="Register"
                to="/registration"
                to1="/registration"
              />
            </div>
          </div>
        </div>
        <Logo className="logo-3" />
      </div>
    </div>
  );
};
