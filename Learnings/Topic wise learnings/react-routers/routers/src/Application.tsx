import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homes";
import AboutPage from "./pages/About";
import LayoutComponent from "./components/Layout";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path=":number" element={<AboutPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
