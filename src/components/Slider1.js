import React, { Component } from "react";
import Slider from "react-slick";
import sliderData from "../datas/sliderData";
import SliderCards from "./SliderCards";
// import SliderCardsHover from "./SliderCardsHover";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="pr-10 absolute inset-y-1/2 -right-32 cursor-pointer" onClick={onClick}>
      <div className="w-10 h-10 bg-gray hover:bg-gray-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="pr-10 absolute inset-y-1/2 -left-20 cursor-pointer" onClick={onClick} >
      <div className="w-10 h-10 bg-gray hover:bg-gray-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd"/>
        </svg>
      </div>
    </div>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
    };

    const cards = sliderData.map(card => { 
        return (
            <SliderCards 
                title={card.title}
                package={card.package}
                image={card.image}
            />
        )
    })

    return (
        <div>

            <div className="flex h-fit w-11/12 md:w-3/4 mx-auto">
                    <div className="h-full w-full">
                        <Slider {...settings}>
                            {cards}
                        </Slider>
                    </div>
            </div>
        </div>
    );
  }
}
