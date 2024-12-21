// "use client"

import React from "react";
import { FaUpload } from "react-icons/fa6";
import { CldUploadWidget, CldUploadWidgetResults } from "next-cloudinary";

interface FileUploadProps {
  onChange: (url?: string) => void;
}

const FileUpload = ({onChange}: FileUploadProps) => {
  const handleUpload = (result: CldUploadWidgetResults) => {
    try {
      const info = result.info as object;
  
      if ("secure_url" in info && "public_id" in info) {
        const url = info.secure_url as string;
        onChange(url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // You can also display an error message to the user here
    }
  };

  return (


    <CldUploadWidget
      uploadPreset="course_images"
      options={{ sources: ["local", "url", "unsplash"] }}
      onUpload={handleUpload}
    >
      {({ open }) => {
        return (
          <button
            className="mt-4 p-4 border rounded-xl bg-background border-dotted dark:border-solid min-h-[200px] flex items-center justify-center cursor-pointer w-full hover:bg-accent/50 duration-300 transition-all" 
            onClick={() => open()}
          >
            <FaUpload className="text-4xl text-muted-foreground" />
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default FileUpload;
