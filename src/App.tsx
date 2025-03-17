/* eslint-disable prettier/prettier */
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { SidebarProvider } from "@/context/SidebarContext"; // Ensure correct import path
import DefaultLayout from "@/layouts/default";
import IndexPage from "@/pages/index";
import ProjectPage from "@/pages/project";
import AboutPage from "@/pages/about";

function App() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <DefaultLayout>
        <AnimatePresence>
          <Routes key={location.pathname} location={location}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<ProjectPage />} path="/projects" />
            <Route element={<AboutPage />} path="/about" />
          </Routes>
        </AnimatePresence>
      </DefaultLayout>
    </SidebarProvider>
  );
}

export default App;
