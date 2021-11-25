import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

import "../../Components/FormStyles.css";
import "./HomeForm.scss";
import axios from "axios";

const HomeForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        welcomeText: "",
        images: [
          { url: "", text: "" },
          { url: "", text: "" },
          { url: "", text: "" },
        ],
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (values.welcomeText.length < 20) {
          errors.welcomeText = "El texto debe ser al menos de 20 caracteres";
        }
        if (!values.welcomeText) {
          errors.welcomeText = "Ingrese texto de bienvenida";
        }

        for (const image of values.images) {
          if (!image.text) {
            errors.images = "Añadir textos de fotos";
          }
          if (!image.url) {
            errors.images = "Añadir 3 fotos";
          }
        }
        return errors;
      }}
    >
      {({ isSubmitting, values, setFieldValue, errors }) => {
        return (
          <Form className="form-container">
            <div className="input-group">
              <label htmlFor="welcomeText">Texto de Bienvenida</label>
              <Field
                type="text"
                as="textarea"
                name="welcomeText"
                className="input-field"
                id="welcomeText"
              />
              {errors.welcomeText ? (
                <div className="error-message">{errors.welcomeText}</div>
              ) : (
                <div>&nbsp;</div>
              )}
            </div>

            <div>Imagenes Para Slider</div>
            <div className="images-container">
              <FieldArray
                name="images"
                render={() =>
                  values.images.map((image, index) => (
                    <div key={index} className="input-group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (
                            e.currentTarget.files &&
                            e.currentTarget.files[0]
                          ) {
                            const reader = new FileReader();

                            reader.onload = function (e) {
                              setFieldValue(
                                `images.${index}.url`,
                                e.target.result
                              );
                            };

                            reader.readAsDataURL(e.currentTarget.files[0]);
                          }
                        }}
                      />

                      <div className="uploaded-image-container">
                        <img
                          className="uploaded-image"
                          src={image.url}
                          alt="decorative"
                          onError={(e) => {
                            e.target.src =
                              "https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
                          }}
                        />
                      </div>

                      <label htmlFor={index}>Texto de imagen</label>
                      <Field
                        type="text"
                        name={`images.${index}.text`}
                        className="input-field"
                        id={index}
                      />
                    </div>
                  ))
                }
              />
            </div>
            {errors.images ? (
              <div className="error-message">{errors.images}</div>
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
        );
      }}
    </Formik>
  );
};

export default HomeForm;
