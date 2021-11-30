import axios from "axios";

const baseUrl = "http://ongapi.alkemy.org/api";

const Post = async (endPoint, body) => {
  const url = `${baseUrl}/${endPoint}`;

  try {
    const response = await axios.post(url, body);

    return response.data;
  } catch (error) {
    return { success: false, error };
  }
};

export { Post };
