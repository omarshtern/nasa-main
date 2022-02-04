import gsap from "gsap/all";
import React from "react";
import styled from "styled-components";
import design1 from "../../assets/aboutImages/design1.png";
import design2 from "../../assets/aboutImages/design2.png";
import design3 from "../../assets/aboutImages/design3.png";
import design4 from "../../assets/aboutImages/design4.png";
import design5 from "../../assets/aboutImages/design5.png";
import design6 from "../../assets/aboutImages/design6.png";
import design7 from "../../assets/aboutImages/design7.png";
import design8 from "../../assets/aboutImages/design8.png";
export default function AboutDesign() {
  gsap.to("design1", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design2", {
    scrollTrigger: ".design2",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design3", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design4", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design5", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design6", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design7", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  gsap.to("design8", {
    scrollTrigger: ".design1",
    x: 400,
    rotation: 360,
    duration: 3,
  });
  return (
    <div>
      <Div>
        <img src={design1} alt="Design 1" className="design1" />
        <img src={design2} alt="Design 2" className="design2" />
        <img src={design3} alt="Design 3" className="design3" />
        <img src={design4} alt="Design 4" className="design4" />
        <img src={design5} alt="Design 5" className="design5" />
        <img src={design6} alt="Design 6" className="design6" />
        <img src={design7} alt="Design 7" className="design7" />
        <img src={design8} alt="Design 8" className="design8" />
      </Div>
    </div>
  );
}

const Div = styled.div`
  position: relative;
  img {
    position: absolute;
  }
  .design1 {
    right: 0;
    top: 7rem;
    width: 12rem;
  }
  .design2 {
    left: 0;
    top: 4rem;
    width: 8rem;
  }
  .design3 {
    left: 0;
    top: 32rem;
    width: 8rem;
  }
  .design4 {
    right: 0;
    top: 60rem;
    width: 8rem;
  }
  .design5 {
    left: 2rem;
    top: 85rem;
    width: 6rem;
  }
  .design6 {
    right: 0;
    top: 78rem;
    width: 12rem;
  }
  .design7 {
    left: 0;
    top: 100rem;
    width: 8rem;
  }
  .design8 {
    top: 105rem;
    width: 8rem;
    right: 0;
  }
  @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: none;
  }
`;
