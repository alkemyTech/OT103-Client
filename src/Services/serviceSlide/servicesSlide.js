import axios from "axios";

const URL = process.env.REACT_APP_API_SLIDES

export const slidesGet = async (url) => {
  if (url) {
    try {
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const data = await axios.get(`${URL}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

export const slidesPost = async (data) => {
  try {
    const dataFetch = await axios.post(`${URL}`, {
      name: data.values.name,
      description: data.values.description,
      order: data.values.order,
      image: data.values.image,
    });
    return dataFetch;
  } catch (error) {
    console.log(error);
  }
};

export const slidesPatch = async (data, id) => {
  try {
    const dataFetch = await axios.put(`${URL}/${id}`, {
      name: data.values.name,
      description: data.values.description,
      order: data.values.order,
      image: data.values.image,
    });
    return dataFetch;
  } catch (error) {
    console.log(error);
  }
};
