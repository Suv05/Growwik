
import React from 'react';

const FileUploadProgress = ({ filePrec }) => {
  return (
    <div className="progress-bar-container mb-4 text-xs flex rounded bg-white/5 backdrop-blur-sm border border-white/10">
      <div
        className="progress-bar bg-gradient-to-r from-yellow-400 to-orange-500"
        style={{ width: `${filePrec}%` }}
      ></div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        Uploading...
      </span>
    </div>
  );
};

export default FileUploadProgress;


