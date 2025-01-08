import "../css/style.css";
import "./bootstrap";
import System from "./Pages/System.jsx";
import Home from "./Pages/Home.jsx";
import Sensors from "./Pages/Sensors.jsx";
import Implementation from "./Pages/Implementation.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Contact from "./Pages/Contact.jsx";
import Solution from "./Pages/Solution.jsx";
import { Route, Routes } from "react-router-dom";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Air Vizion";

function App() {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/system" element={<System />} />
                    <Route path="/sensors" element={<Sensors />} />
                    <Route
                        path="/implementation"
                        element={<Implementation />}
                    />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
