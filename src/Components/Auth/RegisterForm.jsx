import React from 'react';
import '../FormStyles.css';
import { Formik } from 'formik'

const RegisterForm = () => {
    // const [initialValues, setInitialValues] = useState({
    //     name: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword:''
    // })
    
    // const handleChange = (e) => {
    //     if(e.target.name === 'name'){
    //         setInitialValues({...initialValues, name: e.target.value})
    //     } if(e.target.name === 'lastName'){
    //         setInitialValues({...initialValues, lastName: e.target.value})
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('form enviado')
    //     console.log(initialValues);
    //     localStorage.setItem('token', 'tokenValueExample')
    // }

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
                    errores.name('Please enter a name')
                }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                    errores.name = 'El nombre solo puede contener letras y espacios'
                }

                if (!values.lastName) {
                    errores.lastName('Please enter a lastName')
                }
                if (!values.email) {
                    errores.email('Please enter an email')
                }
                if (!values.password) {
                    errores.password('Please enter a password')
                }
                if (!values.confirmPassword) {
                    errores.confirmPassword('Please confirm password')
                }

                return errores
            }}

            onSubmit={(values, {resetForm}) => {
                resetForm()
                console.log('form enviado')
                console.log(values)
                localStorage.setItem('token', 'tokenValueExample')
            }}
        >

            {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                <form className="form-container" onSubmit={handleSubmit}>
                    <input 
                        className="input-field" 
                        type="text" 
                        name="name" 
                        value={values.name} 
                        onChange={handleChange} 
                        placeholder="Enter name"
                        onBlur={handleBlur}
                    >

                        {touched.name && errors.name && <div className='error'>{ errors.name }</div>}
                        
                    </input>

                    <input 
                        className="input-field" 
                        type="text" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={handleChange} 
                        placeholder="Enter last name"
                        onBlur={handleBlur}
                    >
                        {touched.lastName && errors.lastName && <div className='error'>{errors.lastName}</div>}
                        
                        </input>

                    <input 
                        className="input-field" 
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                        placeholder="Enter email"
                        onBlur={handleBlur}
                    >
                        {touched.email && errors.email && <div className='error'>{errors.email}</div>}

                    </input>

                    <input 
                        className="input-field" 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange} 
                        placeholder="Enter password"
                        onBlur={handleBlur}
                    >
                        {touched.password && errors.password && <div className='error'>{errors.password}</div>}
                        
                        </input>

                    <input 
                        className="input-field" 
                        type="password" 
                        name="confirmPassword" 
                        value={values.confirmPassword} 
                        onChange={handleChange} 
                        placeholder="Confirm password"
                        onBlur={handleBlur}
                    >
                        {touched.confirmPassword && errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
                        
                        </input>
                    <button
                        className="submit-btn"
                        type="submit">
                        Register
                    </button>

                    <p className="form-success">Form enviado con éxito</p>
                </form>
                
            )}

        </Formik>
    );
}
 
export default RegisterForm;