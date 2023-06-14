import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.center}>
      <div className={cl.loader}>
        {/* <h4 className={cl.center}>Loading...</h4> */}
      </div>
    </div>
  );
};

export default Loader;
