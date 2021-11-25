import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { petitionLogin } from '../../store/action/authActions';

export const LoginScreen = () => {
    const { error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleValues = ( values )=>{
        let error = {}
        if(!values.email){
            error.email = 'Please complete the space';
        }else if(values.email.length < 2){
            error.email = 'Email too short';
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            error.email = "The email can't contains spaces and simbols";
        }
        if(!values.password){
            error.password = 'Please complete the space';
        }else if(values.password.length < 1){
            error.password = 'password too short';
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)){
            error.password = "The password can't contains simbols and numbers";
        }
        return error;
        //Estos son la configuración para validar el form de Formik.
    }
        return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values)=>{
                dispatch(petitionLogin(values))
            }}
            validate={handleValues}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched })=>(
                <form className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeInUp" onSubmit={ handleSubmit }>
                    <div className="container w-50 bg-w-grey violet-border rounded-3 from__container">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-12 col-form-label text-violet">Email*</label>
                            <div className="col-12">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3"
                                 id="staticEmail"
                                 name="email"
                                 value={ values.email }
                                 type="text" 
                                 placeholder="challenge@alkemy.org"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.email && errors.email && <h1 className="fs-6 text-danger">{errors.email}</h1>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label 
                            htmlFor="inputPassword" 
                            className="col-12 col-form-label text-violet">Password*</label>
                            <div className="col-12">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3" 
                                 name="password"
                                 id="inputPassword"
                                 value={ values.password }
                                 type="password" 
                                 placeholder="react"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.password && errors.password && <h1 className="fs-6 text-danger">{errors.password}</h1>}
                                {error && <h1 className="fs-6 text-danger">{error}</h1>}
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
//Cabe recalcar que este componente es reutilizado de mi challenge anterior
