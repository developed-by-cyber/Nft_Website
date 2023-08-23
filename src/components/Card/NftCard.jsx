import { Link, Outlet } from "react-router-dom";
import "./Card.css";
function Nft__Card(props) {
  const {
    Time,
    NFtName,
    Username,
    Bid,
    Price,
    CreatorName,
    CreatorImg,
    NFTImg,
  } = props.item;

  return (
    <>
      <div className="nft__card" >
        <div className="card-hold">
          <div className="tops">
            <Link><img className="bg" src={NFTImg} alt="nftImage" /></Link>
            <div className="glass">
              <p>{Time}</p>
            </div>
          </div>
          <div className="bottom">
            <p><Link>{NFtName}</Link></p>
            <div className="profile">
              <div className="left">
                <img className="pics" src={CreatorImg} alt="profileImg" />
                <div className="text">
                  <p>{CreatorName}</p>
                  <span>{Username}</span>
                </div>
              </div>
              <div className="right">
                <span>{Bid}</span>
                <p>{Price}</p>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Nft__Card;
