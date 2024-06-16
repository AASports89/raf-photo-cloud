import './signup.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");

        var raw = JSON.stringify({
            email, password, name
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // @ts-ignore
        fetch("https://63b250a70d51f5b297272159.mockapi.io/api/v1/users", requestOptions)
            .then(response => response.text())
            .then(result => navigate('/'))
            .catch(error => setError('Error '));
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
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (

        <div className='row justify-content-center'>
            <Navbar />
            <form className='modal-sm' onSubmit={handleSubmit}>

                <div className='row justify-content-center'>
                    <h2 id='signupHeader' className="card"><i className="fa-solid fa-user"></i> Create Account </h2>
                    <label htmlFor="inputEmail" className="sr-only"> Name</label>
                    <input type="text" id="inputName" value={name} onChange={handleNameChange} className="form-control" placeholder="Name" required autoFocus />
                </div>
                <div className='row justify-content-center'>
                    <label htmlFor="inputEmail" className="sr-only"><i className="fa-solid fa-user"></i> Email address</label>
                    <input type="email" id="inputEmail" value={email} onChange={handleEmailChange} className="form-control" placeholder="Email address" required autoFocus />
                </div>
                <div className='row justify-content-center'>
                    <label htmlFor="inputPassword" className="sr-only"><i className="fa-solid fa-user"></i> Password</label>
                    <input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
                <div className='row justify-content-center'>
                    <Link to={`/`}><button id='back-btn' className="btn btn-lg btn-primary btn-block" type="button"> Back </button></Link>
                </div>
                <button id='signup-btn' className="btn btn-lg btn-primary btn-block" type="submit"> Sign Up </button>
                {<div className='error'>{error}</div>}
            </form>
        </div>
    );
}

export default SignUp;