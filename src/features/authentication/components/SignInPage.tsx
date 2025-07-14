import useAuthHook from "../hooks/authHook.tsx";

const SignInPage = () => {
    const { email, setEmail, password, setPassword, handleSignIn } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Sign In</h1>
            <form onSubmit={handleSignIn}>
              <input className="mb-2 p-2 border block w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="mb-2 p-2 border block w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
            </form>
          </div>
        </div>
    )
}

export default SignInPage