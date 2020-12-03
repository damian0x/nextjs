import DiscoverCard from "./DiscoverCard";
import Slider from "react-slick";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React from 'react';


// interface IDiscoverCard {
//     country: string,
//     city: string,
//     photo: string,
// }

const mock = [
    {
        country: 'United States',
        city: 'Yosemite',
        photo: 'yosemite.webp'
    },
    {
        country: 'Iceland',
        city: 'Reynisfjara',
        photo: 'reynisfjara.webp'
    },
    {
        country: 'Italy',
        city: 'Venice',
        photo: 'venice.webp'
    },
    {
        country: 'Japan',
        city: 'Tokyo',
        photo: 'tokyo.webp'
    },
]



const DiscoverToday = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
    
    const settings = {
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    return (
        <div className="container mx-auto h-96 flex justify-between py-20">
            <div className="flex flex-col justify-end w-64 ml-16 pb-8">
                <h1 className="text-3xl mb-6">Discovared Today</h1>
                <p className="text-sm">Come and explore the best of the world, from modern cities to natural landscapes</p>
            </div>
            {/* <div className="flex">
                {mock.map(cardData => (
                    <DiscoverCard cardData={cardData} key={cardData.city} />
                ))}
            </div> */}

            <div className="container w-850">
                <Slider {...settings}>
                    {mock.map((cardData, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <DiscoverCard cardData={cardData} key={idx} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default DiscoverToday;