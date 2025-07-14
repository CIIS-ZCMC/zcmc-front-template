import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-red-100">
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 bg-red-200 flex flex-col justify-between">
                    <Topbar />
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
