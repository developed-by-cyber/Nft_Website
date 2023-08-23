import "./Mint.css";
import Close from "../../../assets/close.png";
import star from "../../../assets/Star 3.png";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPEG", "PNG", "GIF"];

function Mint({ setMod }) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="modal-wrapper">
      <div className="mod1">
        <div className="modal-hold">
          <div className="top d-flex justify-content-between align-items-center">
            <div className="left">
              <p>Create New item</p>
              <span>
                <img src={star} alt="star" />
                Label required field
              </span>
            </div>
            <img onClick={() => setMod(false)} src={Close} alt="close" />
          </div>
          <div className="add-file">
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className=" text-white-50">
              {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
            </p>
          </div>

          <form>
            <label>
              <img src={star} alt="star" />
              Amount
            </label>
            <input type="text" placeholder="Enter your address" />

            <div className="select-hold">
              <div className="select">
                <label>
                  <img src={star} alt="star" /> Categories
                </label>
                <select className="sel">
                  <option>Select Categories</option>
                  <option>photography</option>
                  <option>Gaming</option>
                  <option>pfps</option>
                  <option>Membership</option>
                  <option>art</option>
                  <option>membership</option>
                </select>
              </div>
              <div className="prices">
                <label>
                  <img src={star} alt="star" />
                  Amount
                </label>
                <input className="price" type="text" placeholder="NFT Price" />
              </div>
            </div>
            <div className="descriptions">
              <label>Description</label>
              <textarea></textarea>
            </div>
            <div className="button">
              <button className="bt1">Mint</button>
              <button className="bt2">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mint;
