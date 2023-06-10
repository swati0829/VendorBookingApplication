import './Header.css'
import { useState } from 'react';
import LoginPage from './Login';
import SignUpPage from './SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <header className="Header bg-black">
            <nav class="flex items-center justify-between h-20 w-auto">

                <div class="flex items-center flex-shrink-0 text-white px-10">
                    <h1 onClick={() => navigate('/')} style={{ cursor: "pointer" }} >Vendor Booking Application</h1>
                </div>

                <div class="flex items-end w-1/5 justify-center font-medium px-5">
                    <div
                        class="bg-black h-12 flex justify-end items-center w-20 rounded-full flex-none flex-grow-0 hover:bg-blue-200">
                        <Link to="/optionlogin" onClick={() => setSelectedOption('optionLogin')} class="text-center text-base text-white w-full justify-center hover:text-black">Login</Link>
                    </div>
                    <div
                        class="bg-white h-12 flex justify-end items-center w-20 rounded-full flex-none flex-grow-0">
                        <Link to="/optionsignUp" onClick={() => setSelectedOption('optionSignUp')} class="text-center text-base text-black w-full justify-center">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar