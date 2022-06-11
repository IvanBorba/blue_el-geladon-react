import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalNewPalette = ({ closeModal, getPalettes }) => {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleCreatePalette = async () => {
    const newPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    // ----- REQUISIÇÃO COM FETCH

    // const response = await fetch("http://localhost:8080/paletas/criar-paleta", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "cors",
    //   body: JSON.stringify(newPalette),
    // });

    // ----- REQUISIÇÃO COM AXIOS

    const response = await api.post("/paletas/criar-paleta", newPalette);

    if (response.status !== 201) {
      return toast.error("Falha na criação da paleta");
    }

    setSabor("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    getPalettes();
    toast.success("Paleta adicionada ao cardápio");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar ao cardápio</h3>
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
        <button onClick={handleCreatePalette}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewPalette;
