import React, { useState } from 'react'
import LoginVendor from './LoginVendor'
import LoginUser from './LoginUser'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    return (
        <div>
            <div class="bg-white h-screen w-auto flex flex-row">
                <div class="h-screen w-1/2 flex justify-center items-center">
                    <div class='text-5xl font-medium'>
                        <button onClick={() => navigate("/optionlogin/loginvendor")}>Sign In to deliver</button>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </div>
                </div>
                <div class="h-screen w-1/2 flex justify-center items-center">
                    <div class='text-5xl font-medium'>
                        <button onClick={() => navigate("/optionlogin/loginuser")} >Sign In to Order</button>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </div>
                </div>
            </div>

            {/* <div>
            {
            
                isLogin? (
                <LoginVendor/>
                ):(
                <LoginUser/>
                )
            }
        </div> */}
        </div>
    );
}

export default Login;
