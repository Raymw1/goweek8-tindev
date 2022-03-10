import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="dev/:id" element={<Main />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
