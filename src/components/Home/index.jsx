import "./style.css";
import Card from "../Card";
import { useState } from "react";
import ReactLoading from "react-loading";

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
      {palettes.length === 0 ? (
        <ReactLoading type="spin" color="lightblue" />
      ) : (
        <div>
          {filterInput !== ""
            ? palettes
                .filter((element) =>
                  element.sabor
                    .toLowerCase()
                    .includes(filterInput.toLowerCase())
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
      )}
    </div>
  );
};

export default Home;
