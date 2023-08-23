import "./NftDetails.css";
import Notifiaction from "./Notification/Notifiaction";
import { useParams } from "react-router-dom";
import { NFTData } from "../../assets/Data/Data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Successful from "./Modals/Successful";

function NftDetails() {
  const { id } = useParams();

  const singleNft = NFTData.filter((item) => item.id === parseInt(id));
  const newSingleNft = Array.from(singleNft);
  const [Mod4, setMod4] = useState(false);
  console.log("Mod4", Mod4);
  return (
    <>
      {newSingleNft.map((item) => (
        <div className="details-hold" key={item.id}>
          <Notifiaction />
          <div className="nft-details">
            <div className="left">
              <img className="nft-image" src={item.NFTImg} alt="nftImg" />
            </div>
            <div className="right">
              <p className="nft-name">{item.NFtName}</p>
              <span className="offer">Best Offer</span>
              <h4 className="price1">{item.Price}</h4>
              <span className="price p-2">$365966.00</span>
              <p className="details">
                Explore a vibrant digital marketplace where creators and
                collectors come together to buy, sell, and trade unique NFTs.
              </p>
              <p className="creator">by {item.CreatorName}</p>
              <button onClick={() => setMod4(true)}>Buy Now</button>
            </div>
          </div>
          <div className="more">
            <h3>More on Collection</h3>
            <div className="more-cards">
              {NFTData.slice(0, 4).map((item) => (
                <div className="nft__card" key={item.id}>
                  <div className="card-hold">
                    <div className="tops">
                      <Link to={`/MarketPlace/${item.id}`}>
                        <img className="bg" src={item.NFTImg} alt="nftImage" />
                      </Link>
                      <div className="glass">
                        <p>{item.Time}</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <p>
                        <Link>{item.NFtName}</Link>
                      </p>
                      <div className="profile">
                        <div className="left">
                          <img
                            className="pics"
                            src={item.CreatorImg}
                            alt="profileImg"
                          />
                          <div className="text">
                            <p>{item.CreatorName}</p>
                            <span>{item.Username}</span>
                          </div>
                        </div>
                        <div className="right">
                          <span>{item.Bid}</span>
                          <p>{item.Price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {Mod4 && <Successful setMod4={setMod4} />}
    </>
  );
}

export default NftDetails;
