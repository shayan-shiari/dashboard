import React from "react";
import Header from "./components/header/Header";
import PannelWrapper from "./components/pannel-wrapper/PannelWrapper";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((item) => (
          <Route key={item.route} path={item.route} element={item.component} />
        ))}
      </Routes>
    </>
  );
};

export default App;
