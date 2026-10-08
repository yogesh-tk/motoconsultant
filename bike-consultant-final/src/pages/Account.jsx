import { UserButton } from "@clerk/react";
function Account({ user }) { return <main className="container section"><span className="eyebrow">ACCOUNT</span><h1>Your account</h1><div className="account-card"><UserButton /><h2>{user.name}</h2><p>{user.email}</p><span className="role-badge">{user.role}</span></div></main> }
export default Account;
