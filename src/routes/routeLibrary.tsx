import SignInRoute from "../pages/authentications/SignInRoute.tsx"
import SignUpRoute from "../pages/authentications/SignUpRoute.tsx"
import AccountRecoverRoute from "../pages/authentications/AccountRecoverRoute.tsx"
import SessionBaseAuthRoute from "../pages/authentications/SessionBaseAuthRoute.tsx"

import AppLayout from "../components/layout/AppLayout.tsx"

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