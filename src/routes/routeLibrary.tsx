import SignInRoute from "@/pages/authentications/SignInRoute.tsx"
import SignUpRoute from "@/pages/authentications/SignUpRoute.tsx"
import AccountRecoverRoute from "@/pages/authentications/AccountRecoverRoute.tsx"
import SessionBaseAuthRoute from "@/pages/authentications/SessionBaseAuthRoute.tsx"

import AppLayout from "@/components/layout/AppLayout.tsx"

// Dashboard Route
import DashboardPageRoute from "@/pages/dashboard/DashbourPageRoute.tsx"

// Todo Route
import TodoListRoute from "@/pages/todos/TodosListRoute.tsx"
import TodoCreateRoute from "@/pages/todos/TodoCreateRoute.tsx"
import TodoEditRoute from "@/pages/todos/TodoEditRoute.tsx"
import TodoViewRoute from "@/pages/todos/TodoViewRoute.tsx"

import { LayoutDashboard, ListTodo } from "lucide-react"

const authRoute = [
    {
        path: "/login",
        element: <SignInRoute />,
    },
    {
        path: "/register",
        element: <SignUpRoute />,
    },
    {
        path: "/account-recovery",
        element: <AccountRecoverRoute />,
    },
    {
        path: "/authenticate-session-id",
        element: <SessionBaseAuthRoute />,
    }
]

const DashboardRoute = [
    {
        index: true,
        path: "/dashboard",
        element: <DashboardPageRoute />,
        icon: <LayoutDashboard />,
        label: "Dashboard"
    }
]

const TodoRoute = [
    {
        path: "/todos",
        element: <TodoListRoute />,
        icon: <ListTodo />,
        label: "Todos",
        children: [
            {
                path: "/todos/create",
                element: <TodoCreateRoute />,
                icon: <ListTodo />,
                label: "Create Todo",
            },
            {
                path: "/todos/edit/:id",
                element: <TodoEditRoute />,
                icon: <ListTodo />,
                label: "Edit Todo",
                
            },
            {
                path: "/todos/view/:id",
                element: <TodoViewRoute />,
                icon: <ListTodo />,
                label: "View Todo",
            }
        ]
    },
]

export const sidebarRoute = [
    ...DashboardRoute,
    ...TodoRoute
];

const appRoute = [
    {
        path: "/",
        element: <AppLayout />,
        children: sidebarRoute
    }
]

const routeLibrary = [
    ...authRoute,
    ...appRoute
]

export default routeLibrary