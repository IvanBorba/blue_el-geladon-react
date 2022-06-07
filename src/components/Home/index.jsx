import "./style.css";
import paletas from "../../mock/paletas";
import { useState } from "react";
import Card from "../Card";

const Home = () => {
  const [palette, setPalette] = useState(paletas);

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palette.map((element) => {
          return <Card key={element.id} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
