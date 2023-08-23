import React from "react";
import "./Login.css";
import { AiOutlineEye } from "react-icons/ai";
import icon from "../../assets/fluent-mdl2_navigate-back.png";
import { BubblyLink } from "react-bubbly-transitions";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="wrap">
      <div
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-offset="10"
        className="topper"
      >
        <BubblyLink to="/">
          <img
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-offset="10"
            className="back"
            src={icon}
            alt="back"
          />
        </BubblyLink>
        <span data-aos="fade-down" data-aos-delay="200" data-aos-offset="10">
          {" "}
          Back
        </span>
      </div>
      <div className="center">
        <form>
          <p data-aos="fade-up" data-aos-delay="30" className="head">
            Login
          </p>
          <p data-aos="fade-up" data-aos-delay="40" className="head2">
            Welcome back!
          </p>
          <div data-aos="fade-up" data-aos-delay="50" className="di">
            <label htmlFor="email">Email Address</label>
            <input
              className="inputs"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="60" className="di2">
            <label htmlFor="password">Password</label>
            <input className="inputs" type="password" placeholder="Password" />
            <AiOutlineEye className="show" color="white" size={"20px"} />
          </div>
          <div data-aos="fade-up" data-aos-delay="70" className="remember">
            <div className="left">
              <input className="check" type="checkbox" />
              <span> Remember me</span>
            </div>
            <div className="right">
              <Link href="#">Forgot Password?</Link>
            </div>
          </div>
          <button
            className="bt"
            data-aos="fade-up"
            data-aos-delay="80"
            type="submit"
          >
            Log In
          </button>
          <p data-aos="fade-up" data-aos-delay="90" className="redirect">
            Don’t have an account?
            <span className="link">
              <BubblyLink to="/Register">Sign Up</BubblyLink>
            </span>
          </p>
        </form>
      </div>
      <div className="bottom">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="10"
          className="bottom-left"
        >
          <p>Need help? Contact</p>
          <Link href="#">Contact hello@Artmint.com</Link>
        </div>
        <hr />
        <div className="bottom-right">
          <p data-aos="fade-up" data-aos-delay="110" data-aos-offset="10">
            2023 Artmint. All Rights are reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
