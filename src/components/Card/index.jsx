import "./style.css";

const Card = ({ key, palette }) => {
  return (
    <div className="card-container">
      <div>
        <p>{`R$${palette.preco.toFixed(2)}`}</p>
        <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
      </div>
      <h3>{palette.sabor}</h3>
      <p>{palette.descricao}</p>
      <button>Adicionar</button>
    </div>
  );
};

export default Card;
