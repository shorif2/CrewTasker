import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {

    const {user, logout} = useAuth();
    const handleLogout = ()=>{
      logout()
      toast.success('Logout Success')
    }

    const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/features'>Features</NavLink> </li>
    <li> <NavLink to='/about'>About</NavLink> </li>
    <li> <NavLink to='/contact'>Contact</NavLink> </li>
    <li className="flex items-center justify-center font-bold "> {user?.displayName} </li>

    
    
    
</>
    return (
        <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <NavLink><a className="btn btn-ghost normal-case text-xl">CREW TASKER</a></NavLink>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


      <div className="navbar-end">
        {
          user ? <div className="flex gap-4">
            <Link to='/dashboard'  className="btn btn-ghost">Dashboard</Link>
            <button onClick={handleLogout} className="btn">Logout</button>
          </div>
            :
            <div>
              <Link to='/login'><button className="btn">Login/Register</button></Link>
              <Link to='/register'><button className="btn">Register</button></Link>
            </div>
        }
      </div>


    </div>
    );
};

export default Navbar;