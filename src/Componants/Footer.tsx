const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white">

            <div className="mx-auto max-w-6xl px-5">

                {/* Main */}
                <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-xs font-semibold text-white">
                                DS
                            </div>

                            <h2 className="text-xl font-semibold text-[#172033]">
                                Dev<span className="text-[#D91B7E]">Stack</span>
                            </h2>

                        </div>

                        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <div className="mt-6 flex gap-5 text-sm font-medium text-slate-600">

                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>

                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase text-[#172033]">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase text-[#172033]">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase text-[#172033]">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-500">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-slate-100" />

                {/* Bottom */}
                <div className="flex flex-col gap-4 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;