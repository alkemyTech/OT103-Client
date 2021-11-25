import React from "react";

import { useFormik } from "formik";

import "../FormStyles.css";
import { validate } from "../../helpers/slideValidations";

const SlidesForm = () => {



  function formSubmit() {
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      order: 0,
      image: "",
    },
    validate,
    onSubmit: () => {
      if (!formik.isValid) {
        return;
      }

      formSubmit();
    },
  });
 
  
  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        type="text"
        {...formik.getFieldProps("name")}
        value={ formik.values.name }
        placeholder="Slide Title"
        autoComplete="off"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <input
        className="input-field"
        type="text"
        {...formik.getFieldProps("description")}
        placeholder="Write the description"
      />
       {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}
      <input
        className="input-field"
        type="text"
        {...formik.getFieldProps("order")}
        placeholder=""
      />
       {formik.touched.order && formik.errors.order ? (
        <div>{formik.errors.order}</div>
      ) : null}
      <input
        className="input-field"
        type="file"
        {...formik.getFieldProps("image")}
        placeholder="Write the description"
      />
      {formik.touched.image && formik.errors.image ? (
        <div>{formik.errors.image}</div>
      ) : null}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default SlidesForm;
