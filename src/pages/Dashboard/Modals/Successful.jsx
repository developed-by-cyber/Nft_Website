import "./Successful.css";
import Close from "../../../assets/close.png";
import Succes from "../../../assets/Success.png";

function Successful({ setMod4 }) {
  return (
    <>
      <div className="modal-wrapper">
        <div className="mod4">
          <div className="top">
            <img onClick={() => setMod4(false)} src={Close} alt="close" />
          </div>
          <div className="sucess">
            <img src={Succes} alt="icon" />
            <p>Successful</p>
            <p className="p2">Your purchase was succesful</p>
            <button onClick={() => setMod4(false)}>Ok</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Successful;
