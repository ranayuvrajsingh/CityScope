import React from "react";
import "./PositivityCard.scss";
import PositivityImage from "../../assets/pngs/PositivityImage.png";
const PositivityCard = (props) => {
  const scrollToComponent2 = () => {
    const component2 = document.getElementById("ChannelScroll");
    var ChannelComponentposition = component2.getBoundingClientRect().top;
    var headeroffset = 100;
    var offsetposition =
      ChannelComponentposition + window.scrollY - headeroffset;
    if (component2) {
      // component2.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: offsetposition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="positivity-card" onClick={scrollToComponent2}>
      {/* <button className='positivity-button'>abcd</button> */}
      <img className="positivity__img" src={PositivityImage} alt="image" />
      {/* <button className='positivity__button' onClick={()=>{console.log('clicked heressss');}}> Tap for some happy news</button> */}
    </div>
  );
};

export default PositivityCard;

//
