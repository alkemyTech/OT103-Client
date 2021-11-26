import React from 'react';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import axios from 'axios';

const initialValues = {
    name: '',
    description: ''
}

export const FormEditActivities = ({ activities = initialValues }) => {

    const handleValues = (values) => {
        let error = {}
        if (!values.name) {
            error.name = 'Please complete the space';
        } else if (values.name.length < 2) {
            error.name = 'Title too short';
        }
        if (!values.description) {
            error.description = 'Please complete the space';
        } else if (values.description.length < 2) {
            error.name = 'Title too short';
        }
        return error;
    }

    return (
        <Formik
            initialValues={{
                name: activities.name,
                description: activities.description,
            }}
            onSubmit={(values) => {
                if (!activities.id) {
                    axios.post('http://ongapi.alkemy.org/api/activities', values)
                        .then(res => alert(res))
                        .catch(e => alert(e))
                } else {
                    axios.path(`http://ongapi.alkemy.org/api/activities/${activities.id}`, values)
                        .then(res => alert(res))
                        .catch(e => alert(e))
                }

            }}
            validate={handleValues}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                    <div >
                        <div>
                            <label>name*</label>
                            <div>
                                <input
                                    autoComplete="off"
                                    className="form-control bg-dark text-light mb-3"
                                    id="staticname"
                                    name="name"
                                    value={values.name}
                                    type="text"
                                    placeholder="Pon un nombre!"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {touched.name && errors.name && <h5>{errors.name}</h5>}
                            </div>
                        </div>
                        <div>
                            <CKEditor
                                editor={ClassicEditor}
                                data={activities.description}
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    if (parse(data).props && parse(data).props.children[1].props) {
                                        console.log(parse(data).props.children)
                                        setFieldValue('description', parse(data).props.children);
                                    } else {
                                        setFieldValue('description', '');
                                    }
                                }}
                                config={{
                                    cloudServices: {
                                        tokenUrl: "https://85122.cke-cs.com/token/dev/63f1e5122f7b89374a44f0ba134c7a670437bab84212188ac1b17d829d92",
                                        uploadUrl: "https://85122.cke-cs.com/easyimage/upload/",
                                    },
                                }}
                            />
                            {touched.description && errors.description && <h5>{errors.description}</h5>}
                        </div>
                        <div>
                            <button className="btn col-12 m-auto w-50 text-violet" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};
