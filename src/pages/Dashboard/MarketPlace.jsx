import "./MarketPlace.css";
import color from "../../assets/DashboardImg/MarketPlace.png";
import { useState } from "react";
import { NFTData } from "../../assets/Data/Data";
import { Link } from "react-router-dom";
import Notifiaction from "./Notification/Notifiaction";

function MarketPlace() {
  const [DATA, setDATA] = useState(NFTData);
  const [toggle, setToggle] = useState(1);
  function togged(index) {
    setToggle(index);
  }
  function handleCatergory(categories) {
    setDATA(
      NFTData.filter((item) => {
        return item.categories === categories;
      })
    );
  }

  return (
    <>
      <div className="marketplace">
        <Notifiaction />
        <div className="desktop">
          <div className="top">
            <img src={color} alt="color" />
            <p className="p1">
              Explore a vibrant digital marketplace where creators and
              collectors come together to buy, sell, and trade unique NFTs.
              Discover a wide range of digital assets, including art,
              collectibles, music, videos, and more, all authenticated on the
              blockchain for proven ownership and rarity.
            </p>
          </div>
          <div className="top2">
            <div className="item">
              <p>Marketplace</p>
              <span>
                <i>Items:</i> 2,737
              </span>
              <span>
                <i className="span">Chains:</i> Ethereum
              </span>
            </div>
            <div className="item2">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>
            <div className="item3">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>
            <div className="item4">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>
          </div>
        </div>

        <div className="mobil">
          <div className="top">
            <div className="img-holder"></div>
          </div>
          <div className="top2">
            <div className="item">
              <p>Marketplace</p>
              <span>
                <i>Items:</i> 2,737
              </span>
              <span>
                <i className="span">Chains:</i> Ethereum
              </span>
            </div>
          </div>
          <p className="p1 mt-4">
            Explore a vibrant digital marketplace where creators and collectors
            come together to buy, sell, and trade unique NFTs. Discover a wide
            range of digital assets, including art, collectibles, music, videos,
            and more, all authenticated on the blockchain for proven ownership
            and rarity.
          </p>

          <div className="top3 d-flex justify-content-between align-items-center">
            <div className="item">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>
            <hr />
            <div className="item">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>

            <hr />
            <div className="item">
              <p>10,353 ETH</p>
              <span>Total volume</span>
            </div>
          </div>
        </div>
        <div className="topp">
          <button
            onClick={() => {
              setDATA(NFTData);
              togged(1);
            }}
            className={toggle === 1 ? "active" : "btn-small"}
          >
            All
          </button>
          <button
            id="but1"
            onClick={() => {
              handleCatergory("art");
              togged(2);
            }}
            className={toggle === 2 ? "active" : "btn-small"}
          >
            Art
          </button>
          <button
            onClick={() => {
              handleCatergory("Gaming");
              togged(3);
            }}
            className={toggle === 3 ? "active" : "btn-small"}
          >
            Gaming
          </button>
          <button
            onClick={() => {
              handleCatergory("pfps");
              togged(4);
            }}
            className={toggle === 4 ? "active" : "btn-small"}
          >
            PFPs
          </button>
          <button
            onClick={() => {
              handleCatergory("photography");
              togged(5);
            }}
            className={toggle === 5 ? "active" : "btn-small"}
          >
            Photography
          </button>
          <button
            onClick={() => {
              handleCatergory("membership");
              togged(6);
            }}
            className={toggle === 6 ? "active" : "btn-small"}
          >
            Membership
          </button>
        </div>

        <div className="markets">
          {DATA.slice(0, 12).map((item) => (
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
    </>
  );
}

export default MarketPlace;
