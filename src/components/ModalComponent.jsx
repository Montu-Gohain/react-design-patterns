/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalBackground = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  animation: ${slideDown} 0.3s ease-in;
`;

const ModalComponent = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)}>Hide</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default ModalComponent;
