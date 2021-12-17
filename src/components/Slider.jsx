import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <div className="mt-5">
      <Carousel variant="dark" interval={2000}>
        <Carousel.Item interval={2000}>
          <img
            src="./images/Slider-1.jpg"
            alt="First slide"
            className="img-fluid"
          />
          <Carousel.Caption>
            <h5 className="fs-3 fw-bold" style={{ color: "#F6F6F6" }}>
              BAGS
            </h5>
            <p className="fs-4" style={{ color: "white" }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src="./images/Jewelery.jpg"
            alt="Second slide"
            className="img-fluid"
          />
          <Carousel.Caption>
            <h5 className="fs-3 fw-bold" style={{ color: "#F6F6F6" }}>
              Jewelery
            </h5>
            <p className="fs-4" style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src="./images/Tshirts.jpg"
            alt="Third slide"
            className="img-fluid"
          />
          <Carousel.Caption>
            <h5 className="fs-3 fw-bold" style={{ color: "#F6F6F6" }}>
              T-Shirts
            </h5>
            <p className="fs-4" style={{ color: "white" }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
