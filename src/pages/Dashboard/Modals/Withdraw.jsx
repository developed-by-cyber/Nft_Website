import "./Widthdraw.css";
import Close from "../../../assets/close.png";
import star from "../../../assets/Star 3.png";

function Withdraw({ setMod2 }) {
  return (
    <>
      <div className="modal-wrapper">
        <div className="mod">
          <div className="top">
            <div className="left">
              <p>Withdraw</p>
              <span>
                <img src={star} alt="star" />
                Label required field
              </span>
            </div>
            <img onClick={() => setMod2(false)} src={Close} alt="close" />
          </div>
          <div className="wallet">
            <div className="left">
              <p>
                <span>WETH bal:</span> 0.000 WETH
              </p>
            </div>
            <div className="right">
              <p>
                <span>ETH bal:</span> 0.000 ETH
              </p>
            </div>
          </div>

          <form>
            <label>
              <img src={star} alt="star" /> Select a coin
            </label>
            <select className="sel">
              <option>WETH (ERC20)</option>
              <option>ETH (ERC20)</option>
              <option>WETH (ERC20)</option>
            </select>

            <label>
              <img src={star} alt="star" />
              Amount
            </label>
            <input type="text" placeholder="Enter your address" />

            <label>
              <img src={star} alt="star" />
              Amount
            </label>
            <input type="text" placeholder="Enter your address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Withdraw;
