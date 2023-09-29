import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App(props) {
  return (
    <div>
      <button></button>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
