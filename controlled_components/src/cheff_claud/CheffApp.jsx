import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./css/index.css";

// import pads from "./pads.js";
// import Pad from "./components/Pad.jsx";

export default function CheffApp({ darkMode }) {
  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
  };

  //   const [padsData, setPadsData] = useState(pads);

  //   function toggle(id) {
  //     setPadsData((prevPadState) =>
  //       prevPadState.map((padItem) => {
  //         return padItem.id === id ? { ...padItem, on: !padItem.on } : padItem;
  //       })
  //     );
  //   }

  //   const padsElement = padsData.map((pad) => (
  //     <Pad
  //       key={pad.id}
  //       color={pad.color}
  //       on={pad.on}
  //       id={pad.id}
  //       handleClick={toggle}
  //     />
  //   ));

  return (
    <>
      <Header />
      <Main />
      {/* <div className="buttons-container">{padsElement}</div> */}
    </>
  );
}
