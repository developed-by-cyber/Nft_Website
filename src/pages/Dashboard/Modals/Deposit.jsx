import "./Deposit.css";
import Close from "../../../assets/close.png";
import star from "../../../assets/Star 3.png";
import barcode from "../../../assets/bi_qr-code-scan.png";
import Warning from "../../../assets/Warning.png";
import copy from "../../../assets/Copy.png";

function Deposit({ setMod }) {
  return (
    <>
      <div className="modal-wrapper">
        <div className="mod2">
          <div className="modal-hold ">
            <div className="top d-flex justify-content-between align-items-center">
              <div className="left">
                <p>Deposit ETH</p>
                <span>
                  <img src={star} alt="star" />
                  Label required field
                </span>
              </div>
              <img onClick={() => setMod(false)} src={Close} alt="close" />
            </div>
            <div className="barcode">
              <img src={barcode} alt="barcode" />
            </div>
            <div className="warning">
              <p className="p1">
                <img className="me-2" src={Warning} alt="warning" /> Send only
                ETH to this deposit address
              </p>
            </div>
            <div className="wallet-address">
              <p className="p2">Wallet Address</p>
              <div className="address-hold">
                <input type="text" placeholder="Wallet address" />
                <div className="copy">
                  <img src={copy} alt="copyIcon" />
                </div>
              </div>
            </div>
            <div className="network">
              <p>
                Network <br /> Ethereum(ERC20)
              </p>
              <div className="div">
                <span>Minimum deposit</span>
                <span>0.0000000001ETH</span>
              </div>
              <div className="div">
                <span>Expected arrival</span>
                <span>12 network confirmation</span>
              </div>
              <div className="div">
                <span>Expected unlock</span>
                <span>64 network confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deposit;
