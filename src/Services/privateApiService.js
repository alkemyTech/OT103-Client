import axios from "axios";

const baseUrl = "http://ongapi.alkemy.org/api";

const Put = async (endPoint, id, body) => {
  const url = id ? `${baseUrl}/${endPoint}/${id}` : `${baseUrl}/${endPoint}`;

  try {
    const response = await axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    return { success: false };
  }
};

export { Put };
