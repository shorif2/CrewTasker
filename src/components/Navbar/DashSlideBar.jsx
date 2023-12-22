import { CaretDown, MagnifyingGlass, EnvelopeSimpleOpen,Calendar,ListChecks,Sliders } from "@phosphor-icons/react";

const DashSlideBar = () => {
    return (
        <div className="px-6 py-6">
           <div className="flex gap-4 ">
            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg" alt="" />
            <div className="flex gap-2">
            <p className="font-semibold">Shorif Ahamed</p>
            <CaretDown size={20} />
            </div>
           </div>
           <div className="pt-10">
            <div className="flex font-medium items-center gap-2 py-2 px-2 hover:bg-[#FEE6E3]">
            <MagnifyingGlass size={24} />
            <p>Search</p>
            </div>
            <div className="flex font-medium items-center gap-2 py-2 px-2 hover:bg-[#FEE6E3]">
            <EnvelopeSimpleOpen size={24} />
            <p>Inbox</p>
            </div>
            <div className="flex font-medium items-center gap-2 py-2 px-2 hover:bg-[#FEE6E3]">
            <Calendar size={24} />
            <p>Calendar</p>
            </div>
            <div className="flex font-medium items-center gap-2 py-2 px-2 hover:bg-[#FEE6E3]">
            <ListChecks size={24} />
            <p>Upcoming</p>
            </div>
            <div className="flex font-medium items-center gap-2 py-2 px-2 hover:bg-[#FEE6E3]">
            <Sliders size={24} />
            <p>Filter</p>
            </div>
           </div>
        </div>
    );
};

export default DashSlideBar;