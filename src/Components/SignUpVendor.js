import React, { useState } from 'react'
import { Facebook, GitHub, Google } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  const LoginForm = () => {
    return (
      // 
      <div class="h-screen w-full flex justify-center flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <div className="flex flex-col justify-center items-center rounded-md shadow-2xl h-2/3 w-full bg-black">
          {/* <div className="inline-block justify-center w-20 border-blue-400"></div> */}
          <h3 className='text-4xl font-semibold text-white'>Login</h3>
          <div className='flex space-x-2 m-4 items-center justify-center'>
            <div className="socialIcon border-white">
              <Facebook className="text-white" />
            </div>
            <div className="socialIcon border-white">
              <GitHub className="text-white" />
            </div>
            <div className="socialIcon border-white">
              <Google className="text-white" />
            </div>
          </div>
          {/* Inputs */}
          <div className='flex flex-col items-center justify-center'>
            <input type='email' className='rounded-md px-2 py-1 w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
            <input type='text' className='rounded-md px-2 py-1 w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Username'></input>
            <input type="password" className='rounded-md px-2 py-1 w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
            <button className='rounded-md m-2 text-black text-xl font-medium bg-blue-200 w-full px-4 py-2 shadow-md hover:bg-gray-200 transition duration-200 ease-in'>
              Sign In
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-1/2 border-grey-200 border-solid"></div>
          <p className='text-white mt-8 text-sm'>Don't have an account?</p>
          <p className='text-white mb-8 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Create a New Account?</p>
        </div>
      </div>
    )
  }

  const SignUpForm = () => {
    return (
      <div class="h-screen w-full flex justify-center flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <div className="flex flex-col justify-center items-center rounded-md shadow-2xl h-2/3 w-full bg-black">
          {/* <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div> */}
          <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
          <div className='flex space-x-2 m-4 items-center justify-center'>
            <div className="socialIcon border-white">
              <Facebook className="text-white" />
            </div>
            <div className="socialIcon border-white">
              <GitHub className="text-white" />
            </div>
            <div className="socialIcon border-white">
              <Google className="text-white" />
            </div>
          </div>
          {/* Inputs */}
          <div className='flex flex-col items-center justify-center mt-2'>
            <input type="text" className='rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
            <input type='email' className='rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
            <input type="number" className='rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Phone Number'></input>
            <input type="password" className='rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
            <button className='rounded-md m-2 text-black text-xl font-medium bg-blue-200 w-full px-4 py-2 shadow-md hover:bg-gray-200 transition duration-200 ease-in'>
              Sign Up
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-1/2 border-white border-solid"></div>
          <p className='text-white mt-4 text-sm'>Already have an account?</p>
          <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => navigate("/optionlogin/loginvendor")}>Sign In to your Account?</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 flex flex-col min-screen">
      <main className="h-full flex items-center w-full px-2 md:px-20 justify-center align-center">
        {

          isLogin ? (
            <SignUpForm />
          ) : (
            <LoginForm />
          )
        }
      </main>
    </div>
  )
}

export default LoginUser