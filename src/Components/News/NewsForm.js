import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../Components/FormStyles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

// import "./newsForm.scss";

const NewsForm = () => {
  const [categories, setCategories] = useState([]);
  const [existingNew, setExistingNew] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const { id } = useParams();

  const handleSubmit = async (values, { setSubmitting }) => {
    if (id) {
      const body = {
        name: values.title,
        content: values.content,
        category_id: values.category,
        deleted_at: "2021-11-23T19:19:56.825Z",
      };
      if (existingNew.image !== values.image) {
        body.image = values.image;
      }

      try {
        const response = await axios.put(
          `http://ongapi.alkemy.org/api/news/${id}`,
          body
        );
        if (response.data.success) {
          setMessage("Updated successfully.");
        } else {
          setMessage("Failed, try again.");
        }
      } catch (error) {
        setMessage("Failed, try again.");
      }
    } else {
      const body = {
        name: values.title,
        content: values.content,
        image: values.image,
        category_id: values.category,
        deleted_at: "2021-11-23T19:19:56.825Z",
      };
      try {
        const response = await axios.post(
          "http://ongapi.alkemy.org/api/news",
          body
        );
        if (response.data.success) {
          setMessage("Created successfully.");
        } else {
          setMessage("Failed, try again.");
        }
      } catch (error) {
        setMessage("Failed, try again.");
      }
    }
    setSubmitting(false);
  };

  const loadApiData = useCallback(async () => {
    try {
      const categories = await axios.get(
        "http://ongapi.alkemy.org/api/categories"
      );
      setCategories(categories.data.data);
      if (id) {
        const newData = await axios.get(
          `http://ongapi.alkemy.org/api/news/${id}`
        );

        setExistingNew(newData.data.data);
      }
    } catch (error) {}
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    loadApiData();
  }, [loadApiData]);

  return isLoading ? (
    <div className="form-container">
      <div>Loading...</div>
    </div>
  ) : (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        title: existingNew.name || "",
        content: existingNew.content || "",
        category: existingNew.category_id || "",
        image: existingNew.image || "",
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Ingresar un título";
        }
        if (!values.content) {
          errors.content = "Ingresar contenido";
        }
        if (!values.category) {
          errors.category = "Seleccionar categoría";
        }
        if (!values.image) {
          errors.image = "Añadir una foto";
        }
        return errors;
      }}
    >
      {({ isSubmitting, values, setFieldValue, errors }) => {
        return (
          <div className="form-container">
            <Form className="news-form">
              <label htmlFor="title" className="label">
                Titulo
              </label>
              <Field
                type="text"
                name="title"
                className="input-field"
                id="title"
              />
              {errors.title ? (
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error-message"
                />
              ) : (
                <div>&nbsp;</div>
              )}

              <label htmlFor="title" className="label">
                Contenido
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={values.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFieldValue("content", data);
                }}
                placeholder="d"
              />
              {errors.content ? (
                <ErrorMessage
                  name="content"
                  component="div"
                  className="error-message"
                />
              ) : (
                <div>&nbsp;</div>
              )}

              <label htmlFor="title" className="label">
                Categoría
              </label>
              <Field
                name="category"
                as="select"
                className="input-field"
                children={[
                  <option value="" disabled key={0}>
                    Select category
                  </option>,
                ].concat(
                  categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))
                )}
              />
              {errors.category ? (
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error-message"
                />
              ) : (
                <div>&nbsp;</div>
              )}

              <label htmlFor="title" className="label">
                Foto
              </label>
              <div className="image-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.currentTarget.files && e.currentTarget.files[0]) {
                      const reader = new FileReader();

                      reader.onload = function (e) {
                        setFieldValue("image", e.target.result);
                      };

                      reader.readAsDataURL(e.currentTarget.files[0]);
                    }
                  }}
                />

                <div className="uploaded-image">
                  <img
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                      maxHeight: "90%",
                      maxWidth: "100%",
                    }}
                    src={values.image}
                    alt="decorative"
                    onError={(e) => {
                      e.target.src =
                        "https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
                    }}
                  />
                </div>
              </div>

              {errors.image ? (
                <ErrorMessage
                  name="image"
                  component="div"
                  className="error-message"
                />
              ) : (
                <div>&nbsp;</div>
              )}
              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Send
              </button>
              <div>{message}</div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default NewsForm;
