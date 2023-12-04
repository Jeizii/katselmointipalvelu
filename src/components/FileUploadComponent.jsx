import React from 'react';

export const FileUploadComponent = ({setFilesUploaded}) => {
  
  const handleFileChange = (event) => {
    setFilesUploaded((files) => [...event.target.files, ...files])
  };
  
  return (
    <div>
      <form>
        <input type="file" name="image" onChange={handleFileChange} />        
      </form>
    </div>
  )
};

export default FileUploadComponent