import bannerImg from "../assets/assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="mx-auto max-w-6xl px-5">

            <div className="flex flex-col items-center justify-between gap-10 py-12 sm:py-16 lg:flex-row lg:py-20">

                {/* Left */}
                <div className="w-full lg:w-1/2">

                    <h1 className="text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:mt-8">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-10">

                        <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3.5 font-semibold text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded-lg border border-gray-300 px-8 py-3.5 text-slate-600">
                            Learn More
                        </button>

                    </div>

                </div>

                {/* Right */}
                <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">

                    <img
                        src={bannerImg}
                        alt="Development stack"
                        className="w-70 sm:w-90 lg:w-115"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;