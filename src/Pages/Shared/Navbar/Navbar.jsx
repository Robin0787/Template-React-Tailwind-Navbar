import { HiOutlineDatabase } from 'react-icons/hi';
import { LuUserCheck } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import { VscHome } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
        <NavLink to={'/'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-[16px]'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-[16px]'}>
            <VscHome /> Home
        </NavLink>
        <NavLink to={'/about'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-[16px]'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-[16px]'}>
            <LuUserCheck /> About
        </NavLink>
        <NavLink to={'/contact'}
            className={({ isActive }) => isActive ?
                'flex justify-center items-center gap-1 text-blue-800 text-[16px]'
                :
                'flex justify-center items-center gap-1 text-gray-700 text-[16px]'}>
            <HiOutlineDatabase /> <span className='text-md'> Contact </span>
        </NavLink>
    </>

    return (
        <section className='px-0 md:px-10 shadow-lg'>
            <div className="navbar bg-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-5 shadow bg-white text-black items-start rounded-box w-48 z-10 gap-4">
                            {navItems}
                        </ul>
                    </div>
                    <Link className='sm:ml-4 md:ml-0'>
                        <div>
                            <h2 className="text-2xl tracking-[4px]">Project </h2>
                            <p className='text-xs tracking-[22px] font-thin -mt-1'>Name</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <NavLink
                        className={({ isActive }) => isActive ?
                            'hidden sm:flex justify-center items-center gap-1 text-blue-800 text-[16px]'
                            :
                            'hidden sm:flex justify-center items-center gap-1 text-gray-700 text-[16px]'}>
                        <RxDashboard /> <span className='text-md'> Dashboard</span>
                    </NavLink>
                    <Link className='text-blue-500 bg-white hover:text-white text-sm md:text-md px-3 py-1 md:px-6 md:py-2 rounded-full ring-1 ring-blue-500 hover:bg-blue-600 hover: duration-300'>Login</Link>
                </div>
            </div>
        </section >
    );
};

export default Navbar;