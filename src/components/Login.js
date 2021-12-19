import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons"
import "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from 'firebase/auth';

import { auth } from '../firebase';

const Login = () => {

    
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Beechat!</h2>

                <div
                    className="login-button google"
                    onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br /> <br />

                <div
                    className="login-button facebook"
                    onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;