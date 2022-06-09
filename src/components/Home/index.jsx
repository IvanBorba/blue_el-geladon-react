import "./style.css";
import Card from "../Card";
import { useState } from "react";

const Home = ({ palettes, getPalettes }) => {
  const [filterInput, setfilterInput] = useState("");

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <input
        value={filterInput}
        onChange={(event) => setfilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      <div>
        {filterInput !== ""
          ? palettes
              .filter((element) =>
                element.sabor.toLowerCase().includes(filterInput.toLowerCase())
              )
              .map((element) => {
                return (
                  <Card
                    getPalettes={getPalettes}
                    key={element._id}
                    palette={element}
                  />
                );
              })
          : palettes.map((element) => {
              return (
                <Card
                  getPalettes={getPalettes}
                  key={element._id}
                  palette={element}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
