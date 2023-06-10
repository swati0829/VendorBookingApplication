import './Header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  return (
    <div class="bg-white h-screen w-auto flex flex-row">
      <div class="h-screen w-1/2 flex justify-center items-center">
        <div class='text-5xl font-medium'>
          <button onClick={() => navigate("/optionsignup/signupvendor")} >Create Account to deliver</button>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      </div>
      <div class="h-screen w-1/2 flex justify-center items-center">
        <div class='text-5xl font-medium'>
          <button onClick={() => navigate("/optionsignup/signupuser")}  >Create Account to Order</button>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
