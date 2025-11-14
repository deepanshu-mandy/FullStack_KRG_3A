import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/authService';

const Signup = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        role: 'CUSTOMER', // Default role
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string().email('Invalid email format.').required('Email is required!'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required!'),
        role: Yup.string().required('Role is required!'),
    });

    const handleSignup = (formValue, { setSubmitting, setFieldError }) => {
        const { name, email, password, role } = formValue;

        AuthService.register(name, email, password, role).then(
            (response) => {
                // On successful registration, redirect to the login page
                alert('Registration successful! Please log in.');
                navigate('/login');
            },
            (error) => {
                const resMessage =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                
                // Show an error if the email is already taken
                setFieldError('email', 'This email is already registered.');
                setSubmitting(false);
            }
        );
    };

    return (
        <div className="form-container">
            <h2>Join ApnaDukaan</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignup}>
                 {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" component="div" className="alert-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="alert-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert-danger" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="role">Register as a:</label>
                            <Field as="select" name="role" className="form-control">
                                <option value="CUSTOMER">Customer</option>
                                <option value="SELLER">Seller</option>
                            </Field>
                            <ErrorMessage name="role" component="div" className="alert-danger" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Signup;
