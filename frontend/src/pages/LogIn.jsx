import React from 'react'
import { Link } from 'react-router'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import triplyLogo from "../assets/logos/triply_logo.png"

export default function LogIn() {

    const handleLogin = async (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(formData);

        // Form Validation
        if (formData.email.length > 120) {
            alert('Email is too long')
            return
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
                    className='img-fluid login_logo mb-4'
                    width="200rem" height="200rem" />

                <h1 className='text-primary'>LogIn here </h1>
                <br />
                <form onSubmit={handleLogin}>
                    <TextField
                        id="email"
                        label='Email'
                        type='email'
                        name="email"
                        variant="outlined"
                        className='mb-3 w-100'
                        required
                    />

                    <TextField
                        id="password"
                        label='Password'
                        type='password'
                        name="password"
                        variant="outlined"
                        className='mb-4 w-100'
                        required
                    />

                    <Button
                        type="submit"
                        className='w-100 mb-2'
                        variant="contained">
                        <Link to="#" 
                        className='submitBtn'>
                        Log in
                        </Link>
                    </Button>
                </form>

                <p className='regiP'>Don't have account? <Link to="/signUp" className='loginLink'>SignUp here</Link></p>
            </div>

        </div>
    );
}
