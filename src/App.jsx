import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetails from "./pages/ServiceDetails";
import PostProject from "./pages/PostProject";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
            </>
          }
        />

        <Route
  path="/post-project"
  element={<PostProject />}
/>

        <Route
          path="/services/:id"
          element={<ServiceDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;