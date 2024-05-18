import { MdCancel } from "react-icons/md";
import React from "react";

const CloseIcon = ({onClick}) => {
  return (
    <MdCancel
      className="text-white text-4xl cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CloseIcon;
