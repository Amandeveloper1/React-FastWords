import React from 'react'
import { Link } from "react-router-dom";
import './Css/navbar.css';
import img1 from './photos/headicon.png';

export default function Navbar(props) {

    const setnowporgress = () => {
        props.progress(10)
        setTimeout(() => {
            props.progress(50)
            props.progress(100)
        }, 100);
    }

    return (
        <>

            <div className="header container">
                <div className="n-head">
                    <img className="icon-head" src={img1} alt="" />
                    <h1>FastWords</h1>
                </div>

                <div className="m-head">
                    <ul className="d-flex">
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" to="/">Home</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" to="/competition">Competition</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="sl-head">
                    {!localStorage.getItem('token') ? <>
                        <Link onClick={() => setnowporgress()} className="text-d" to="/signup">  <button className="btn third" >Signup</button></Link>
                        <Link onClick={() => setnowporgress()} className="text-d" to="/"><button className="btn third me-1">Login</button></Link>
                    </> : <>
                        <Link onClick={() => setnowporgress()} className="text-d" to="/account"><button className="btn third me-1">Account</button></Link>
                    </>}
                </div>
            </div>
        </>
    )
}
