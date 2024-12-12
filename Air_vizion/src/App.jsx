import Header from "./components/Header.jsx";
import System from "./components/System.jsx";
import Home from "./components/Home.jsx";
import Sensors from "./components/Sensors.jsx";
import Implementation from "./components/Implementation.jsx";
import Feedback from "./components/Feedback.jsx";
import Contact from "./components/Contact.jsx";
import Solution from "./components/Solution.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;