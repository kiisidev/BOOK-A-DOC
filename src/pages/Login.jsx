import React from 'react'
import { useNavigate } from 'react-router-dom'
import doctorsvg from '../assets/icons/doctors.svg'

const Login = () => {

    const navigate = useNavigate()

  return (
    <section className="bg-midWhite min-h-[100vh] px-4 py-4">
        <div className="max-w-3xl mx-auto">
            <div className="py-0.5">
                <span className="material-symbols-outlined cursor-pointer" onClick={()=> navigate(-1)}> undo </span>
            </div>

            <div className="w-full flex justify-center">
                <img src={doctorsvg} alt="Doctor" className="max-h-96"/>
            </div>
        </div>
    </section>
  )
}

export default Login