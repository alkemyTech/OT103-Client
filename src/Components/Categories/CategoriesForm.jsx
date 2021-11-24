import React, { useRef, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import classicEditor from "@ckeditor/ckeditor5-build-classic";
import { validateCategoryForm } from "../../schemas/categoryFormValidation";
import "./CategoryForm.scss";
import {
  modifyCategory,
  uploadCategory,
} from "../../Services/privateApi/categoryApi";
import getBase64FromUrl from "../../helpers/imageToBase64";

//TODO refactor

/*

INPUTS:
category => object => {
    id => number
    name: => string,
    description: => string,
    image: => string (blob, base64),
}

FUNCTION: 
take some inputs and decide if it is going to 
create a category 
or modify an existent one



OUTPUTS => Form component and api call


*/

const CategoriesForm = ({ category }) => {
  //FOR IMAGE PREVIEW
  //AND SENDING TO API
  //See FILE API from html5
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    setImagePreview(e.target.result);
  };

  const imageInputRef = useRef();
  //   FOR SENDING THE IMAGE IN BASE64 and also previewing it on the frontend
  const [imagePreview, setImagePreview] = useState();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (category !== undefined)
      getBase64FromUrl(category.image)
        .then((res) => setImagePreview(res))
        .catch((err) => console.log(err));
  }, [category]);

  //HIDE THE MESSAGE IN 4 SECONDS
  // CLEANUP TO PREVENT ERROR DISMOUNTING COMPONENT
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus("");
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  return (
    <>
      <h1 className="title">
        {category ? "Edit category" : "Create category"}
      </h1>
      <Formik
        initialValues={
          category !== undefined
            ? {
                name: category.name,
                description: category.description,
                image: category.image,
              }
            : {
                name: "",
                description: "",
                image: "",
              }
        }
        initialErrors={{
          name: "",
          description: "",
          image: "",
        }}
        validate={(values) => {
          console.log(values);
          // ALSO VALIDATES IMAGE INPUT
          return validateCategoryForm(values, imageInputRef);
        }}
        onSubmit={(values) => {
          category === undefined
            ? uploadCategory({ ...values, image: imagePreview })
                .then((res) => {
                  setStatus(res);
                })
                .catch((err) => {
                  setStatus(err);
                })
            : modifyCategory({
                ...values,
                image: imagePreview,
                id: category.id,
              })
                .then((res) => {
                  setStatus(res);
                })
                .catch((err) => {
                  setStatus(err);
                });
        }}
      >
        {({
          handleBlur,
          touched,
          errors,
          values,
          handleChange,
          setTouched,
        }) => (
          <Form className="form">
            <div>
              <label className="form__label" htmlFor="name">
                Name: <small className="form__label-required">*</small>
              </label>
              <input
                type="text"
                placeholder="name..."
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form__input"
                defaultValue={values.name}
              />
              {errors.name && touched.name && (
                <div className="form__input-error">{errors.name}</div>
              )}
            </div>

            <div>
              <label
                className="form__label"
                htmlFor="image"
                onBlur={handleBlur}
              >
                {values.image || (
                  <span>
                    Choose an image...
                    <small className="form__label-required">*</small>
                  </span>
                )}
              </label>
              <input
                type="file"
                name="image"
                id="image"
                ref={imageInputRef}
                onChange={(e) => {
                  handleChange(e);
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
                className="form__input"
                accept="image/png,  image/jpeg"
              />
              {errors.image && touched.image && (
                <div className="form__input-error">{errors.image}</div>
              )}
              {values.image ? (
                <div>
                  <img
                    src={imagePreview}
                    className="form__image-preview"
                    alt="preview"
                  />
                </div>
              ) : null}
            </div>

            <div>
              <label className="form__label" htmlFor="description">
                Description: <small className="form__label-required">*</small>
              </label>
              <CKEditor
                className="form__input"
                name="description"
                editor={classicEditor}
                data={category ? category.description : ""}
                onChange={(e, editor) =>
                  (values.description = editor.getData())
                }
                onBlur={() => {
                  setTouched({ ...touched, description: true });
                }}
              />
              {errors.description && touched.description && (
                <div className="form__input-error">{errors.description}</div>
              )}
            </div>

            <button className="form__button" type="submit">
              Submit
            </button>
            {setStatus && <div>{status}</div>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CategoriesForm;
