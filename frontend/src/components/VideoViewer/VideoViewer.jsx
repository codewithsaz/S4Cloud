import React, { useState } from "react";
import DeleteFileBtn from "../DeleteFileBtn/DeleteFileBtn";

const VideoViewer = (props) => {
  const openFileInNewTab = () => {
    window.open(props.url, "_blank");
  };
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <div
      // key={props.id}
      className=" w-40 sm:w-48 h-max bg-gray-300 rounded-lg p-1 flex-col relative"
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
      <video
        controls
        width="100%"
        className=" h-32 w-full rounded-md object-cover object-center"
        src={
          props.url
            ? props.url
            : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        }
      ></video>
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

export default VideoViewer;
