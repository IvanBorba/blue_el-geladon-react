import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // Declaração dos states
  const [palettes, setPalettes] = useState([]);

  // Declaração das funções
  const getPalettes = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setPalettes(response.data);
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
