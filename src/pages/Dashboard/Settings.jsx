import "./Settings.css";
import profileimg from "../../assets/DashboardImg/Ellipse 501 (1).png";
import Verified from "../../assets/DashboardImg/Verified.png";

function Settings() {
  return (
    <>
      <div className="Settings">
        <p className="pp">Settings</p>
        <div className="settings-hold d-flex justify-content-between align-items-center">
          <div className="left">
            <p className="p1">Change Profile Picture</p>
            <div className="profile-hold d-flex align-items-center gap-3">
              <div className="img-hold">
                <img src={profileimg} alt="profileImg" />
              </div>
              <div className="profile-name">
                <p>
                  Janes <img src={Verified} alt="verified" />
                </p>
                <span className="username">@Janefra</span>
              </div>
            </div>
            <button>Upload Picture</button>
          </div>
          <div className="right">
            <p>Change Password</p>
            <div className="inputs-hold">
              <label>Current Password</label>
              <input className="inputs" type="password" />

              <label>New Password</label>
              <input className="inputs" type="password" />

              <label>Confirm Password</label>
              <input className="inputs" type="password" />

              <button>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
