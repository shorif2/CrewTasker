import { Outlet } from "react-router-dom";
import DashSlideBar from "../components/Navbar/DashSlidebar";
import { Plus } from "@phosphor-icons/react";

const DashboardLayout = () => {
    return (
        <div className="flex w-screen">
            <div className="bg-[#FAF8F7] w-[280px] h-screen">
            <DashSlideBar></DashSlideBar>
            </div>
            {/* Outlet */}
            <div style={{ width: 'calc(100vw - 280px)' }} className="p-8 h-full">
                <div className="flex justify-between h-full">
                <h2>Dashboard</h2>
                <div className="flex gap-2">
                <Plus className="text-red-500" size={24} />
                <button>Add Task</button>
                </div>
                </div>
                <div className="h-full">
                <Outlet></Outlet>
                </div>
                
            </div>
        </div>
    );
};

export default DashboardLayout;