import SignInRoute from "../pages/authentications/SignInRoute.tsx"
import SignUpRoute from "../pages/authentications/SignUpRoute.tsx"
import AccountRecoverRoute from "../pages/authentications/AccountRecoverRoute.tsx"
import SessionBaseAuthRoute from "../pages/authentications/SessionBaseAuthRoute.tsx"

import AppLayout from "../components/layout/AppLayout.tsx"

// Dashboard Route
import DashboardPageRoute from "../pages/dashboard/DashbourPageRoute.tsx"

// Todo Route
import TodoListRoute from "../pages/todos/TodosListRoute.tsx"
import TodoCreateRoute from "../pages/todos/TodoCreateRoute.tsx"
import TodoEditRoute from "../pages/todos/TodoEditRoute.tsx"
import TodoViewRoute from "../pages/todos/TodoViewRoute.tsx"

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
        path: "/account-recovery",
        element: <AccountRecoverRoute />
    },
    {
        path: "/session-base-auth",
        element: <SessionBaseAuthRoute />
    }
]

const DashboardRoute = [
    {
        index: true,
        path: "/dashboard",
        element: <DashboardPageRoute />
    }
]

const TodoRoute = [
    {
        path: "/todos",
        element: <TodoListRoute />,
        children: [
            {
                path: "/todos/create",
                element: <TodoCreateRoute />
            },
            {
                path: "/todos/edit/:id",
                element: <TodoEditRoute />
            },
            {
                path: "/todos/view/:id",
                element: <TodoViewRoute />
            }
        ]
    },
]

const appRoute = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            ...DashboardRoute,
            ...TodoRoute
        ]
    }
]

const routeLibrary = [
    ...authRoute,
    ...appRoute
]

export default routeLibrary