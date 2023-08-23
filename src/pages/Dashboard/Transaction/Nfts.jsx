import "./Nfts.css";
import { NFTData } from "../../../assets/Data/Data";
import edit from "../../../assets/DashboardImg/edit.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Edit from "../Modals/Edit";

function Nfts() {
  const [Mod3, setMod3] = useState(false);
  return (
    <div className="nfts">
      <p className="heading">NFT's</p>
      <div className=" nft-hold">
        {NFTData.slice(0, 4).map((Data) => (
          <div className="nftcard" key={Data.id}>
            <div className="card-hold">
              <div className="tops">
                <Link to={`/MarketPlace/${Data.id}`}>
                  <img className="bg" src={Data.NFTImg} alt="nftImage" />
                </Link>
                <div className="glass">
                  <p>For Sale</p>
                </div>
              </div>
              <div className="bottom">
                <div className="name">
                  <p>{Data.NFtName}</p>
                  <img
                    onClick={() => setMod3(true)}
                    className="edit"
                    width={"20px"}
                    src={edit}
                    alt="edit"
                  />
                  {Mod3 && <Edit setMod3={setMod3} />}
                </div>
                <div className="profile">
                  <div className="left">
                    <img
                      className="pics"
                      src={Data.CreatorImg}
                      alt="profileImg"
                    />
                    <div className="text">
                      <p>{Data.CreatorName}</p>
                      <span>{Data.Username}</span>
                    </div>
                  </div>
                  <div className="right">
                    <span>{Data.Bid}</span>
                    <p>{Data.Price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nfts;
