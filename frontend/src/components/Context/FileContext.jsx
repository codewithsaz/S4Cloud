import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { toast } from "react-toastify";

const FileContext = createContext();
const url = "http://localhost:8080";

export const useFile = () => {
  return useContext(FileContext);
};

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]); // Change to 'files' for storing file data
  const [showContent, setshowContent] = useState("all");

  const addFile = (newFile) => {
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };
  const fileDelete = async (fileID) => {
    try {
      // Make an API call to delete the file by ID
      const res = await axios.delete(`${url}/files/${fileID}`);
      if (res.data.success) {
        toast.success("File Deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("File Deletion Failed", {
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
      console.log(res);
      // Update the 'files' state by removing the deleted file
      setFiles((prevFiles) => prevFiles.filter((file) => file._id !== fileID));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/files/all`);
        const fileData = res.data.files;
        setFiles(fileData); // Update 'setUser' to 'setFiles'
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
        addFile,
        showContent,
        setshowContent,
        fileDelete,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
