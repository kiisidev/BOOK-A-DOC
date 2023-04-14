import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import create from '../assets/icons/create.svg'
import { TextField, Button } from '@mui/material';
import NavigateNext from '@mui/icons-material/NavigateNext';
import SkipNext from '@mui/icons-material/SkipNext';
import useFetch from '../hooks/useFetch'
import { endpoint } from '../utlis/endpoints';

const Profile = () => {

    const navigate = useNavigate()

    const settings = {
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    };

    const { data, loading, error } = useFetch(`${endpoint}/verify-user`, settings)

    console.log(data)
    console.log(loading)
    console.log(error)

    return (
        <section className="bg-midWhite min-h-[100vh] px-4 py-4">
            <div className="max-w-3xl mx-auto">
                <div className="py-0.5">
                    <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}> undo </span>
                </div>

                <div className="w-full flex justify-center">
                    <img src={create} alt="Doctor" className="max-h-72" />
                </div>

                <h1 className="text-center font-semibold text-4xl my-4">Tell us a more about yourself</h1>

                <div className="mx-auto max-w-lg">
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="Height" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="Weight" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="Blood Group" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-8">
                        <TextField id="outlined-basic" type="text" label="Genotype" variant="outlined" className="w-full" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p>Why do we need this information, <span className="text-hint">Learn more</span></p> <Link to='/user-info'><Button variant="text" endIcon={<SkipNext />}>Skip</Button></Link>
                    </div>
                    <div className="mt-4 mb-8">
                        <Button variant="contained" className="w-full" size="large" endIcon={<NavigateNext />}>Next</Button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Profile
