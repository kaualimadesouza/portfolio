
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Projects } from "./projects";
import { CustomCursor } from "./components/ui";

export function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
