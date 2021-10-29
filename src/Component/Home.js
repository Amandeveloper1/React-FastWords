import React from 'react'
import { Link } from "react-router-dom";
import './Css/home.css';


export default function Home(props) {
    const setnowporgress = ()=>{
        props.progress(10)
        setTimeout(() => {
            props.progress(50)
            props.progress(100)
        }, 100);
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
                        </button></Link>
                    </div>
                </div>
                <div className="img-content" data-aos="fade-left" data-aos-duration="1000">
                    <div>
                        <div>
                            <h2 className="login-logo">Login here</h2>
                            <div className="text-center">
                                <button className="btn third">Login With Google</button>
                            </div>
                            <div className="text-center my-2">Or</div>
                            <form action="" className="login-f">
                                <input type="text" className="input-user" placeholder="Username" />
                                <input type="text" className="input-user" placeholder="Password" />
                                <div className="text-center">
                                    <button className="btn third">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
