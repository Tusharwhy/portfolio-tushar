import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Contact,
  StarsCanvas,
  About,
  Works,
  Tech,
  Experience,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>

        <About />
        <Tech />
        <Works />
        <Experience />
        {/* 
        <Feedbacks /> */}

        {/* <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
