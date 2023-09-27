import React, { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import PicViewer from "../PicViewer/PicViewer";
import VideoViewer from "../VideoViewer/VideoViewer";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useFile } from "../Context/FileContext";
import { useUser } from "../../components/Context/UserContext";
import AudioViewer from "../AudioViewer/AudioViewer";
import DocViewer from "../DocViewer/DocViewer";

const url = "http://localhost:8080";

const UploadButton = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const { addFile } = useFile();
  const { updateUsedStorage } = useUser();

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, so we add 1
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
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

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    const file = acceptedFiles[0];
    console.log(file);
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsDataURL(file); // You can change this to read other types of content
    } else {
      setFileContent(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize: 5242880,
    });

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setSelectedFile(file);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setFileContent(e.target.result);
  //     };
  //     reader.readAsDataURL(file); // You can change this to read other types of content
  //   } else {
  //     setFileContent(null);
  //   }
  // };
  const handleOpen = () => {
    setOpen(!open);
    setSelectedFile(null);
  };
  const handleUpload = async () => {
    // e.preventDefault();
    if (selectedFile) {
      // Here, you can send the 'selectedFile' to your server for further processing
      console.log(selectedFile);
      const fileType = selectedFile.type;
      const fileFormData = new FormData();

      fileFormData.append("name", selectedFile.name);

      if (fileType.startsWith("image/")) {
        fileFormData.append("type", "Image");
      } else if (fileType.startsWith("video/")) {
        fileFormData.append("type", "Video");
      } else if (fileType.startsWith("audio/")) {
        fileFormData.append("type", "Audio");
      } else if (fileType === "application/pdf") {
        fileFormData.append("type", "PDF");
      } else {
        fileFormData.append("type", "Unknown");
      }
      fileFormData.append("size", formatFileSize(selectedFile.size));

      fileFormData.append("date", formatDate(new Date()));

      fileFormData.append("file", selectedFile);
      handleOpen();
      try {
        const res = await axios.post(
          `${url}/upload`,

          fileFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data.success) {
          toast.success("File Uploaded", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          addFile(res.data.file);
          updateUsedStorage(res.data.file.fileSize);
        } else {
          toast.error("File Upload Failed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No file selected.");
    }
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        size="lg"
        className=" flex items-center justify-center bg-indigo-500/100 text-white sm:rounded-full lg:rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <p className=" hidden lg:block">Upload</p>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Upload your files</DialogHeader>
        <DialogBody divider>
          <div className=" h-52 border-2 border-dashed border-indigo-500/100 p-5 flex flex-col justify-center items-center ">
            {/* <FolderOpenIcon className="h-10 w-10" />
            <p>Drag and Drop files to upload</p>
            <input type="file" onChange={handleFileChange} /> */}
            <div
              {...getRootProps({
                className: isDragActive
                  ? " w-full h-full border-2 border-dashed bg-gray-400 text-white  p-5 flex flex-col justify-center items-center rounded-xl"
                  : " w-full h-full   p-5 flex flex-col justify-center items-center rounded-xl",
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </div>
          {fileRejections
            ? fileRejections.map(({ file, errors }) =>
                errors.map((e) => (
                  <p className=" text-red-900" key={e.code}>
                    {e.message}
                  </p>
                ))
              )
            : ""}
          {selectedFile && (
            <div className="h-max">
              <p>Selected File:</p>
              {selectedFile.type.startsWith("image") && (
                <PicViewer
                  url={fileContent}
                  name={selectedFile.name}
                  date={formatDate(new Date())}
                  size={formatFileSize(selectedFile.size)}
                />
              )}
              {selectedFile.type.startsWith("video") && (
                <VideoViewer
                  url={fileContent}
                  name={selectedFile.name}
                  date={formatDate(new Date())}
                  size={formatFileSize(selectedFile.size)}
                />
              )}
              {selectedFile.type.startsWith("audio") && (
                <AudioViewer
                  url={fileContent}
                  name={selectedFile.name}
                  date={formatDate(new Date())}
                  size={formatFileSize(selectedFile.size)}
                />
              )}
              {selectedFile.type.startsWith("application/") && (
                <DocViewer
                  url={fileContent}
                  name={selectedFile.name}
                  date={formatDate(new Date())}
                  size={formatFileSize(selectedFile.size)}
                />
              )}
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleUpload}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default UploadButton;
