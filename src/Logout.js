import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
   
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
const navigate=useNavigate();
    const onSubmit = (data) => {
        console.log('Email:', data.email);
        console.log('Password:', data.password);
        alert('Sigin successful');
        navigate('/Home')
    };
function login(){
    
    navigate('/login')
}

    return (
        <div style={styles.container}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label>Name</label>
                    <input type='text' {...register('name',{required:'name is required',minLength:{value: 6,
                                message: 'Name must be at least 6 characters'}})} style={styles.input} 
                    placeholder='Enter your name'
                    ></input>
                    {errors.name && <p style={styles.error}>{errors.name.message}</p>}
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
                <button type="submit" style={styles.button}>Sign in</button>
            </form>
            <h3>Or</h3>
            <button onClick={login} style={styles.button}>Login</button>
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

export default Logout;