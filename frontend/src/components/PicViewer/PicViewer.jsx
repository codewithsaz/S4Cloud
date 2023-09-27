import React, { useState } from "react";

import DeleteFileBtn from "../DeleteFileBtn/DeleteFileBtn";

const PicViewer = (props) => {
  const openFileInNewTab = () => {
    window.open(props.url, "_blank");
  };
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <div
      // key={props.id}
      className=" w-44 sm:w-48 h-max bg-gray-300 rounded-lg p-1 flex-col relative"
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
      onClick={openFileInNewTab}
    >
      {showDeleteBtn && (
        <div
          className="absolute top-1 right-1 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteFileBtn fileID={props.id} />
        </div>
      )}
      <img
        className=" h-32 w-full rounded-md object-cover object-center"
        src={
          props.url
            ? props.url
            : "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        }
        alt="nature image"
      />
      <div className="p-1 w-full text-sm">
        <p className=" truncate">
          {props.name ? props.name : "NatureImage.png"}
        </p>
        <div className="flex justify-between">
          <p>{props.date ? props.date : "20-11-2022"}</p>
          <p>{props.size ? props.size : "8.2MB"}</p>
        </div>
      </div>
    </div>
  );
};

export default PicViewer;
