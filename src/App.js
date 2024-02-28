import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Blog from "./pages/blog.tsx";
import Navbar from "./components/navbar";
import "./style.css";
import { ThemeProvider } from "./themeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
