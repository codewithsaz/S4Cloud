import React from "react";
import { Button } from "@material-tailwind/react";
import { useFile } from "../Context/FileContext";

const DeleteFileBtn = (props) => {
  const { fileDelete } = useFile();

  function onDelete() {
    fileDelete(props.fileID);
    // console.log("Deleted", );
  }
  return (
    <button
      className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
      onClick={onDelete}
    >
      X
    </button>
  );
};

export default DeleteFileBtn;
