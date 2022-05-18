import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import User from "./pages/User";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
