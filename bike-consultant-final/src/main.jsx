import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import App from "./App";
import "./styles.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Root() {
  if (!publishableKey) {
    return <div style={{minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", fontFamily: "Arial, sans-serif", background: "#f7f8fa"}}><div style={{maxWidth: "620px", background: "white", padding: "32px", borderRadius: "20px", boxShadow: "0 18px 50px rgba(15,23,42,.08)"}}><h1 style={{marginTop: 0}}>Clerk setup required</h1><p>Add your Clerk Publishable Key to the <b>.env</b> file:</p><pre style={{background: "#f1f3f5", padding: "14px", borderRadius: "10px"}}>VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key</pre><p>Then restart Vite with <b>npm run dev</b>.</p></div></div>;
  }
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl="/login"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
    >
      <App />
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
