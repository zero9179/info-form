import React, { useRef } from 'react'
import axios from "axios"

function Register() {
    const nameRef = useRef()
    const numberRef = useRef()
    const passwardRef = useRef()
    const confirmPasswardRef = useRef()

    async function postData(data) {
        let posted = await axios.post("http://localhost:8080/users", data)
        return posted
    }

    async function registerHandle(e) {
        e.preventDefault()
        let data
        if (confirmPasswardRef.current.value ===
            passwardRef.current.value) {
         data = {
                userName: nameRef.current?.value,
                number: numberRef.current?.value,
                passward: passwardRef?.current.value
            }
        } else {
            alert("reenter confirm pass")
        }
        postData(data)
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center' >
            <img className='absolute h-screen w-screen -z-1 ' src="././public/assets/loginBack.jpg" alt="background" />
            <div className='flex flex-col gap-6 items-center justify-center border-2 rounded-md border-black p-5 pb-16 backdrop-blur-[3px] '>
                <h1 className='text-white font-bold text-2xl'>Register</h1>

                <form className='flex flex-col gap-6 items-center justify-center   '>
                    <input ref={nameRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white  outline-none bg-gray-800 text-white' type="text" placeholder='Username' />

                    <input ref={numberRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white outline-none bg-gray-800 text-white' type="number" placeholder='Number' />

                    <input ref={passwardRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white outline-none bg-gray-800 text-white' type="passward" placeholder='Passward' />

                    <input ref={confirmPasswardRef} className='w-[350px] border-1 border-black rounded-md p-2 placeholder:text-white outline-none bg-gray-800 text-white' type="passward" placeholder='Confirm Passward' />

                    <button onClick={registerHandle} className='w-[350px] p-2 bg-white rounded-lg' >Register</button>
                </form>

            </div>
        </div>
    )
}

export default Register
