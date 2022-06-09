import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
  // Declaração dos states
  const [palettes, setPalettes] = useState([]);

  // Declaração das funções
  const getPalettes = async () => {
    const response = await fetch("http://localhost:8080/paletas/listar-todas");
    const palettesList = await response.json();

    console.log("Fez requisição");
    setPalettes(palettesList);
  };

  // Declaração dos ciclos de vida

  // Ciclo de vida de montagem (array vazio)
  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getPalettes={getPalettes} />
      <Home palettes={palettes} getPalettes={getPalettes} />
      <Footer />
    </>
  );
};

export default App;
