import React from "react";
import FAb from "../FAB/FAb";
import PicViewer from "../PicViewer/PicViewer";
import VideoViewer from "../VideoViewer/VideoViewer";
import { useFile } from "../Context/FileContext";
import DocViewer from "../DocViewer/DocViewer";
import AudioViewer from "../AudioViewer/AudioViewer";

const Contents = () => {
  const { files, setFiles, showContent } = useFile();

  function formatFileSize(sizeInBytes) {
    if (sizeInBytes < 1024) {
      return sizeInBytes + " B";
    } else if (sizeInBytes < 1024 * 1024) {
      return (sizeInBytes / 1024).toFixed(2) + "KB";
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + "MB";
    } else {
      return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
  }
  function renderContent(props) {
    const type = props.fileType;
    if (type === "Image") {
      return (
        <PicViewer
          key={props._id}
          id={props._id}
          url={props.fileUrl}
          name={props.fileName}
          date={props.fileUploadDate}
          size={formatFileSize(props.fileSize)}
        />
      );
    } else if (type === "Video") {
      return (
        <VideoViewer
          key={props._id}
          id={props._id}
          url={props.fileUrl}
          name={props.fileName}
          date={props.fileUploadDate}
          size={formatFileSize(props.fileSize)}
        />
      );
    } else if (type === "Audio") {
      return (
        <AudioViewer
          key={props._id}
          id={props._id}
          url={props.fileUrl}
          name={props.fileName}
          date={props.fileUploadDate}
          size={formatFileSize(props.fileSize)}
        />
      );
    } else if (type === "PDF") {
      return (
        <DocViewer
          key={props._id}
          id={props._id}
          url={props.fileUrl}
          name={props.fileName}
          date={props.fileUploadDate}
          size={formatFileSize(props.fileSize)}
        />
      );
    } else {
      <PicViewer key={props._id} />;
    }
  }
  return (
    <>
      {files && files.length > 0 ? (
        <div className="content w-[calc(100%-1rem)] h-[calc(100%-5rem)] lg:h-[calc(100%-6rem)] rounded-lg m-2 p-2 overflow-y-auto flex flex-wrap gap-2 content-start justify-around sm:justify-stretch">
          {/* {files.map((file) => renderContent(file))} */}
          {files.map((file) => {
            if (showContent === "all") {
              return renderContent(file); // Render content for "all" condition
            } else if (showContent === "Image") {
              if (file.fileType === "Image") return renderContent(file);
            } else if (showContent === "Video") {
              if (file.fileType === "Video") return renderContent(file);
            } else if (showContent === "Audio") {
              if (file.fileType === "Audio") return renderContent(file);
            } else if (showContent === "PDF") {
              if (file.fileType === "PDF") return renderContent(file);
            } else {
              return renderContent(file);
            }
          })}

          {/* <PicViewer url="https://images.unsplash.com/photo-1694071132037-5ff85e0da51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
          <PicViewer />
          <VideoViewer />
          <PicViewer />
          <PicViewer />
          <VideoViewer />
          <PicViewer />
          <PicViewer />
          <PicViewer />
          <PicViewer />
          <VideoViewer /> */}
        </div>
      ) : (
        <div>No files available.</div>
      )}

      <FAb />
    </>
  );
};

export default Contents;
