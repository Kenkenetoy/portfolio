/* eslint-disable prettier/prettier */
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import IndexPage from "@/pages/index";
import ProjectPage from "@/pages/project";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

function App() {
  const location = useLocation();

  return (
      <DefaultLayout>
        <AnimatePresence>
          <Routes key={location.pathname} location={location}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<ProjectPage />} path="/projects" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ContactPage />} path="/contact" />
          </Routes>
        </AnimatePresence>
      </DefaultLayout>
  );
}

export default App;
