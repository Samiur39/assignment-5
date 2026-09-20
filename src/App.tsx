import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Componants/Nav";
import Hero from "./Componants/Hero";
import Technologies from "./Componants/Technologies";
import Footer from "./Componants/Footer";

const technoDataPromise = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();

    return data;
};

const App = () => {
    return (
        <div className="min-h-screen bg-white">

            <Nav />

            <Hero />

            <Suspense
                fallback={
                    <p className="py-10 text-center">
                        Data Loading...
                    </p>
                }
            >
                <Technologies
                    technoDataPromise={technoDataPromise()}
                />
            </Suspense>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
            />

        </div>
    );
};

export default App;