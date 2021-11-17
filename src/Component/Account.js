import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import img1 from './photos/typingimg.jpg';
import './Css/account.css';

export default function Account(props) {
    const clientId = '598459928179-h167auc2o9o1qg9cgnn77amapl6k8t75.apps.googleusercontent.com';
    let history = useHistory();

    const logoutNow = () => {
        console.log('logout are now here.');
        localStorage.removeItem('token');
        props.setAlert('Your are Logout successfully');
        history.push('/');
    }

    return (<>
        <div className="container">

            <div className="account-pro">
                
                <div className="a-i-d">
                    <div className="i-s-c">
                       <img className="a-img" src={img1} alt="" />
                    </div>
                    <div>
                        <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logoutNow} />
                    </div>
                </div>

                <div>
                    <div className="s-d-c">
                        competition info
                    </div>
                    <div className="s-d-c">
                        ranks
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}
