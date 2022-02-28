import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function loginForm() {

    const initialValues = {
        user: '',
        pass: ''
    }
    const loginSchema = Yup.object().shape({

        user: Yup.string()
            .min(6, 'User too Short')
            .max(12, 'Username too long')
            .required('User name required'),
        pass: Yup.string()
            .min(8, 'Password too short')
            .required('Password is required')
    })

    return (
        <div>
            <h2>Login Form</h2>
            <Formik
                initialValues = { initialValues }
                validationSchema={loginSchema}
                
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => (
                    <Form>
                        <label htmlFor='user'>User Name</label>
                        <Field id="user" type="text" name="user" placeholder="Your username" className="form-control mb-2" />
                        {
                            errors.user && touched.user && (
                                <ErrorMessage name='user' component='div'></ErrorMessage>
                            )
                        }
                        
                        <label htmlFor='pass'>User Password</label>
                        <Field id="pass" type="text" name="pass" placeholder="Your Password" className="form-control mb-2" />
                        {
                            errors.pass && touched.pass && (
                                <ErrorMessage name='pass' component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit" className="btn btn-outline-dark mb-2">Login</button>
                        {isSubmitting ? (<p>Login...</p>): null}
                    </Form>
                )
                }
                
            </Formik>
        </div>
    );
    
}

export default loginForm;