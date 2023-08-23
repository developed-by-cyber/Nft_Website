import React, { useState } from "react";
import "./DashboardHome.css";
import bigWallet from "../../assets/DashboardImg/Eth (2).png";
import Ethr from "../../assets/DashboardImg/Eth (1).png";
import RecentTransaction from "../Dashboard/Transaction/RecentTransaction";
import Nfts from "./Transaction/Nfts";
import RecentSales from "../Dashboard/Transaction/RecentSales";
import Deposit from "./Modals/Deposit";
import Withdraw from "./Modals/Withdraw";
function DashboardHome({ Anmol }) {
  const [Mod, setMod] = useState(false);
  const [Mod2, setMod2] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  for (let i = 0; i < 1; i++) {
    if (Anmol === "section1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (Anmol === "section2") {
      scrollToSection("section2");
    }
    if (Anmol === "section3") {
      scrollToSection("section3");
    }
    if (Anmol === "section4") {
      scrollToSection("section4");
    }
  }

  return (
    <div id="section1" className="DashboardHome">
      <div>
        <div className="row box-wrapper justify-content-center">
          <div className=" box">
            <img src={bigWallet} alt="wallet" />
            <div className="box-right">
              <span>Account Balance</span>
              <p>0.045ETH</p>
            </div>
          </div>
          <div className=" boxx">
            <img src={Ethr} alt="wallet" />
            <div className="box-right">
              <span>ETH ERC</span>
              <p>0.000</p>
              <span className="mini">-$0.00</span>
            </div>
          </div>
          <div className=" boxx">
            <img src={Ethr} alt="wallet" />
            <div className="box-right">
              <span>Account Balance</span>
              <p>0.045ETH</p>
              <span className="mini">-$0.00</span>
            </div>
          </div>
        </div>
        <div className="box-btn">
          <button className="btn1" onClick={() => setMod(true)}>
            Deposit
          </button>
          <button className="btn2" onClick={() => setMod2(true)}>
            Withdraw
          </button>
        </div>
        {Mod && <Deposit setMod={setMod} />}
        {Mod2 && <Withdraw setMod2={setMod2} />}
      </div>
      <div id="section2" className="pt-2">
        <RecentTransaction />
      </div>

      <div id="section3" className="pt-2">
        <Nfts />
      </div>
      <div id="section4" className="pt-2">
        <RecentSales />
      </div>
    </div>
  );
}

export default DashboardHome;
