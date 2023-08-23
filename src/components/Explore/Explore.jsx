import "./Explore.css";
import IMG from "../../assets/collection-image/image.png";
function Explore() {
  return (
    <>
      <div className="explore">
        <div className="left" data-aos="fade-right" data-aos-delay="500">
          <img src={IMG} alt="img" />
        </div>
        <div className="right" data-aos="fade-left" data-aos-delay="600">
          <p className="first-p">Explore & Sell your Awesome NFTs Art</p>
          <p className="second-p">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="btns">
            <button className="btn1">Discover Now</button>
            <button className="btn2">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
