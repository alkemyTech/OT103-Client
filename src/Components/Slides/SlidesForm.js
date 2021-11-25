import React from "react";

import { Field, useFormik } from "formik";
import * as Yup from "yup";

import "../FormStyles.css";

const SlidesForm = () => {
  /*TODO:
 - Terminar las validaciones {
    Todos los campos son obligatorios

    Name debe tener una longitud mínima de 4 caracteres 

    Órder debe ser único

    La imagen deberá tener un formato .jpg o .png
 } (TODO: ver si se puede pasar a helper la funcion validate de formik)
 - Ver de usar Formik en vez de useFormik
 - Ver video de yup
 - Reemplazar descripcion por el componente ckEditor
 - Lograr reutilizacion del form tanto para editar como crear
 - Llamada api call POST / PATCH condicional
 - Creacion de ruta /backoffice/slides

*/

  function formSubmit() {
    console.log(formik.values);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      order: 0,
      image: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "El nombre es obligatorio";
      } else if (values.name.length < 4) {
        errors.name = "El nombre debe tener 4 caracteres o mas";
      }
      if (!values.description) {
        errors.description = "La descripcion es obligatoria.";
      }
      if (!values.order) {
        errors.order = "El orden es obligatorio.";
      }
      if (!values.image) {
        errors.image = "La imagen es obligatoria.";
      }
      return errors;
    },
    onSubmit: () => {
      if (!formik.isValid) {
        console.log("form invalid");
        return;
      }

      formSubmit();
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <Field
        className="input-field"
        type="text"
        {...formik.getFieldProps("name")}
        placeholder="Slide Title"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <Field
        className="input-field"
        type="text"
        {...formik.getFieldProps("description")}
        placeholder="Write the description"
      />
      <Field
        className="input-field"
        type="text"
        {...formik.getFieldProps("order")}
        placeholder=""
      />
      <Field
        className="input-field"
        type="file"
        {...formik.getFieldProps("image")}
        placeholder="Write the description"
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default SlidesForm;
