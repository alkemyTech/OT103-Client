import React from 'react';
import { Formik } from 'formik';

export const FormEditActivities = () => {

    const handleValues = ( values )=>{
        let error = {}
        if(!values.name){
            error.name = 'Please complete the space';
        }else if(values.name.length < 2){
            error.name = 'name too short';
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.name)){
            error.name = "The name can't contains spaces and simbols";
        }
        if(!values.description){
            error.description = 'Please complete the space';
        }else if(values.description.length < 1){
            error.description = 'description too short';
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.description)){
            error.description = "The description can't contains simbols and numbers";
        }
        return error;
        //Estos son la configuración para validar el form de Formik.
    }
        return (
        <Formik
            initialValues={{
                name: '',
                description: '',
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validate={handleValues}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched })=>(
                <form className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeInUp" onSubmit={ handleSubmit }>
                    <div className="container w-50 bg-w-grey violet-border rounded-3 from__container">
                        <div className="mb-3 row">
                            <label htmlFor="staticname" className="col-12 col-form-label text-violet">name*</label>
                            <div className="col-12">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3"
                                 id="staticname"
                                 name="name"
                                 value={ values.name }
                                 type="text" 
                                 placeholder="challenge@alkemy.org"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.name && errors.name && <h1 className="fs-6 text-danger">{errors.name}</h1>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label 
                            htmlFor="inputdescription" 
                            className="col-12 col-form-label text-violet">description*</label>
                            <div className="col-12">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3" 
                                 name="description"
                                 id="inputdescription"
                                 value={ values.description }
                                 type="text" 
                                 placeholder="react"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.description && errors.description && <h1 className="fs-6 text-danger">{errors.description}</h1>}
                            </div>
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
