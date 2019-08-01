import React from "react"
import Portal from "../../Portal"

export const Modal = props => (
  <Portal>
    <ModalContainer>{props.children}</ModalContainer>
  </Portal>
)

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`
