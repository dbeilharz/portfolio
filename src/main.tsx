import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

// Pages
import Home from "./pages/home/page";
import LatestWork from "./pages/latestWork/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-work" element={<LatestWork />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
