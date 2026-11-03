
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import FreshTrack from "./FreshTrack";
import ExpenseTracker from "./ExpenseTracker";

<Route path="/expense-tracker" element={<ExpenseTracker />} />

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/freshtrack" element={<FreshTrack />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
