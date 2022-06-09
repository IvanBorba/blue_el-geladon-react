import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import newPaletteIcon from "../../assets/icons/paleta.svg";
import ModalNewPalette from "../Modals/ModalNewPalette";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Header = ({ getPalettes }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-container">
          <img alt="El Geladon Logo" src={logo} />
          <h2>El Geladon</h2>
        </div>
        <div className="headerOptions-container">
          <img
            className="headerOptions-newPaletteIcon"
            alt="Icone de criar nova paleta"
            src={newPaletteIcon}
            onClick={handleShowModalCreate}
          />
          <img
            className="headerOptions-checkoutIcon"
            alt="Sacola de Checkout"
            src={checkoutIcon}
            onClick={() => toast.error("Sessão em desenvolvimento")}
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalNewPalette
          closeModal={handleShowModalCreate}
          getPalettes={getPalettes}
        />
      )}
    </>
  );
};

export default Header;
