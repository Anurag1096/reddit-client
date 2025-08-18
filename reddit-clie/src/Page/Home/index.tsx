import { LaneAdding } from "../../component/Lane_Component/LaneAdding";
import Modal from "../../component/Modal";
import React, { useState } from "react";

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
      <button onClick={handleOpenModal}>+</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LaneAdding />
      </Modal>
    </>
  );
};

export default Home;
