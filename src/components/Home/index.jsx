import "./style.css";
import { useState, useEffect } from "react";
import Card from "../Card";

const Home = () => {
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
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palettes.map((element) => {
          return <Card key={element._id} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
