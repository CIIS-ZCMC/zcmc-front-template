import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
