import axios from 'axios';

const url = "http://ongapi.alkemy.org/api";
const id = 571;

export function slidesPost(formik) {
  axios
    .post(`${url}/slides`, {
      name: formik.values.name,
      description: formik.values.description,
      order: formik.values.order,
      image: formik.values.image,
    })
    .then(({ status }) => alert(JSON.stringify(`Status: ${status}`)))
    .catch((err) => console.log(err));
}

export function slidesPatch(formik) {
  axios
    .put(`${url}/slides/${id}`, {
      name: formik.values.name,
      description: formik.values.description,
      order: formik.values.order,
      image: formik.values.image,
    })
    .then(({ status }) => alert(status))
    .catch((err) => console.log(err));
}
