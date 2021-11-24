import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import classicEditor from "@ckeditor/ckeditor5-build-classic";
import { validateCategoryForm } from "../../schemas/categoryFormValidation";
import "./CategoryForm.scss";
import { modifyCategory } from "../../services/privateApi/categoryApi";
/*

INPUTS:
category => object => {
    id => number
    name: => string,
    description: => string,
    image: => string,
}

FUNCTION: 
take some inputs and decide if it is going to 
create a category 
or modify an existent one



OUTPUTS => Form component and api call


*/

const CategoriesForm = ({ category }) => {
  //FOR IMAGE PREVIEW
  //See FILE API from html5
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    setImagePreview(e.target.result);
  };

  const imageInputRef = useRef();
  const [imagePreview, setImagePreview] = useState();
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
          // ALSO VALIDATES IMAGE INPUT
          return validateCategoryForm(values, imageInputRef);
        }}
        onSubmit={(values) => {
          console.log("SUBMIT!");
          console.log(values);
          console.log("END FUNCTION SUBMIT");
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
                Name:
              </label>
              <input
                type="text"
                placeholder="name..."
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form__input"
              />
              {errors.name && touched.name && (
                <div className="form__input-error">{errors.name}</div>
              )}
            </div>

            <div>
              <label className="form__label" htmlFor="image">
                {values.image || "Choose an image..."}
              </label>
              <input
                type="file"
                name="image"
                id="image"
                ref={imageInputRef}
                onChange={(e) => {
                  handleChange(e);
                  console.log(errors);
                  fileReader.readAsDataURL(e.target.files[0]);
                }}
                onBlur={handleBlur}
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
                Description:
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CategoriesForm;
