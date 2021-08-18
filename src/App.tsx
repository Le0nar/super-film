import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  );
}

export default App;
