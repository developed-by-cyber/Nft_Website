import "./ForgotPassword.css";
import { BubblyLink } from "react-bubbly-transitions";
import ArrowBAck from "../../assets/DashboardImg/ArrowBack.png";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <>
      <div className="pass pass2">
        <div className="wrap">
          <div className="center">
            <form>
              <p data-aos="fade-up" data-aos-delay="30" className="head">
                Forgot Password
              </p>
              <p data-aos="fade-up" data-aos-delay="40" className="head2">
                No worries, we’ll send you reset instructions.
              </p>
              <div data-aos="fade-up" data-aos-delay="50" className="di">
                <label htmlFor="email">Email</label>
                <input
                  className="inputs"
                  type="email"
                  placeholder="Please enter your email address"
                />
              </div>
              <button
                className="bt"
                data-aos="fade-up"
                data-aos-delay="80"
                type="submit"
              >
                Resend mail
              </button>
              <p data-aos="fade-up" data-aos-delay="100" className="redirect">
                <img src={ArrowBAck} alt="arrow" /> Back to
                <span className="link">
                  <BubblyLink to="/Login">Log In</BubblyLink>
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
      </div>
    </>
  );
}

export default ForgotPassword;
