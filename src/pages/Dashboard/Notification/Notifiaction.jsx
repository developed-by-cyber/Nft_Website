import "./Notification.css";
import profImg from "../../../assets/DashboardImg/profileImg.png";
import verified from "../../../assets/DashboardImg/Verified.png";
import { Link } from "react-router-dom";
const Notifiaction = () => {
  return (
    <>
      <div className="notification">
        <div className="prof">
          <Link to="/Dashboard/Settings">
            <img src={profImg} alt="profileImg" />
          </Link>
        </div>
        <div className="prof-name">
          <p>
            Augustine <i className="hr"></i>
            <span>
              Verified <img src={verified} alt="verified" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notifiaction;
