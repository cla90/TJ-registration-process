import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonPtimary } from "../../components/ButtonPtimary";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-4">
        <div className="frame-4">
          <h1 className="text-wrapper-5">Login</h1>
          <div className="input-form">
            <Link className="e-mail-wrapper" to="/login-filled">
              <div className="e-mail">
                <span className="span">|</span>
                <span className="text-wrapper-6">Email</span>
              </div>
            </Link>
            <Form
              className="form-instance"
              frameClassName="form-2"
              state="default"
              to="/login-filled"
              type="password"
            />
            <Link className="text-wrapper-7" to="/forgot-password-1">
              Forgot Password?
            </Link>
            <ButtonPrimary
              buttonClassName="design-component-instance-node-2"
              className="button-primary-4"
              text="Login"
            />
            <div className="text-input">
              <div className="text-wrapper-8">Don’t have an account?</div>
              <ButtonPtimary
                cancelClassName="design-component-instance-node-2"
                className="button-ptimary-outline"
                text="Register"
                to="/registration"
              />
            </div>
          </div>
        </div>
        <Logo className="logo-2" />
      </div>
    </div>
  );
};
