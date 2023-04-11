import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import create from '../assets/icons/create.svg'
import { TextField, Button, Checkbox } from '@mui/material';

const Register = () => {

    const navigate = useNavigate()

    const [checked, setChecked] = useState(false)

    const handleChecked = () => setChecked(prev => !prev)

    return (
        <section className="bg-midWhite min-h-[100vh] px-4 py-4">
            <div className="max-w-3xl mx-auto">
                <div className="py-0.5">
                    <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}> undo </span>
                </div>

                <div className="w-full flex justify-center">
                    <img src={create} alt="Doctor" className="max-h-72" />
                </div>

                <h1 className="text-center font-semibold text-4xl my-4">Create a new account </h1>

                <div className="mx-auto max-w-lg">
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="First Name" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="Last Name" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="email" label="Email" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="password" label="Confirm Password" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-4 flex items-center">
                        <Checkbox
                            checked={checked}
                            onChange={handleChecked}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <p>I agree to the <span className='text-hint'>Terms of Service</span> and the <span className="text-hint">Privacy Policy</span></p>
                    </div>
                    <div className="mt-4">
                        <Button variant="contained" className="w-full" size="large">Sign up</Button>
                    </div>
                    <p className='text-center mt-2 mb-8'>Already have an account? <Link to='/login' className='text-hint'>Login</Link></p>
                </div>

            </div>
        </section>
    )
}

export default Register
