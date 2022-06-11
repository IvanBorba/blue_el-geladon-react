import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";

const ModalEditPalette = ({ closeModal, palette, getPalettes }) => {
  const [sabor, setSabor] = useState(palette.sabor);
  const [preco, setPreco] = useState(palette.preco);
  const [descricao, setDescricao] = useState(palette.descricao);
  const [foto, setFoto] = useState(palette.foto);

  const handleEditPalette = async () => {
    const editedPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    // REQUISIÇÃO COM FETCH

    // const response = await fetch(
    //   `http://localhost:8080/paletas/atualizar-paleta/${palette._id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "cors",
    //     body: JSON.stringify(editedPalette),
    //   }
    // );

    // REQUISIÇÃO COM AXIOS

    const response = await api.put(
      `/paletas/atualizar-paleta/${palette._id}`,
      editedPalette
    );

    if (response.status !== 200) {
      return toast.error("A atualização falhou");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta atualizada com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar paleta</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={sabor}
          placeholder="Digite o sabor"
          onChange={(event) => setSabor(event.target.value)}
          name="sabor"
        />
        <input
          value={preco}
          placeholder="Digite o preço"
          onChange={(event) => setPreco(event.target.value)}
          name="preco"
          type="number"
        />
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={foto}
          placeholder="Digite o caminho da foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
        />
        <button onClick={handleEditPalette}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditPalette;
