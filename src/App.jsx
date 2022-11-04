import { Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";

const Pages = () => {
  const location = useLocation();
  return (
    <>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
          </Routes>
        </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Pages />
    </div>
  );
};

export default App;
