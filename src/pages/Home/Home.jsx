import { ArrowRight, FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-16">
                <h2 className="text-6xl font-bold ">Organize your work</h2>
                <h2 className="text-6xl font-bold pb-6">and life, finally.</h2>
                <p className="text-lg text-center">Become focused, organized, and clam with Todoist. The world's #1<br />task manager and to-do list app.</p>
                <Link to='/register' className="flex justify-center items-center gap-2 text-2xl rounded-lg mt-6 bg-black text-white font-medium py-2 px-3">
                    <p> Let's Explore</p>
                    <ArrowRight size={20} /></Link>

                <div>
                    <img src="https://img.freepik.com/free-vector/electronic-documents-management-doodle-concept_107791-13366.jpg" alt="" />
                </div>
            </div>
            <div className="py-20">
                <h2 className="text-5xl font-bold text-center ">
                    Every Team, side-by-side
                </h2>
                <p className="text-lg text-center pt-4 pb-10">Become focused, organized, and clam with Todoist.<br />task manager and to-do list app.</p>
                <div className="grid grid-cols-6 justify-center items-center gap-6">
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png" alt="" />
                        <p className="text-2xl font-semibold">Engineer</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png" alt="" />
                        <p className="text-2xl font-semibold">Designer</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png" alt="" />
                        <p className="text-2xl font-semibold">Productive</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png" alt="" />
                        <p className="text-2xl font-semibold">Marketer</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png" alt="" />
                        <p className="text-2xl font-semibold">Operation</p>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-6">

                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png" alt="" />
                        <p className="text-2xl font-semibold">HR</p>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <h2 className="text-5xl font-bold text-center ">
                    Join a global movement.<br />Unleash your creativity
                </h2>
                <p className="text-lg text-center pt-4 pb-10">
                    Our vibrant community produces content, teaches courses, and leads events all over<br />the world.</p>

            <div className="flex justify-center items-center">
                <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png" alt="" />
               
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="border p-10">
                <h2 className="text-7xl font-bold text-sky-600">1M+</h2>
                <p className="text-lg font-medium">community members</p>
                </div>
                <div className="border p-10">
                <h2 className="text-7xl font-bold text-sky-600">150+</h2>
                <p className="text-lg font-medium">community groups</p>
                </div>
                <div className="border p-10">
                <h2 className="text-7xl font-bold text-sky-600">50+</h2>
                <p className="text-lg font-medium">countries represented</p>
                </div>
                <div className="border p-10">
                <h2 className="text-7xl font-bold text-sky-600">1M+</h2>
                <p className="text-lg font-medium">community members</p>
                </div>
            </div>
            </div>
            <div className="bg-[#1E2833] pb-6 px-2">
            <div className="mx-auto">
            
        
            <div className="flex justify-between pt-10">
                <div className="flex flex-col justify-center items-center">
            
                <h2 className="text-white">CrewTasker</h2>
                </div>
                <div className="flex gap-6 md:gap-10 items-center">
                    <p className="text-white text-xl">
                    Ready to get started?
                    </p>
                    <button className="bg-white text-2xl font-bold py-4 px-12 rounded-lg">Explore</button>
                </div>
            </div>
            <hr className="my-10" />
            <div className="text-white grid grid-cols-4">
                <div>
                    <h3 className="text-xl font-semibold pb-7">
                        Subscribe to our
                        newsletter
                    </h3>
                    <div className="flex gap-2">
                    <FacebookLogo size={26} />
                    <InstagramLogo size={26} />
                    <TwitterLogo size={26} />
                    <GithubLogo size={26} />
                    <YoutubeLogo size={26} />
                    </div>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p>Email Marketing</p>
                    <p>Campaigns</p>
                    <p>Branding</p>
                    <p>Offline</p>
                </div>
                
            </div>
            <footer className="footer footer-center p-4 mt-16 text-white">
  <aside>
    <p>Copyright © 2023 - All right reserved by Crew Tasker Ltd</p>
  </aside>
</footer>
       
        </div>    
            </div>
        </div>
    );
};

export default Home;