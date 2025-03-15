/* eslint-disable prettier/prettier */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { SidebarProvider } from "@/context/SidebarContext"; // Ensure correct import path
import DefaultLayout from "@/layouts/default";
import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <DefaultLayout>
        <AnimatePresence>
          <Routes key={location.pathname} location={location}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<BlogPage />} path="/blog" />
            <Route element={<AboutPage />} path="/about" />
          </Routes>
        </AnimatePresence>
      </DefaultLayout>
    </SidebarProvider>
  );
}

export default App;
