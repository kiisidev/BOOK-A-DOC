import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import doctorsvg from '../assets/icons/doctors.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useFetch from '../hooks/useFetch';
import { endpoint } from '../utlis/endpoints';


const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const settings = {
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    const submit = async () =>{

        try{
            const res = await fetch(`${endpoint}/login`, settings)
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    

  return (
    <section className="bg-midWhite min-h-[100vh] px-4 py-4">
        <div className="max-w-3xl mx-auto">
            <div className="py-0.5">
                <span className="material-symbols-outlined cursor-pointer" onClick={()=> navigate(-1)}> undo </span>
            </div>

            <div className="w-full flex justify-center">
                <img src={doctorsvg} alt="Doctor" className="max-h-72"/>
            </div>

            <h1 className="text-center font-semibold text-4xl my-4">Welcome back 👋</h1>

            <div className="mx-auto max-w-lg">
            <div className="mt-8">
                <TextField id="outlined-basic-email" value={email} onChange={e => setEmail(e.target.value)} type="email" label="Email" variant="outlined" className="w-full"/>
            </div>
            <div className="mt-8">
                <TextField id="outlined-basic-password" value={password} onChange={e => setPassword(e.target.value)} type="password" label="Password" variant="outlined" className="w-full" />
            </div>
            <div className="mt-8">
                <Button variant="contained" className="w-full" size="large" onClick={submit}>Login</Button>
            </div>
            <p className='text-center mt-2 mb-8'>Don't have an account? <Link to='/register' className='text-hint'>Sign up</Link></p>
            </div>

        </div>
    </section>
  )
}

export default Login
