import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/authService';

const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format.').required('Email is required!'),
        password: Yup.string().required('Password is required!'),
    });

    const handleLogin = (formValue, { setSubmitting, setFieldError }) => {
        const { email, password } = formValue;

        AuthService.login(email, password).then(
            (data) => {
                // On successful login, redirect based on the user's role
                if (data.role === 'ROLE_SELLER') {
                    navigate('/seller-portal');
                } else {
                    navigate('/customer-portal');
                }
                window.location.reload(); // Refresh to update navbar state
            },
            (error) => {
                const resMessage =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();

                // Display error message to the user
                setFieldError('password', 'Invalid credentials. Please try again.');
                setSubmitting(false);
            }
        );
    };

    return (
        <div className="form-container">
            <h2>Login to ApnaDukaan</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
                {({ isSubmitting }) => (
                    <Form>
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
                            <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                {isSubmitting && <span className="spinner-border-sm"></span>}
                                <span>Login</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
