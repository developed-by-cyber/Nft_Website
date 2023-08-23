import "./Register.css";
import { Link } from "react-router-dom";
import icon from "../../assets/fluent-mdl2_navigate-back.png";
import { BubblyLink } from "react-bubbly-transitions";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };
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
          Back
        </span>
      </div>
      <div className="center">
        <form>
          <p data-aos="fade-up" data-aos-delay="30" className="head">
            Register
          </p>
          <p data-aos="fade-up" data-aos-delay="40" className="head2">
            Welcome! Please fill in your credentials
          </p>
          <div data-aos="fade-up" data-aos-delay="50" className="di">
            <label htmlFor="username">Username</label>
            <input className="inputs" type="email" placeholder="Username" />
          </div>
          <div data-aos="fade-up" data-aos-delay="60" className="di">
            <label htmlFor="email">Email Address</label>
            <input
              className="inputs"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="70" className="di2">
            <label htmlFor="password">Password</label>
            <input
              className="inputs"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <AiOutlineEye
              onClick={togglePassword}
              className="show"
              color="white"
              size={"20px"}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="80" className="di2">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="inputs"
              type={passwordShown2 ? "text" : "password"}
              placeholder="Password"
            />
            <AiOutlineEye
              onClick={togglePassword2}
              className="show"
              color="white"
              size={"20px"}
            />
          </div>

          <button
            className="bbb"
            data-aos="fade-up"
            data-aos-delay="90"
            type="submit"
          >
            Sign Up
          </button>
          <p data-aos="fade-up" data-aos-delay="100" className="redirect">
            Don’t have an account?
            <span className="link">
              <BubblyLink to="/Login">Sign In</BubblyLink>
            </span>
          </p>
        </form>
      </div>
      <div className="bottom">
        <div data-aos="fade-up" data-aos-delay="110" className="bottom-left">
          <p>Need help? Contact</p>
          <Link href="#">Contact hello@Artmint.com</Link>
        </div>
        <hr />
        <div className="bottom-right">
          <p data-aos="fade-up" data-aos-delay="120" data-aos-offset="10">
            2023 Artmint. All Rights are reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
