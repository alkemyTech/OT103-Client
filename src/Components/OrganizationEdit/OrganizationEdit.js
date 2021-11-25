import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import axios from "axios";
import * as Yup from "yup";

const OrganizationEdit = () => {

    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");
    const [short_description, setShort_description] = useState("");
    const [long_description, setLong_description] = useState("");
    const [facebook_url, setFacebook_url] = useState("");
    const [linkedin_url, setLinkedin_url] = useState("");
    const [instagram_url, setInstagram_url] = useState("");
    const [twitter_url, setTwitter_url] = useState("");


    const EditForm = (values) => {
        // TODO: Implementar pegada a la API
    }

    const url = "http://ongapi.alkemy.org/api/organization"

    useEffect(() => {
        axios.get(`${url} `)

            .then(response => {
                setName(response.data.data.name)
                setLogo(response.data.data.email)
                setShort_description(response.data.data.short_description)
                setLong_description(response.data.data.long_description)
                setFacebook_url(response.data.data.facebook_url)
                setLinkedin_url(response.data.data.linkedin_url)
                setInstagram_url(response.data.data.instagram_url)
                setTwitter_url(response.data.data.twitter_url)

            })
            .catch(error => {
                alert(error)
            })
    }, []);

    const validUrl =  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9-_]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    const ErrorSchema = Yup.object().shape({
        name: Yup.string().required("Name is required.").min(4, "Name is too short"),
        logo: Yup.string().required("Logo is required."),
        short_description: Yup.string().required("Short Description is required."),
        long_description: Yup.string().required("Long Description is required."),
        facebook_url: Yup.string().matches(validUrl, "Enter a valid URL").required("URL is required."),
        linkedin_url: Yup.string().matches(validUrl, "Enter a valid URL").required("URL is required."),
        instagram_url:Yup.string().matches(validUrl, "Enter a valid URL").required("URL is required."),
        twitter_url:Yup.string().matches(validUrl, "Enter a valid URL").required("URL is required.")
    })

    return (
        <div>
            <Formik initialValues={{
                name,
                logo,
                short_description,
                long_description,
                facebook_url,
                linkedin_url,
                instagram_url,
                twitter_url
            }} onSubmit={(values => {
                EditForm(values)
            })} validationSchema={ErrorSchema}
                    enableReinitialize={true}
            >
                {
                    (props) => {
                        console.log(props)
                        return (
                            <Form>
                                <div>
                                    <h3>Information</h3>
                                    <label>Name: </label>
                                    <Field name={'name'} type={'text'}/>
                                    <small>{props.errors.name}</small>
                                    <label>Image: </label>
                                    <input
                                        type="file"
                                        name="logo"
                                        accept="image/png,image/jpeg"
                                        onChange={(event) => {
                                            props.setFieldValue("logo", event.target.files[0]);
                                        }}
                                    />
                                    <label>shortDescription: </label>
                                    <CKEditor
                                        name={"short_description"}
                                        editor={ClassicEditor}
                                        data={short_description}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setShort_description(data)
                                        }}
                                    />
                                    <small>{props.errors.short_description}</small>
                                    <label>Long Description: </label>
                                    <Field name={'long_description'} as={'textarea'} type={'text'}/>
                                    <small>{props.errors.long_description}</small>
                                    <label>Facebook: </label>
                                    <Field name={'facebook_url'} type={'text'}/>
                                    <small>{props.errors.facebook_url}</small>
                                    <label>Linkedin: </label>
                                    <Field name={'linkedin_url'} type={'text'}/>
                                    <small>{props.errors.linkedin_url}</small>
                                    <label>Instagram: </label>
                                    <Field name={'instagram_url'} type={'text'}/>
                                    <small>{props.errors.instagram_url}</small>
                                    <label>Twitter: </label>
                                    <Field name={'twitter_url'} type={'text'}/>
                                    <small>{props.errors.twitter_url}</small>
                                    <button type={'submit'}
                                            disabled={!props.isValid}> Send
                                    </button>
                                </div>

                            </Form>
                        )
                    }
                }
            </Formik>
            <h1>{short_description}</h1>
        </div>
    );
}

export default OrganizationEdit;
