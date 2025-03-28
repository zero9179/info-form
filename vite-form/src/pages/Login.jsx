import React, { useRef } from 'react'
// import axios from "axios"

function Login() {
    const numberRef = useRef()
    const passwardRef = useRef()

    
    // console.log(data)
     function handlesubmit(e) {
        let data = {
            mobile: numberRef.current.value,
            passward: passwardRef.current.value
        }
        e.preventDefault()
        console.log("data",data)
     }
    

    return (
        <div className='h-screen w-screen flex items-center justify-center' >
            <img className='absolute h-screen w-screen -z-1 ' src="././public/assets/loginBack.jpg" alt="background" />
            <div className='flex flex-col gap-6 items-center justify-center border-2 rounded-md border-black p-5 pb-16 backdrop-blur-[3px] '>
                <h1 className='text-white font-bold text-2xl'>Login</h1>
                <form className='flex flex-col gap-6 items-center justify-center   '>
                    <input ref={numberRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white text-white' type="text" placeholder='Number' />
                    <input ref={passwardRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white text-white' type="passward" placeholder='Passward' />
                    <button onClick={handlesubmit}  className='w-[350px] p-2 bg-white rounded-lg' >Login</button>
                </form>
                <h1>Don't have an account? <span className='text-white font-bold hover:underline decoration-2'>Register</span> </h1>
            </div>
        </div>
    )
}

export default Login
