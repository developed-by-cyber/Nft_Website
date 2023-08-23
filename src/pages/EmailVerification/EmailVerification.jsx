import { Link } from "react-router-dom";
import "./EmailVerification.css";

function EmailVerification() {
  return (
    <>
      <div className="pass">
        <div className="wrap">
          <div className="center email-verification">
            <form>
              <p data-aos="fade-up" data-aos-delay="30" className="head">
                Email Verification
              </p>
              <p data-aos="fade-up" data-aos-delay="40" className="head2">
                check your email for a verification link sent
              </p>
              <div data-aos="fade-up" data-aos-delay="60" className="di">
                <label htmlFor="email">Your email</label>
                <input
                  className="inputs"
                  type="email"
                  placeholder="Elemelutony@gmail.com"
                />
              </div>
              <p className="head3 h4" data-aos="fade-up" data-aos-delay="70">
                Didn’t receive any mail, Please check your
              </p>
              <p className="head3" data-aos="fade-up" data-aos-delay="80">
                spam folders or Resend the email
              </p>
              <button
                className="bbb"
                data-aos="fade-up"
                data-aos-delay="90"
                type="submit"
              >
                Resend mail
              </button>
            </form>
          </div>
          <div className="bottom">
            <div
              data-aos="fade-up"
              data-aos-delay="110"
              className="bottom-left"
            >
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
      </div>
    </>
  );
}

export default EmailVerification;
