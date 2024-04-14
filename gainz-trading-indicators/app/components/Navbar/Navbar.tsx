import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-4">
            <div className="bg-green-100 container flex mx-auto items-center justify-between"> 
                <a
                    href="#"
                    className="text-black"
                >
                    home
                </a>
                <a
                    href="#"
                    className="text-black"
                >
                    features
                </a>
                <a
                    href="#"
                    className="text-black"
                >
                    pricing
                </a>
                <a
                    href="#"
                    className="text-black"
                >
                    blog
                </a>
            </div>
        </nav>
    );
};

export default Navbar;