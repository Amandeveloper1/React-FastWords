import React, { useState } from 'react';
import './Css/signup.css';
import {GoogleLogin } from 'react-google-login';

export default function Signup(props) {

    let host = 'http://localhost:5000';
    const [credential, setCredential] = useState({ email: '', name: '', otp: '', password: '', cpassword: ''});
    const clientId = '598459928179-h167auc2o9o1qg9cgnn77amapl6k8t75.apps.googleusercontent.com';

    const onSignupSuccess = async (res)=>{
        console.log(res.profileObj);

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: res.profileObj.email, name: res.profileObj.name, password: "loginwithgoogle" })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            setCredential({password:'',otp:'' , cpassword:''})
            localStorage.clear();
            setCredential({otp:'',password:'',cpassword:''})
            console.log('Your are Signup successfully','success');
            
            alert('Your are Signup successfully');
        }
    }
    const onSignupFailure = (res)=>{
        console.log('login Failure.', res);
    }

  
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
 
    const firstsubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/finduser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, name: credential.name })
        });
        const json = await response.json();
        if (json.success) {
            console.log(json);
            localStorage.setItem('email', json.email);
            localStorage.setItem('name', json.name);
            localStorage.setItem('otp', json.randNum)
            // setCredential({ email: json.email, name: json.name })
            setCredential({email:'',name:''})
            
            alert('Otp are send successfully');
        }
    }

    const secondsubmit = async (e) => {
        e.preventDefault();
        let otplocal = localStorage.getItem('otp')
        let email = localStorage.getItem('email');
        let name = localStorage.getItem('name');
        if (otplocal.length === 4) {
            if (credential.password === credential.cpassword) {
                if (otplocal === credential.otp) {
                    const response = await fetch(`${host}/api/auth/createuser`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, name: name, password: credential.password })
                    });
                    const json = await response.json();
                    console.log(json);
                    if (json.success) {
                        setCredential({password:'',otp:'' , cpassword:''})
                        localStorage.clear();
                        setCredential({otp:'',password:'',cpassword:''})
                        console.log('Your are Signup successfully','success');
                        alert('Your are Signup successfully');
                    }
                }else{
                    console.log('invalid opt and opt are  not match');
                }
            }else{
                console.log('password and confirm password are not match.');
            }
        }else{
            console.log('That otp is invalid');
        }
    }



    return (
        <>

            <div className="container signup-c mb-4" data-aos="fade-right" data-aos-duration="2000">
                <div className="img-content" >
                    <h2 className="signup-logo">Signup here</h2>
                    <div className="text-center">
                        {/* <button className="btn third">Signup With Google</button> */}
                        <GoogleLogin clientId={clientId} buttonText="Signup With Google" onSuccess={onSignupSuccess} onFailure={onSignupFailure} cookiePolicy={'single_host_origin'} />
                              
                    </div>
                    <div className="text-center my-2">Or</div>
                    <form onSubmit={firstsubmit} className="login-f">
                        <input type="text" className="input-user"  id="name" value={credential.name} onChange={onChange} name='name'  placeholder="Enter Username" />
                        <input type="email" className="input-user"  id="email" value={credential.email} onChange={onChange} name="email"  placeholder="Enter Email" />
                        <div className="text-center">
                            <button type="submit" disabled={credential.name.length < 2 || credential.email.length < 5} className="btn third">Send OTP</button>
                        </div>
                    </form>

                    <form onSubmit={secondsubmit} className="login-f mt-4">
                        <input type="text" className="input-user"  id="otp" value={credential.otp} onChange={onChange} name="otp"  placeholder="Enter OTP here" />
                        <input type="password" className="input-user" id="password" value={credential.password} onChange={onChange} name="password"  placeholder="Create Password" />
                        <input type="password" className="input-user"  id="cpassword" value={credential.cpassword} onChange={onChange} name="cpassword" placeholder="Confrim Password" />
                        <div className="text-center">
                            <button  type="submit" disabled={credential.otp.length < 4 || credential.password.length < 4 || credential.cpassword.length < 4} className="btn third">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
