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
    const [password, setPassword] = useState("");
    const [profile_image, setProfile_Image] = useState("");
    const [create, setCreate] = useState(true);

    const {id} = useParams()
    const url = `http://ongapi.alkemy.org/api/users`

    const submitForm = (values) => {
        if (create) {
            axios.post(`${url}`, {
                name: values.name,
                email: values.email,
                role_id: values.role_id,
                profile_image: values.profile_image.name,
                password: values.password
            })
                .then(function (response) {
                    setName(response.data.name)
                    setEmail(response.data.email)
                    setRole_id(response.data.role_id)
                    setProfile_Image(response.data.profile_image)
                    setPassword(response.data.password)
                })

        } else {
            axios.patch(`${url}/${id}`, {
                name: values.name,
                email: values.email,
                role_id: values.role_id,
                profile_image: values.profile_image.name,
                password: values.password

            })
                .then(function (response) {
                    alert(response.data.message)
                })
                .catch(error=>{
                    alert(error)
                })
        }
    }

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then(response => {
                setName(response.data.data.name)
                setEmail(response.data.data.email)
                setRole_id(response.data.data.role_id)
                setPassword(response.data.data.password)
                setCreate(false)
            })
            .catch(error => {
                alert(error)
            })
    }, []);

    const ErrorSchema = Yup.object().shape({
        name: Yup.string().required("Name is required.").min(4, "Name is too short"),
        email: Yup.string().required("Email is required.").email('Invalid email'),
        password: Yup.string().required("Password is required.").min(8, "Password is too short"),
        role_id: Yup.string().required("Role is required."),
        profile_image: Yup.string().required("Photo is required.")
    })

    const handleChange = (e, propsFormik) => {
        if (e.currentTarget.files && e.currentTarget.files[0]){
            const  reader = new FileReader();
            reader.onload = function (e){
                propsFormik.setFieldValue("profile_image", e.target.result);
            }
           reader.readAsDataURL(e.currentTarget.files[0]);
        }
    }

    return (
        <div>
            <Formik initialValues={{name, email, role_id, password, profile_image}}
                    onSubmit={(values => {
                        submitForm(values)
                    })}
                    validationSchema={ErrorSchema}
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
                                    <Field name={'password'} type={'password'} className="input-field"/>
                                    <small>{props.errors.password}</small>
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
                                            handleChange(event, props)
                                        }}
                                    />
                                    <small>{props.errors.profile_image}</small>
                                    <button type={'submit'}
                                            disabled={!props.isValid} className="submit-btn"> Send
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
}

export default UserForm;
