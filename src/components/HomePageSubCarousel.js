import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Slide1 from "../assets/images/sub-carousel/slide-1.png";
import Slide2 from "../assets/images/sub-carousel/slide-2.png";

const HomePageSubCarousel = () => {
  return (
    <div className="home-page-sub-carousel-wrapper">
      <div className="content container flex-center">
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper.params)}
          speed={1000}
          loop={true}
          autoplay={true}
        >
          <SwiperSlide>
            <div className="slider-content-grid">
              <div className="slider-image-wrapper">
                <img src={Slide1} alt="slide-1" />
              </div>
              <div className="slider-info-text">
                <h4 className="text-uppercase">product landing page</h4>
                <h2 className="mr-top-10">
                  vitra chair -
                  <br />
                  classic design.
                </h2>
                <h3 className="mr-top-15 mr-bottom-15">$540.00</h3>

                <form>
                  <button className="text-uppercase">add to cart</button>
                </form>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-content-grid">
              <div className="slider-image-wrapper">
                <img src={Slide2} alt="slide-1" />
              </div>
              <div className="slider-info-text">
                <h4 className="text-uppercase">product landing page</h4>
                <h2 className="mr-top-10">
                  Woodspot -
                  <br />
                  Lamp by Seletti.
                </h2>
                <h3 className="mr-top-15 mr-bottom-15">$240.00</h3>

                <form>
                  <button className="text-uppercase">add to cart</button>
                </form>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageSubCarousel;
