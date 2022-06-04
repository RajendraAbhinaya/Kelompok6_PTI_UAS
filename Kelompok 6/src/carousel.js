import React from "react";
import Carousel from "react-bootstrap/Carousel";
import avatar1 from "./img/1.png";
import avatar2 from "./img/2.png";
import avatar3 from "./img/3.png";

export default function ControlledCarousel(props) {
  const handleSelect = (selectedIndex, e) => {
    props.setIndex(selectedIndex);
  };

  return (
    <div class="mx-auto" style={{ width: "100px" }}>
      <div
        id="menu-help"
        class="justify-content-center align-items-center d-flex"
      >
        <Carousel
          variant="dark"
          activeIndex={props.index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img className="ava1" src={avatar1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="ava1" src={avatar2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="ava1" src={avatar3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
