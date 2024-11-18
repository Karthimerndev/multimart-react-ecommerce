import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";
import dress from "../Images/dress1.webp";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div
      className="homeSlide"
      style={{
        paddingtop: "0px",
      }}
    >
      <div className="container-fluid">
        <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
                mob={value.mobile}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderHome;
