import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./style.scss";

type DeleteButtonProps = {
  name: string;
  width: number;
  height: number;
  onDelete: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({
  name,
  width,
  height,
  onDelete,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    onDelete();
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button
        className="delete-button"
        style={{ width: width, height: height }}
        onClick={showModal}
      >
        {"Delete" + " " + name}
      </button>
      <ModalWindow
        open={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete Team"
        cancelText="Cancel"
      />
    </>
  );
};

export default DeleteButton;
