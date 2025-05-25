import React from 'react';
import { useState } from 'react'
import { Link } from "react-router"
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import triplyLogo from "../assets/logos/triply_logo.png"

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            // setPassword("");

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
                <form action="" className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <TextField
                        id="outlined-basic"
                        label='Name'
                        type='text'
                        name="name"
                        variant="outlined"
                        className='mb-3 w-100'
                        required
                    />

                    <TextField
                        id="outlined-basic"
                        label='Email'
                        type='email'
                        name="email"
                        variant="outlined"
                        className='mb-3 w-100'
                        required
                    />

                    <TextField
                        id="outlined-basic"
                        label='Password'
                        type='password'
                        name="password"
                        variant="outlined"
                        className='mb-3 w-100'
                        required
                    />

                    <TextField
                        id="outlined-basic"
                        label='Confirm Password'
                        type='password'
                        name="confirmPassword"
                        variant="outlined"
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