import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { SlideComponent } from './SlideComponent';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export const SliderApp = ({ URL = 'http://ongapi.alkemy.org/api/slides' }, { type }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios({method: type , url: URL})
            .then(res => setData(res.data.data))
            .catch(e => console.log(e))
    }, [URL])
    return (
        <Slider {...settings}>
            {data.map(obj => {
                return <SlideComponent key={obj.id} data={obj}/>
            })
            }
        </Slider>
    )
}
