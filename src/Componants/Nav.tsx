import { useState } from "react";
import logo from "../assets/assets/logo-text.png";
import hamburger from "../assets/assets/hamburger.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-6xl px-5">

                {/* Desktop / Mobile Header */}
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="DevStack"
                        className="h-9 w-auto"
                    />

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-8 lg:flex">

                        <ul className="flex items-center gap-8 text-[16px] text-slate-600">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#D91B7E]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#technologies">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#projects">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <div className="flex items-center gap-6">
                            <button className="text-slate-700">
                                Sign In
                            </button>

                            <button className="rounded-full bg-[#D91B7E] px-6 py-3 text-white">
                                Sign Up
                            </button>
                        </div>

                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden"
                    >
                        <img
                            src={hamburger}
                            alt="Menu"
                            className="h-7 w-7 object-contain"
                        />
                    </button>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="border-t border-gray-100 pb-6 pt-5 lg:hidden">

                        <ul className="flex flex-col gap-5 text-base text-slate-600">

                            <li>
                                <a
                                    href="#"
                                    className="text-[#D91B7E]"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                        <div className="mt-6 flex gap-4">

                            <button className="rounded-lg border border-gray-200 px-5 py-2.5 text-slate-700">
                                Sign In
                            </button>

                            <button className="rounded-lg bg-[#D91B7E] px-5 py-2.5 text-white">
                                Sign Up
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Nav;