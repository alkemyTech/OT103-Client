import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api/activities";

const getAllActivities = () => {
  console.log("LLAMADA");
  return axios
    .get(BASE_URL)
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
};

export { getAllActivities };
