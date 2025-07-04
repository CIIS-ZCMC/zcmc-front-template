
import { SignInRoute } from "./authentications/SignInRoute"
import { SignUpRoute } from "./authentications/SignUpRoute"
import { AccountRecoverRoute } from "./authentications/AccountRecoverRoute"
import { SessionBaseAuthRoute } from "./authentications/SessionBaseAuthRoute"

import AppLayout from "../components/layout"

const authRoute = [
    {
        path: "/login",
        element: <SignInRoute />
    },
    {
        path: "/register",
        element: <SignUpRoute />
    },
    {
        path: "/account-recover",
        element: <AccountRecoverRoute />
    },
    {
        path: "/session-base-auth",
        element: <SessionBaseAuthRoute />
    }
]

const appRoute = [
    {
        path: "/",
        element: <AppLayout />
    }
]

const routeLibrary = [
    ...authRoute,
    ...appRoute
]

export default routeLibrary