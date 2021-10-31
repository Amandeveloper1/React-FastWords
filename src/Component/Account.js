import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

export default function Account() {
    const clientId = '598459928179-h167auc2o9o1qg9cgnn77amapl6k8t75.apps.googleusercontent.com';
    let history = useHistory();

    const logoutNow = () => {
        console.log('logout are now here.');
        localStorage.removeItem('token');
        alert('Your are Logout successfully', 'success');
        history.push('/');
    }
    return (<>
    
        <div>
            that is a acount.
        </div>
        <div>
            
        <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logoutNow} />
        </div>
    </>
    )
}
