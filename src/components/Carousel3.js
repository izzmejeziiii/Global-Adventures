import React, { Component } from "react";
import Slider from "react-slick";
import DestinationCarouselCards from "./DestinationCarousel";
import destinationData from "../datas/destinationCarousel";


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

export default class DestinationCarousel extends Component {
    render() {
        const settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
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
            ]
        };

        const cards = destinationData.map(card => { 
            return (
                <DestinationCarouselCards
                    img={card.img}
                    destination={card.destination}
                    description={card.description}
                    highlights={card.highlights}
                />
            )
        })

        return (
            <div>
                <div className="flex h-fit w-11/12 md:w-4/5 mx-auto pb-14">
                    <div className="h-fit w-full">
                        <Slider {...settings}>
                            {cards}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
