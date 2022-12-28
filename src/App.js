import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Lost } from "./pages/Lost";
import { Win } from "./pages/Win";
import { Jogo } from "./pages/Jogo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jogo" element={<Navigate to="/" replace />} />
        <Route path="jogo/:difficulty" element={<Jogo />} />
        <Route path="vitoria" element={<Win />} />
        <Route path="derrota" element={<Lost />} />
      </Routes>
    </BrowserRouter>
  );
}
