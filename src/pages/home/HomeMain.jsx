import React from "react";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";
import HomeFive from "./HomeFive";
import Partner from "../Partner";
import Footer from "../Footer";
import HomeSix from "./HomeSix";
import HomeSeven from "./HomeSeven";
import HomeEight from "./HomeEight";
import HomeNine from "./HomeNine";
import HomeTen from "./HomeTen";

function HomeMain() {
  return (
    <div className="select-none">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeSeven />
      {/* <HomeFour /> */}
      <HomeEight />
      <HomeNine />
      {/* <HomeFive /> */}
      <HomeTen />
      <HomeSix />
      <Partner />
      <Footer />
    </div>
  );
}

export default HomeMain;
