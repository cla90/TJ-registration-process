import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Item } from "../../components/Item";
import { Logo } from "../../components/Logo";
import "./style.css";

export const Splash = () => {
  return (
    <div className="splash">
      <div className="div-3">
        <div className="card">
          <div className="paragraph-container-2">
            <h1 className="text-wrapper-2">Confidently paper trade anytime, anywhere</h1>
            <p className="p">with delayed market data and intuitive features</p>
            <div className="text-wrapper-3">Paper Trading</div>
            <div className="text-wrapper-4">Simulated Trading</div>
          </div>
          <ButtonPrimary
            buttonClassName="button-primary-2"
            className="button-primary-3"
            text="Let&#39;s Get Started"
            to="/login"
          />
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <img className="rating" alt="Rating" src="/img/rating.png" />
            <Item className="item-instance" />
            <Item
              className="item-3"
              elementClassName="item-2"
              googlePng="/img/amazon-png-0.png"
              text="AMZN"
              text1="-54.49%"
            />
            <Item className="item-4" googlePng="/img/microsoft-jpeg-0.png" text="MSFT" text1="+62.34%" />
            <div className="item-5">
              <img className="apple-png" alt="Apple png" src="/img/apple-png-0.png" />
              <div className="paragraph-container-3">
                <div className="GOOGL-2">AAPL</div>
                <div className="element-3">+198.39%</div>
              </div>
            </div>
          </div>
        </div>
        <Logo className="logo-instance" />
        <div className="logo-wrapper">
          <img className="img" alt="Logo" src="/img/logo.jpg" />
        </div>
      </div>
    </div>
  );
};
