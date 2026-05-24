import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Projects from "./pages/all-projects";
import Journey from "./pages/journey";

function App() {
  return (
    <>
      <Navbar />

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;