import { SignIn } from "@clerk/react";
function Login() { return <main className="login-page"><div className="login-copy"><span className="eyebrow">WELCOME TO MOTORA</span><h1>Sign in and start your ride.</h1><p>Browse bikes, upload your own listing and connect directly with sellers.</p></div><SignIn /></main> }
export default Login;
