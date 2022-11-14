import { react, useState } from "react";
import Header from "./components/Header";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
