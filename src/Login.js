import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
const navigate=useNavigate();
    const onSubmit = (data) => {
        console.log('Email:', data.email);
        console.log('Password:', data.password);
        alert('Login successful');
        navigate('/Home')
    };
const [name,setName]=useState();
    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Enter a valid email address'
                            }
                        })}
                        style={styles.input}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p style={styles.error}>{errors.email.message}</p>}
                </div>
                <div style={styles.inputContainer}>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })}
                        style={styles.input}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p style={styles.error}>{errors.password.message}</p>}
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    input: {
        width: '90%',
        padding: '10px',
        marginTop: '5px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px',
    },
};

export default Login;