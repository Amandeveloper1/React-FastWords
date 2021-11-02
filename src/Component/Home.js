import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import './Css/home.css';
import { GoogleLogin } from 'react-google-login';


export default function Home(props) {
    
    let history = useHistory();
    const setnowporgress = () => {
        props.progress(10)
        setTimeout(() => {
            props.progress(50)
            props.progress(100)
        }, 100);
    }


    let host = 'http://localhost:5000';
    const [credential, setCredential] = useState({ email: '', password: '' });
    const clientId = '598459928179-h167auc2o9o1qg9cgnn77amapl6k8t75.apps.googleusercontent.com';

    const onLoginSuccess = async (res) => {

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: res.profileObj.email, password: 'loginwithgoogle' })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            setCredential({ email: '', password: '' })
            alert('Your are Login successfully');
            history.push('/account');
        }
    }
    const onLoginFailure = (res) => {
        console.log('login Failure.', res);
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            setCredential({ email: '', password: '' })

            alert('Your are Login successfully');
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="back-content container">
                <div className="content-site" data-aos="fade-right" data-aos-duration="2000">
                    <h2 className="rainbow-text">Hi User,</h2>
                    <div className="c-text-s">That the website help speed up your typing speed. </div>
                    <p className="para-content">That the best opportunity to speed up your speed and participate in competition more information for so go in competition section.</p>
                    <div className="c-button-s">
                        <Link to="/typeword" className="typewordsend" onClick={() => setnowporgress()}>
                            <button className="glow-on-hover" type="button">
                                Let's Type &#x2192;
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="img-content" data-aos="fade-left" data-aos-duration="1000">
                    <div>
                        <div>
                            <h2 className="login-logo">Login here</h2>
                            <div className="text-center">
                                <GoogleLogin clientId={clientId} buttonText="Login With Google" onSuccess={onLoginSuccess} onFailure={onLoginFailure} cookiePolicy={'single_host_origin'} />
                            </div>
                            <div className="text-center my-2">Or</div>
                            <form onSubmit={loginSubmit} className="login-f">
                                <input type="email" className="input-user" id="email" value={credential.email} onChange={onChange} name="email" placeholder="Enter Email" />
                                <input type="password" className="input-user" id="password" value={credential.password} onChange={onChange} name="password" placeholder="Password" />
                                <div className="text-center">
                                    <button disabled={credential.password.length < 4 || credential.email.length < 5} type="submit" className="btn third">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
