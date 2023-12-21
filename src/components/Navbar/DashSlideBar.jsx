import { CaretDown } from "@phosphor-icons/react";

const DashSlideBar = () => {
    return (
        <div className="px-6 py-6">
           <div className="flex gap-4 border">
            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg" alt="" />
            <div className="flex gap-2">
            <p className="font-semibold">Shorif Ahamed</p>
            <CaretDown size={20} />
            </div>
           </div>
        </div>
    );
};

export default DashSlideBar;