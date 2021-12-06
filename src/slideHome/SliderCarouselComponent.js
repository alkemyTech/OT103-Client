import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { slidesGet } from "../Services/serviceSlide/servicesSlide";
import { SlideComponent } from "./SlideComponent";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const initialURL = process.env.REACT_APP_API;

export const SliderCarouselComponent = ({
  URL = `${initialURL}/slides`,
  arrayData,
}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const dataGet = await slidesGet(URL);
      const {
        data: { data },
      } = dataGet;
      return setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [URL]);
  return (
    <>
      <Slider {...settings}>
        {arrayData
          ? arrayData.map((obj) => {
              return <SlideComponent key={obj.id} data={obj} />;
            })
          : data.map((obj) => {
              return <SlideComponent key={obj.id} data={obj} />;
            })}
      </Slider>
    </>
  );
};
