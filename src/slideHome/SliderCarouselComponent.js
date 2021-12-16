import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import LoaderComponent from "../Components/Loader/Loader";
import { alertError } from "../Services/alerts/Alerts";
import { Get } from "../Services/publicApiService";
import { SlideComponent } from "./SlideComponent";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SliderCarouselComponent = ({ URL = "slides", arrayData, height = 30, dots = false }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const fetchedData = await Get(URL);
      const { data } = fetchedData;
      setLoading(true);
      return setData(data);
    } catch (error) {
      setLoading(false);
      alertError("Ha ocurrido un problema");
    }
  };
  useEffect(() => {
    arrayData ? setData(arrayData) : getData()
  })

  return (
    <>
      <Slider {...settings} dots={dots}>
        {loading ?
          (data.map(obj => { return <SlideComponent key={obj.id} data={obj} height={height} /> }))
          : (<LoaderComponent />)
        }
      </Slider>
    </>
  );
};
