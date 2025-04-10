import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import Programs from "./components/Programs";  // Fixed import
import { ThemeProvider } from './context/ThemeContext';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;