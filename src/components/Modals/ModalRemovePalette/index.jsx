import "./style.css";
import { toast } from "react-hot-toast";
import api from "../../../api";
// import { useEffect } from "react";

const ModalRemovePalette = ({ closeModal, palette, getPalettes }) => {
  const handleRemovePalette = async () => {
    // REQUISIÇÃO COM FETCH

    // const response = await fetch(
    //   `http://localhost:8080/paletas/excluir-paleta/${palette._id}`,
    //   {
    //     method: "DELETE",
    //     mode: "cors",
    //   }
    // );

    // REQUISIÇÃO COM AXIOS

    const response = await api.delete(`/paletas/excluir-paleta/${palette._id}`);

    if (response.status !== 200) {
      return toast.error("Erro na exclusão da paleta");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta excluida com sucesso");
  };

  // useEffect(() => {
  //   return () => {
  //     toast.success("Modal desmontou");
  //   };
  // }, []);

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir a paleta {palette.sabor}?</h3>
        <div className="modalRemove-actions">
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
          <button className="successButton" onClick={handleRemovePalette}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemovePalette;
