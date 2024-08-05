import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Projects } from "./projects";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
