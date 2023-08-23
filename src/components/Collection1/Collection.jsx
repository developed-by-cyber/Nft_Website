import "./Collection.css";
import { NFTData } from "../../assets/Data/Data.js";
import NftCard from "../Card/NftCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
function Collection() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [DATA, setDATA] = useState(NFTData);
  const [toggle, setToggle] = useState(1);
  function togged(index){
    setToggle(index);
   }
  function handleCatergory(categories){
    setDATA(
      NFTData.filter((item) => {
        return item.categories === categories;
      })
    )
  }
  
  return (
    <>
      <div className="collection1">
        <div className="top">
          <button onClick={() => {setDATA(NFTData)
         togged(1)}} className={toggle === 1 ? "active" : "btn-small"}>All</button>
          <button id="but1" onClick={() => { handleCatergory('art') 
          togged(2)}} className={toggle === 2 ? "active" : "btn-small"}>Art</button>
          <button  onClick={() => { handleCatergory('Gaming') 
          togged(3)}} className={toggle === 3 ? "active" : "btn-small"}>Gaming</button>
          <button  onClick={() => { handleCatergory('pfps') 
          togged(4)}} className={toggle === 4 ? "active" : "btn-small"}>PFPs</button>
          <button  onClick={() => { handleCatergory('photography') 
          togged(5)}} className={toggle === 5 ? "active" : "btn-small"}>Photography</button>
          <button  onClick={() => { handleCatergory('membership') 
          togged(6)}} className={toggle === 6 ? "active" : "btn-small"}>Membership</button>
        </div>
        <div className="hold">
          <Slider className="sli" {...settings}>
          {DATA.map((item) => (
            <NftCard key={item.id} item={item} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Collection;
