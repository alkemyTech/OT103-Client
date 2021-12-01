import axios from "axios";

const baseUrl = "http://ongapi.alkemy.org/api";

const tempToken = "token";

export const Put = async (endPoint, id, body) => {
  const url = id ? `${baseUrl}/${endPoint}/${id}` : `${baseUrl}/${endPoint}`;

  try {
    const response = await axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });

    return response.data;
  } catch (error) {
    return { success: false, error };
  }
};

export const Get = async (endPoint, id) => {
  const url = id ? `${baseUrl}/${endPoint}/${id}` : `${baseUrl}/${endPoint}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });

    return response.data;
  } catch (error) {
    return { success: false, error };
  }
};

export const Delete = async (endPoint, id) => {
  const url = `${baseUrl}/${endPoint}/${id}`;

  try {
    const { data } = await axios.delete(url, {
      headers: {
        Authorization: tempToken,
      },
    });

    return data;
  } catch (error) {
    return { success: false, error };
  }
};
