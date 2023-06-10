import './App.css';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import LoginVendor from './Components/LoginVendor'
import LoginUser from './Components/LoginUser'
import SignUpVendor from './Components/SignUpVendor'
import SignUpUser from './Components/SignUpUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/optionlogin" element={<Login />} />
          <Route exact path="/optionsignup" element={<SignUp />} />
          <Route exact path="/optionlogin/loginvendor" element={<LoginVendor />} />
          <Route exact path="/optionlogin/loginuser" element={<LoginUser />} />
          <Route exact path="/optionsignup/signupvendor" element={<SignUpVendor />} />
          <Route exact path="/optionsignup/signupuser" element={<SignUpUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
