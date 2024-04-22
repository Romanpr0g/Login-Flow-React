import React, { useState } from "react";
import { Button, Modal } from "antd";
import teamImg from "../../../../assets/img/team2.png";
import "./style.scss";

type ModalWindowProps = {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  okText: string;
  cancelText: string;
};

const ModalWindow: React.FC<ModalWindowProps> = ({
  visible,
  onOk,
  onCancel,
  okText,
  cancelText,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Team members will no longer see future events for this team or be able to communicate with each other."
  );

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      onOk();
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
      centered
      width={504}
    >
      <img src={teamImg} alt="wk" className="modal-window__image" />
      <h4 className="modal-window__title">Delete this team?</h4>
      <p className="modal-window__info">{modalText}</p>
    </Modal>
  );
};

export default ModalWindow;
