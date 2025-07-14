import Form from "@/components/common/Form";
import useAuthHook from "../hooks/authHook.tsx";
import {Button, TextField} from "@/components/ui";

const SignInPage = () => {
    const { email, setEmail, password, setPassword, handleSignIn } = useAuthHook();
    
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-black">Sign In</h1>
            <Form onSubmit={handleSignIn}>
              <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="flex justify-end">            
                  <Button label='Forgot Password?' variant="text" />
              </div>
              <Button label="Sign In" type="submit" variant="contained" className="w-full"/>
            </Form>
          </div>
        </div>
    )
}

export default SignInPage