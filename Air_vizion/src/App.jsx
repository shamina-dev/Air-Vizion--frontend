import Header from './components/Header.jsx'
import System from './components/System.jsx';
import Home from './components/Home.jsx';
import Sensors from './components/Sensors.jsx';
import Implementation from './components/Implementation.jsx';
import Feedback from './components/Feedback.jsx';
import Contact from './components/Contact.jsx';
import { Route , Routes } from "react-router-dom"

function App() {
  return(
    <>
      <Header/>
      <div className='container'>
        <Routes>
<<<<<<< Updated upstream
          <Route path='/' element={<Home/>}/>
          <Route path='/System' element={<System/>}/>
          <Route path='/Sensors' element={<Sensors/>}/>
          <Route path='/Implementation' element={<Implementation/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/Contact' element={<Contact/>}/>
=======
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
>>>>>>> Stashed changes
        </Routes>
      </div>
    </>
  );
}

<<<<<<< Updated upstream
export default App
=======
export default App;
>>>>>>> Stashed changes
