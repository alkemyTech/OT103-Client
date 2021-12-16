import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import LoaderComponent from "../Components/Loader/Loader";
import { alertError } from "../Services/alerts/Alerts";
import { Get } from "../Services/publicApiService";
import { SlideComponent } from "./SlideComponent";

const settings = {
  speed: 500,
  infinite: true, slidesToShow: 1,
  slidesToScroll: 1,
};

export const SliderCarouselComponent = ({ URL = "slides", arrayData, height = 30, dots = false }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const validation = () => {
    if (arrayData) {
      setData(arrayData)
      setLoading(false)
    } else {
      getData();
    }
  };
  const getData = async () => {
    try {
      const fetchedData = await Get(URL);
      const { data } = fetchedData;
      setLoading(false);
      return setData(data);
    } catch (error) {
      setLoading(false);
      alertError("Ha ocurrido un problema");
    }
  };
  useEffect(() => {
    validation();
  }, [])

  return (
    <>
      <Slider {...settings} dots={dots}>
        {loading ?
          (<LoaderComponent />)
          : (data.map(obj => { return <SlideComponent key={obj.id} data={obj} height={height} /> }))
        }
      </Slider>
    </>
  );
};
