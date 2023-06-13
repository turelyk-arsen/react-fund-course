import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible}) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    // <div className={[cl.myModal, cl.active].join(' ')}>
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) =>e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default MyModal;
