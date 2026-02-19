import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { LanguageProvider } from './presentation/context/LanguageContext';
import { Home } from './presentation/pages/Home';
import { Projects } from './presentation/pages/Projects';
import { Experience } from './presentation/pages/Experience';

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
