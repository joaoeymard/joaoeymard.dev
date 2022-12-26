import { Routes, Route } from "react-router-dom";

import Main from "./layouts/main";
import Home from "./pages/home";
import AboutMe from "./pages/AboutMe";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}
