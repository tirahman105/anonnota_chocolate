import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://img.freepik.com/free-vector/realistic-world-chocolate-day-background_52683-86081.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=ais" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/realistic-world-chocolate-day-banner_23-2149430716.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
