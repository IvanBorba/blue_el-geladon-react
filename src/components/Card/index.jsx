import "./style.css";
import { toast } from "react-hot-toast";
import editIcon from "../../assets/images/edit.png";
import removeIcon from "../../assets/images/trash.png";
import ModalRemovePalette from "../Modals/ModalRemovePalette";
import { useState } from "react";

const Card = ({ palette, getPalettes }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <p>{`R$${palette.preco.toFixed(2)}`}</p>
          <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
        </div>
        <h3>{palette.sabor}</h3>
        <p>{palette.descricao}</p>
        <div className="card-body">
          <img alt="Icone de edição" title="Editar" src={editIcon} />
          <img
            onClick={handleShowRemoveModal}
            alt="Icone de remoção"
            title="Remover"
            src={removeIcon}
          />
        </div>
        <button onClick={() => toast.error("Sessão em desenvolvimento")}>
          Adicionar
        </button>
      </div>
      {showRemoveModal && (
        <ModalRemovePalette
          closeModal={handleShowRemoveModal}
          palette={palette}
          getPalettes={getPalettes}
        />
      )}
    </>
  );
};

export default Card;
