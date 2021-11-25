import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik'

const LoginForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: ''
    });

    const [formEnviado, setFormEnviado] = useState(false)


    return (
        <Formik
            initialValues = {{                
                email: '',
                password: '',                          
            }}

            validate={(values) => {

                let errores = {}
                
                if (!values.email.trim()) {
                    errores.email = 'Please enter an email'
                }
                
                if (!values.password.trim()) {
                    errores.password = 'Please enter a password'

                } else if (values.password.length < 6) {
                    errores.password = 'Your password must be at least 6 characters'

                } else if (values.password.search(/[a-z]/i) < 0) {
                    errores.password = "Your password must contain at least one letter."

                } else if (values.password.search(/[0-9]/) < 0) {
                    errores.password = "Your password must contain at least one digit."
                }

                else if (values.password.search(/(?=.*[!@#$%^&*])/)) {
                    errores.password = "Your password must contain at least one special character."
                }

                return errores
                




            }}
            onSubmit={(values, {resetForm}) => {
                
                setInitialValues({
                    email: values.email,
                    password: values.password,
                })
                //localStorage.setItem('token', 'tokenValueExample')
                setFormEnviado(true)
                setTimeout(() => {
                    setFormEnviado(false)
                }, 10000);
                alert(
                    `
                    Email: ${values.email}
                    Password: ${values.password}                    
                    `
                )
                resetForm()
            }}
        
        >

            {({errors, values,touched, handleSubmit, handleChange, handleBlur}) => (
                <form className="form-container" onSubmit={handleSubmit}>
                    <input 
                        className="input-field"
                        id='email'
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange}
                        placeholder="Enter email"
                        onBlur={handleBlur}
                    />

                    {
                        touched.email && errors.email && <div className='form-error'>{errors.email}</div>
                    }

                    <input 
                        className="input-field"
                        id='password'
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange} 
                        placeholder="Enter password"
                        onBlur={handleBlur}
                    />
                    {
                        touched.password && errors.password && <div className='form-error'>{errors.password}</div>
                    }
                        
                        
                    <button className="submit-btn" type="submit">Log In</button>
                    {
                        formEnviado && <p className="form-success">Log in successfull</p>
                    }
                </form>                
            )}

        </Formik>
    );
}
 
export default LoginForm;