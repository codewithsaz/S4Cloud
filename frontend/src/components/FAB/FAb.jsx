import React from "react";
import { Button } from "@material-tailwind/react";
import UploadButton from "../UploadButton/UploadButton";

const FAb = () => {
  return (
    <div className="fixed bottom-6 right-4 sm:rounded-full lg:hidden">
      {/* <Button
        variant="filled"
        size="lg"
        className=" flex items-center justify-center hover:bg-gray-800"
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
      </Button> */}
      <UploadButton />
    </div>
  );
};

export default FAb;
