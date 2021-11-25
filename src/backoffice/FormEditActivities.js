import React, { useState } from 'react';
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

    const [ckeData, setCkeData] = useState('')
    const handleValues = (values) => {
        let error = {}
        if (!values.name) {
            error.name = 'Please complete the space';
        } else if (values.name.length < 2) {
            error.name = 'Title too short';
        }
        return error;
    }

    const handleCKEChange = (e, editor) => {
        const data = editor.getData();
        if (parse(data).props) {
            setCkeData(parse(data).props.children)
        } else {
            setCkeData('')
        }
    }
    return (
        <Formik
            initialValues={{
                name: activities.name,
            }}
            onSubmit={(values) => {
                values.description = ckeData
                if(activities === initialValues){
                    axios.post('http://ongapi.alkemy.org/api/news', values)
                        .then(res => alert(res))
                        .catch(e => alert(e))
                }else{
                    axios.path(`http://ongapi.alkemy.org/api/activities/${activities.id}`, values)
                    .then(res => alert(res))
                    .catch(e => alert(e))
                }

            }}
            validate={handleValues}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                <form className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
                    <div className="container w-50 bg-w-grey violet-border rounded-3 from__container">
                        <div className="mb-3 row">
                            <label htmlFor="staticname" className="col-12 col-form-label text-violet">name*</label>
                            <div className="col-12">
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
                                {touched.name && errors.name && <h5 className="fs-6 text-danger">{errors.name}</h5>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <CKEditor
                                editor={ClassicEditor}
                                data={activities.description}
                                onChange={(e, editor) => { handleCKEChange(e, editor) }}
                            />
                        </div>
                        <div className="row button__container p-5" >
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
