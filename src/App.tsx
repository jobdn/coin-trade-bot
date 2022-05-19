import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./components/Layout/";
import { routes } from "./routes";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {routes.map((route) => (
          // TODO: Should I use such syntax as <route.element />
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
