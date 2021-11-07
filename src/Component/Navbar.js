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

    if (props.nav ==='stop') {

        let disabledd = document.getElementById('disablednow');
        let disabled1 = document.getElementById('disabled1');
        let disabled2 = document.getElementById('disabled2');
        let disabled3 = document.getElementById('disabled3');
        let disabled4 = document.getElementById('disabled4');
        let disabled5 = document.getElementById('disabled5');
        let disabled6 = document.getElementById('disabled6');

        disabledd.classList.add('dis');
        disabled1.classList.add('dis');
        disabled2.classList.add('dis');
        disabled3.classList.add('dis');

        disabled4.classList.add('dis');
        disabled5.classList.add('dis');

    }
    if (props.nav ==='start') {
        

        let disabledd = document.getElementById('disablednow');
        let disabled1 = document.getElementById('disabled1');
        let disabled2 = document.getElementById('disabled2');
        let disabled3 = document.getElementById('disabled3');
        let disabled4 = document.getElementById('disabled4');
        let disabled5 = document.getElementById('disabled5');
        let disabled6 = document.getElementById('disabled6');

        disabledd.classList.remove('dis');
        disabled1.classList.remove('dis');
        disabled2.classList.remove('dis');
        disabled3.classList.remove('dis');

        disabled4.classList.remove('dis');
        disabled5.classList.remove('dis');
    }

    return (
        <>

            <div className="header container ">
                <div className="n-head" id="disablednow">
                    <img className="icon-head" src={img1} alt="" />
                    <h1>FastWords</h1>
                </div>

                <div className="m-head">
                    <ul className="d-flex">
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page"  id="disabled1" to="/">Home</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page"  id="disabled2" to="/competition">Competition</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page"  id="disabled3" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="sl-head">
                    {!localStorage.getItem('token') ? <>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled4" to="/signup">  <button className="btn third" >Signup</button></Link>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled5" to="/"><button className="btn third me-1">Login</button></Link>
                    </> : <>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled6" to="/account"><button className="btn third me-1">Account</button></Link>
                    </>}
                </div>
            </div>
        </>
    )
}
