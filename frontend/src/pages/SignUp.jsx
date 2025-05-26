import React from 'react';
import { Link } from "react-router"
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import triplyLogo from "../assets/logos/triply_logo.png"

export default function SignUp() {

    const handleSignup = async (e) => {
        e.preventDefault()
        const formData = await {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        } 
        console.log(formData);

        // Form Validation
        const namePattern = /^[A-Za-z ]{2,80}$/
        if (!namePattern.test(formData.name)) {
            alert("Name must be in characters.")
            return;
        }
       
        if (formData.email.length > 120){
            alert('Email is too long')
            return
        }

        const matchPassword = formData.password === formData.confirmPassword
        if (!matchPassword) {
            alert("Password and Confirm Password do not match.")
            return;
        }

        if (formData.password.length < 6 || formData.password.length > 80) {
            alert("Password must be between 6 and 80 characters long.")
            return
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>

            <div className='container d-flex flex-column justify-content-center align-items-center m-5'>

                <img 
                src={triplyLogo} 
                alt="triply logo" 
                className='img-fluid login_logo mb-4' width="200rem" height="200rem" />

                <h1 className='text-primary'>Sign-up here </h1><br />
                <form onSubmit={handleSignup} className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <TextField
                        id="name"
                        label='Name'
                        type='text'
                        name="name"
                        variant="outlined"
                        aria-label='name'
                        className='mb-3 w-100'
                        
                        title="Name must be between 2 and 80 characters long."
                        required
                    />

                    <TextField
                        id="email"
                        label='Email'
                        type='email'
                        name='email'
                        variant='outlined'
                        aria-label='email'
                        className='mb-3 w-100'
                        required
                    />

                    <TextField
                        id="password"
                        label='Password'
                        type='password'
                        name='password'
                        variant='outlined'
                        className='mb-3 w-100'
                        aria-label='password'
                        required
                    />

                    <TextField
                        id="confirmPassword"
                        label='Confirm Password'
                        type='password'
                        name='confirmPassword'
                        variant='outlined'
                        aria-label='confirmPassword'
                        className='mb-4 w-100'
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        className='w-100 m-2'>
                        submit
                    </Button>
                </form>

                <p className='regiP'>Already have an account? <Link to="/login" className='loginLink'>Login</Link>
                </p>
            </div>
        </div>
    );
}