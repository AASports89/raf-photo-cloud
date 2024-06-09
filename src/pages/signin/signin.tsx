import './signin.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        var formdata = new FormData();

        var requestOptions = {
            method: 'GET',
            body: formdata,
            redirect: 'follow'
        };

        const url = `http://localhost:3000/api/get/userprofilefromdb?email=${email}&pwd=${password}`
        // @ts-ignore
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => navigate("https://aasports89.github.io/raf-photo-cloud/"))
            .catch(error => setError('Something Went Wrong'));
    }

    // @ts-ignore
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    // @ts-ignore
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    // @ts-ignore
    return (
        <div className='row justify-content-center'>
            <Navbar />
            <form className='modal-sm' onSubmit={handleSubmit}>
                <div className='row justify-content-center'>
                    <h2 id='signinHeader' className="card">Log In </h2>
                    <div className='row justify-content-center'>
                        <label htmlFor="inputEmail" className="sr-only"> Email address</label>
                        <input type="email" id="inputEmail" value={email} onChange={handleEmailChange} className="form-control" placeholder="Email address" required autoFocus />
                    </div>
                    <div className='row justify-content-center'>
                        <label htmlFor="inputPassword" className="sr-only"> Password</label>
                        <input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Password" required />
                    </div>
                    <div className='row justify-content-center'>
                        <Link to={'/signup'}><button id='signup-btn' className="btn btn-lg btn-primary btn-block" type="button"> Sign Up </button></Link>
                    </div>
                    <div className='row justify-content-center'>
                        <button id='signin-btn' className="btn btn-lg btn-primary btn-block" type="submit"> Sign In </button>
                    </div>
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </div>
    );
}

export default SignIn;