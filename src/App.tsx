/* eslint-disable prettier/prettier */
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  const location = useLocation();

  return (
    <DefaultLayout>
      {" "}
      {/* Sidebar stays static, only pages change */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
}

export default App;
