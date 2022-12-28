import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Lost } from "./pages/Lost";
import { Win } from "./pages/Win";
import { Jogo } from "./pages/Jogo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jogo" element={<Jogo />} />
        <Route path="vitoria" element={<Win />} />
        <Route path="derrota" element={<Lost />} />
      </Routes>
    </BrowserRouter>
  );
}
