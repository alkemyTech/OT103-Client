import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import '../FormStyles.css';
import axios from "axios";
import {useParams} from "react-router-dom";
import '../FormStyles.css'

const UserForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role_id, setRole_id] = useState("");
    const [create, setCreate] = useState(true);

    const {id} = useParams()
    const url = `http://ongapi.alkemy.org/api/users`

    const submitForm = (values) => {
        if (create) {
            axios.post(`${url}`, {
                name: values.title,
                email: values.email,
                role_id: values.role_id,
                profile_image: values.profile_image.name,
            })
                .then(function (response) {
                    setName(response.data.name)
                    setEmail(response.data.email)
                    setRole_id(response.data.role_id)
                })

        } else {
            axios.put(`${url}/${id} `, {
                name: values.title,
                email: values.email,
                role_id: values.role_id,
                profile_image: values.profile_image.name,

            })
                .then(function (response) {
                    setName(response.data.name)
                    setEmail(response.data.email)
                    setRole_id(response.data.role_id)
                })
        }
    }

    useEffect(() => {
        axios.get(`${url} `)
            .then(response => {
                setCreate(false)
                setName(response.data.data[id].name)
                setEmail(response.data.data[id].email)
                setRole_id(response.data.data[id].role_id)
            })
            .catch(error => {
                alert(error)
            })
    }, []);

    const ErrorSchema = Yup.object().shape({
        name: Yup.string().required("Name is required.").min(4, "Name is too short"),
        email: Yup.string().required("Email is required.").email('Invalid email'),
        pass: Yup.string().required("Password is required.").min(8, "Password is too short"),
        role_id: Yup.string().required("Role is required."),
        profile_image: Yup.string().required("Photo is required.")
    })

    return (
        <div>
            <Formik initialValues={{name, email, role_id}} onSubmit={(values => {
                submitForm(values)
            })} validationSchema={ErrorSchema}
                    enableReinitialize={true}
            >
                {
                    (props) => {
                        return (
                            <Form>
                                <div className="form-container">
                                    <h3>Information</h3>
                                    <label>Name: </label>
                                    <Field name={'name'} type={'text'} className="input-field"/>
                                    <small>{props.errors.name}</small>
                                    <label>Email: </label>
                                    <Field name={'email'} type={'email'} className="input-field"/>
                                    <small>{props.errors.email}</small>
                                    <label>Password: </label>
                                    <Field name={'pass'} type={'password'} className="input-field"/>
                                    <small>{props.errors.pass}</small>
                                    <label>Role: </label>
                                    <Field name={'role_id'} as="select" className="select-field">
                                        <option value="">-- Select role --</option>
                                        <option value="0">User</option>
                                        <option value="1">Administrator</option>
                                    </Field>
                                    <small>{props.errors.role_id}</small>
                                    <label>Image: </label>
                                    <input
                                        type="file"
                                        name="profile_image"
                                        accept="image/png,image/jpeg"
                                        onChange={(event) => {
                                            props.setFieldValue("profile_image", event.target.files[0]);
                                        }}
                                    />
                                    <button type={'submit'}
                                            disabled={!props.isValid} className="submit-btn"> Send
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
            <div>
                {name && <h3><strong>Name:</strong> {name} </h3>}
                {email && <h3><strong>Email:</strong> {email}</h3>}
                {role_id && <h3><strong>Role:</strong> {role_id}</h3>}

            </div>
        </div>
    );
}

export default UserForm;
