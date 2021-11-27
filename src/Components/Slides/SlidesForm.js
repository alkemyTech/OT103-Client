import React from "react";
import { useFormik } from "formik";

import { validate } from "../../helpers/slideValidations";
import { slidesPost, slidesPatch } from "./helpers/slidesAPI";

import "../FormStyles.css";
import "./slidesForm.scss";

const SlidesForm = ({ data }) => {
  function formSubmit() {
    if (!data) {
      slidesPost(formik);
    } else {
      slidesPatch(formik);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      order: "",
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
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        defaultValue={data?.name || formik.values.name}
        placeholder="Slide Title"
      />

      {formik.touched.name && formik.errors.name ? (
        <div className="error-msg">{formik.errors.name}</div>
      ) : null}
      <input
        className="input-field"
        type="text"
        name="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        defaultValue={data?.description || formik.values.description}
        placeholder="Write the description"
      />
      {formik.touched.description && formik.errors.description ? (
        <div className="error-msg">{formik.errors.description}</div>
      ) : null}
      <input
        className="input-field"
        type="text"
        name="order"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        defaultValue={data?.order || formik.values.order}
        placeholder="0"
      />
      {formik.touched.order && formik.errors.order ? (
        <div className="error-msg">{formik.errors.order}</div>
      ) : null}
      <input
        className="input-field"
        type="file"
        name="image"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        defaultValue={data?.image || formik.values.image}
        placeholder="Write the description"
      />
      {formik.touched.image && formik.errors.image ? (
        <div className="error-msg">{formik.errors.image}</div>
      ) : null}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default SlidesForm;
