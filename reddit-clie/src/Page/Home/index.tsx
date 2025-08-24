import { LaneAdding } from "../../component/Lane_Component/LaneAdding";
import LaneManager from "../../component/Lane_Component/LaneManager";
import Modal from "../../component/Modal";
import React, { useState } from "react";
import "./home.css"
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="wrapper">
    <div>
      <LaneManager/>
      
      </div>
      <div className="btn">
    <button onClick={handleOpenModal}>+</button>

      </div>
    </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LaneAdding />
      </Modal>
    </>
  );
};

export default Home;
