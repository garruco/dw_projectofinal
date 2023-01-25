import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Homepage from "./pages/homepage/Homepage";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Works from "./pages/works/Works";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Menu>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="projects/:slug" element={<Project />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="works" element={<Works />} />
            </Route>
          </Routes>
        </Menu>
      </BrowserRouter>
    </main>
  );
}

export default App;
