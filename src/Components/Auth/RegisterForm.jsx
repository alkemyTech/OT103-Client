import React, {useState} from 'react';
import '../FormStyles.css';
import { Formik } from 'formik'

const RegisterForm = () => {
    
    const [formEnviado, setFormEnviado] = useState(false)
    const [initialValues, setInitialValues] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    return (
        <Formik
            initialValues = {{
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword:''            
            }}

            validate={(values) => {

                let errores = {}


                if (!values.name) {
                    errores.name = 'Please enter a name'
                }

                if (!values.lastName) {
                    errores.lastName = 'Please enter a last name'
                }
                if (!values.email) {
                    errores.email = 'Please enter an email'
                }

                if (!values.password) {
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






                if (!values.confirmPassword) {
                    errores.confirmPassword = 'Please confirm password'
                } else if (values.confirmPassword !== values.password){
                    errores.confirmPassword = 'Passwords can not be different'
                }

                return errores
            }}

            onSubmit={(values, {resetForm}) => {
                setInitialValues({
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                })
                //localStorage.setItem('token', 'tokenValueExample')
                setFormEnviado(true)
                setTimeout(() => {
                    setFormEnviado(false)
                }, 5000);
                alert(
                            `
                            Name: ${values.name}
                            Last name: ${values.lastName}
                            Email: ${values.email}
                            Password: ${values.password}                    
                            `
                        )
                resetForm()
            }}
        >

            {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                <form className="form-container" onSubmit={handleSubmit}>
                    <input 
                        className="input-field" 
                        type="text" 
                        name="name"
                        id='name'
                        value={values.name} 
                        onChange={handleChange} 
                        placeholder="Enter name"
                        onBlur={handleBlur}
                    />

                    {touched.name && errors.name && <div className='form-error'>{ errors.name }</div>}
                        
                        
                    

                    <input 
                        className="input-field" 
                        type="text" 
                        name="lastName"
                        id='lastName'
                        value={values.lastName}
                        onChange={handleChange} 
                        placeholder="Enter last name"
                        onBlur={handleBlur}
                    />
                        {touched.lastName && errors.lastName && <div className='form-error'>{errors.lastName}</div>}
                        
                        

                    <input 
                        className="input-field" 
                        type="email" 
                        name="email"
                        id='email'
                        value={values.email} 
                        onChange={handleChange} 
                        placeholder="Enter email"
                        onBlur={handleBlur}
                    />
                        {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}

                    

                    <input 
                        className="input-field" 
                        type="password" 
                        name="password"
                        id='password'
                        value={values.password} 
                        onChange={handleChange} 
                        placeholder="Enter password"
                        onBlur={handleBlur}
                    />
                        {touched.password && errors.password && <div className='form-error'>{errors.password}</div>}
                        
                        

                    <input 
                        className="input-field" 
                        type="password" 
                        name="confirmPassword"
                        id='confirmPassword'
                        value={values.confirmPassword} 
                        onChange={handleChange} 
                        placeholder="Confirm password"
                        onBlur={handleBlur}
                    />
                        {touched.confirmPassword && errors.confirmPassword && <div className='form-error'>{errors.confirmPassword}</div>}
                        
                        
                    <button
                        className="submit-btn"
                        type="submit">
                        Register
                    </button>

                    {
                        formEnviado && <p className="form-success">Form submitted successfully</p>                      
                            
                        
                    }
                    
                </form>
                
            )}

        </Formik>
    );
}
 
export default RegisterForm;