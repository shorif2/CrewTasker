import { Outlet } from "react-router-dom";
import DashSlideBar from "../components/Navbar/DashSlidebar";

const DashboardLayout = () => {
    return (
        <div className="flex w-screen">
            <div className="w-1/6">
            <DashSlideBar></DashSlideBar>
            </div>
            {/* Outlet */}
            <div className="w-5/6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;