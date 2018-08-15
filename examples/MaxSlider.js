import React, { Component } from "react";
import Slider from "../src/slider";
import SlideVideo from "../src/slide-video";
import SlideImage from "../src/slide-image";

export default class MaxSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var data = [
      {
        id: "1",
        type: "video",
        video: {
          id: "1",
          source: "https://www.youtube.com/embed/5ab-oAyIp4w",
          alt: "Awesome Image"
        }
      },
      {
        id: "2",
        type: "image",
        image: {
          id: "1",
          source: "/img/react-slick/Max_Muscle_Products.jpg",
          alt: "Max Muscle product"
        }
      },
      {
        id: "3",
        type: "image",
        image: {
          id: "1",
          source: "/img/react-slick/Build_Lean_Muscles.jpg",
          alt: "Build Lean Muscles"
        }
      },
      {
        id: "4",
        type: "image",
        image: {
          id: "1",
          source: "/img/react-slick/InBody_Results.jpg",
          alt: "InBody Results"
        }
      }
    ];
    const newSlides = data.map(s => {
      if (s.type == "video") {
        return <SlideVideo key={s.id} video={s.video} />;
      } else {
        return <SlideImage key={s.id} image={s.image} />;
      }
    });
    return <Slider {...settings}>{newSlides}</Slider>;
  }
}
