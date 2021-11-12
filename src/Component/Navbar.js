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

    if (props.nav === 'stop') {

        if (!localStorage.getItem('token')) {

            let disabledd = document.getElementById('disablednow');
            let disabled1 = document.getElementById('disabled1');
            let disabled2 = document.getElementById('disabled2');
            let disabled3 = document.getElementById('disabled3');
            let disabled4 = document.getElementById('disabled4');
            let disabled5 = document.getElementById('disabled5');

            disabledd.classList.add('dis');
            disabled1.classList.add('dis');
            disabled2.classList.add('dis');
            disabled3.classList.add('dis');

            disabled4.classList.add('dis');
            disabled5.classList.add('dis');
        } else {
            let disabledd = document.getElementById('disablednow');
            let disabled1 = document.getElementById('disabled1');
            let disabled2 = document.getElementById('disabled2');
            let disabled3 = document.getElementById('disabled3');
            disabledd.classList.add('dis');
            disabled1.classList.add('dis');
            disabled2.classList.add('dis');
            disabled3.classList.add('dis');

            let disabled6 = document.getElementById('disabled6');
            disabled6.classList.add('dis');
        }
    }
    if (props.nav === 'start') {

        if (!localStorage.getItem('token')) {

            let disabledd = document.getElementById('disablednow');
            let disabled1 = document.getElementById('disabled1');
            let disabled2 = document.getElementById('disabled2');
            let disabled3 = document.getElementById('disabled3');
            let disabled4 = document.getElementById('disabled4');
            let disabled5 = document.getElementById('disabled5');
          

            disabledd.classList.remove('dis');
            disabled1.classList.remove('dis');
            disabled2.classList.remove('dis');
            disabled3.classList.remove('dis');

            disabled4.classList.remove('dis');
            disabled5.classList.remove('dis');
        }else{

            let disabledd = document.getElementById('disablednow');
            let disabled1 = document.getElementById('disabled1');
            let disabled2 = document.getElementById('disabled2');
            let disabled3 = document.getElementById('disabled3');
            
            disabledd.classList.remove('dis');
            disabled1.classList.remove('dis');
            disabled2.classList.remove('dis');
            disabled3.classList.remove('dis');

            let disabled6 = document.getElementById('disabled6');
            disabled6.classList.remove('dis');
        }
    }

    const navsetNow = () =>{
        let head = document.getElementById('headerone')
        let link = document.getElementById('linkone')
        let login = document.getElementById('loginone')

        if (link.classList.contains('overhid')) {
            head.classList.remove('h-res');
            head.classList.add('hight-nav');
            link.classList.remove('overhid')
            login.classList.remove('overhid')
        }else{
            head.classList.add('h-res');
            link.classList.add('overhid')
            login.classList.add('overhid')
            head.classList.remove('hight-nav');
        }

    }

    return (
        <>

            <div className="header container h-res" id="headerone">
                <div className="n-head" id="disablednow">
                    <img className="icon-head" src={img1} alt="" />
                    <h1 className="head-name">FastWords</h1>
                </div>

                <div className="m-head overhid" id="linkone">
                    <ul className="dispflex">
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" id="disabled1" to="/">Home</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" id="disabled2" to="/competition">Competition</Link>
                        </li>
                        <li className="link-page">
                            <Link onClick={() => setnowporgress()} className="a-link-page" id="disabled3" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="sl-head overhid" id='loginone'>
                    {!localStorage.getItem('token') ? <>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled4" to="/signup">  <button className="btn third" >Signup</button></Link>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled5" to="/"><button className="btn third me-1">Login</button></Link>
                    </> : <>
                        <Link onClick={() => setnowporgress()} className="text-d" id="disabled6" to="/account"><button className="btn third me-1">Account</button></Link>
                    </>}
                </div>
                <div className="burger" onClick={navsetNow}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}
