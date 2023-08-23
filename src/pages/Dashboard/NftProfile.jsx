import "./NftProfile.css";
import { NFTData } from "../../assets/Data/Data";
import profileimg from "../../assets/DashboardImg/Ellipse 501 (1).png";
import Verified from "../../assets/DashboardImg/Verified.png";
import { Link } from "react-router-dom";

function NftProfile() {
  return (
    <>
      <div className="NftProfile">
        <p className="first-p">My Profile</p>
        <div className="profile-holder">
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
          <div className="text-hold">
            <hr className="first-hr" />
            <div className="text">
              <p>10,353</p>
              <span>NFT Minted</span>
            </div>
            <hr />
            <div className="text">
              <p>83</p>
              <span>NFT sold</span>
            </div>
            <hr />
            <div className="text">
              <p>21</p>
              <span>NFT Bought</span>
            </div>
            <hr />
            <div className="text">
              <p>34</p>
              <span>NFT’s</span>
            </div>
          </div>
        </div>

        <div className="my-nfts">
          <p className="first-p">My NFT’s</p>

          <div className=" nft-hold">
            {NFTData.slice(0, 4).map((Data) => (
              <div className="nftcard" key={Data.id}>
                <div className="card-hold">
                  <div className="tops">
                    <Link>
                      <img className="bg" src={Data.NFTImg} alt="nftImage" />
                    </Link>
                    <div className="glass">
                      <p>For Sale</p>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="name">
                      <p>{Data.NFtName}</p>
                      <div className="right">
                        <span>{Data.Bid}</span>
                        <p>{Data.Price}</p>
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
        </div>
      </div>
    </>
  );
}

export default NftProfile;
