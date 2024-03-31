import { GiCancel } from "react-icons/gi";
import { MdOutlineDelete } from "react-icons/md";
export const CrossIcon = ({ onClick, color = "" }) => {
  return (
    <GiCancel
      className={`text-2xl text-${color} cursor-pointer`}
      onClick={onClick}
    />
  );
};

export const DeleteIcon = ({ onClick, color = "" }) => {
  return (
    <MdOutlineDelete
      className={`text-2xl text-${color} cursor-pointer`}
      onClick={onClick}
    />
  );
};
