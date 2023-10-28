import { useState } from 'react';
import Logo from '../../../assets/salad.png';
import Container from '../container/Container';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full fixed'>
            <Container>
                <nav className="bg-white">
                    <div className="flex items-center font-medium justify-between">
                        <div className="z-50 p-5 md:w-auto w-full flex justify-between pl-0">
                            <Link to='/'>
                                <div className='flex flex-row gap-2'>
                                    <h1 className='text-2xl'>Fresh</h1>
                                    <img src={Logo} alt="" className='h-6 w-h-6' />
                                    <h1 className='text-2xl'>Finds</h1>
                                </div>
                            </Link>
                            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                            </div>
                        </div>
                        <ul className="md:flex hidden uppercase items-center gap-8">
                            <li>
                                <Link to="/" className="py-7 px-3 inline-block">
                                    Home
                                </Link>
                            </li>
                            <NavLinks />
                            <li>
                                <Link to="/" className="py-7 px-3 inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="md:block hidden">
                            {/* Avater */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <div className='text-3xl'>
                                            <ion-icon name="person"></ion-icon>
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                                    <li><a>Profile</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Mobile nav */}
                        <ul
                            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                        >
                            <li>
                                <Link to="/" className="py-7 px-3 inline-block">
                                    Home
                                </Link>
                            </li>
                            <NavLinks />
                            <li>
                                <Link to="/" className="py-7 px-3 inline-block">
                                    Contact
                                </Link>
                            </li>
                            <div className="py-5">
                                {/* Avater */}
                                <div className="dropdown dropdown-start">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <div className='text-3xl'>
                                                <ion-icon name="person"></ion-icon>
                                            </div>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                                        <li><a>Profile</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;
