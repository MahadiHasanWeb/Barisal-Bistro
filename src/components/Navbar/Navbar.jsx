import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    // const photoURL = user.photoURL;
    // const displayName = user.displayName;
    // console.log(photoURL, displayName)
    const handleLogOut = () => {
        logOut().then().catch()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink to='/'><p>Home</p></ActiveLink></li>
                        <li><ActiveLink to='/blog'><p>Blog</p></ActiveLink></li>
                        <li><ActiveLink to='/blog'><p>About Us</p></ActiveLink></li>
                    </ul>
                </div>
                <ActiveLink to='/'><p className="btn text-[#00ADB5] btn-ghost normal-case text-xl">Barisal Bistro</p></ActiveLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><ActiveLink to='/'><p>Home</p></ActiveLink></li>
                    <li><ActiveLink to='/blog'><p>Blog</p></ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* {user && <ActiveLink><p className=""><FaRegUserCircle className='w-full h-10 text-[#00ADB5]' /></p></ActiveLink>} */}
                {user && <img title={user.displayName} className='w-[52px] md:w-[60px] rounded-full h-[52px] md:h-[60px]' src={user.photoURL} alt="" />}
                {user ? <ActiveLink to='/'><button onClick={handleLogOut} className="button button-primary bg-[#00ADB5] ms-4 md:ms-8">Log Out</button></ActiveLink> :
                    <ActiveLink to='/login'><button className="button button-primary bg-[#00ADB5] ms-4 md:ms-8">Login</button></ActiveLink>}

            </div>
        </div>
    );
};

export default Navbar;