import React, { ReactNode, useContext } from "react";

import Nav from "./components/utils/NavBar";
import { AppContext } from "./contexts/AppContext";
import Modal from "./components/utils/Modal";

interface IAppProps {
  children?: ReactNode;
}

function App({ children }: IAppProps) {
  const { setShowModal, showModal } = useContext(AppContext);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal message="Deseja continuar?" onClick={handleCloseModal} />
      )}
      <Nav color={"var(--nav-background)"} />

      {children}
    </div>
  );
}

export default App;
