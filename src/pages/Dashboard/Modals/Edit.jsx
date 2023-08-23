import "./Edit.css";
import Close from "../../../assets/close.png";
import { NFTData } from "../../../assets/Data/Data";

function Edit({ setMod3 }) {
  return (
    <>
      <div className="mod-wrapper">
        <div className="mod3">
          <div className="top d-flex justify-content-between align-items-center">
            <div className="left">
              <p>Edit</p>
            </div>
            <img onClick={() => setMod3(false)} src={Close} alt="close" />
          </div>

          <div className="mod3-card">
            {NFTData.slice(0, 1).map((item) => (
              <div className="nftcard" key={item.id}>
                <div className="card-hold">
                  <div className="tops">
                    <img className="bg" src={item.NFTImg} alt="nftImage" />
                    <div className="glass">
                      <p>{item.Time}</p>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="name">
                      <p>{item.NFtName}</p>
                      <div className="right">
                        <span>{item.Bid}</span>
                        <p>{item.Price}</p>
                      </div>
                    </div>
                    <div className="profile">
                      <div className="left">
                        <div className="text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="push">
            <p>Push to market</p>

            <div className="form-check form-switch form-switch-sm">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
          <div className="prices">
            <span>Current Price</span>
            <div className="current">1.85ETH</div>
            <span>New Price</span>
            <input type="text" />
          </div>
          <div className="button">
            <button className="bt1">Mint</button>
            <button className="bt2">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
