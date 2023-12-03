import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


export const FileUploadComponent = () => {
  
  
  const supabaseUrl = 'https://ozvupwelqotiudtrymxk.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96dnVwd2VscW90aXVkdHJ5bXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Mjc3NDEsImV4cCI6MjAxNTEwMzc0MX0.4mzq3iSIVo9Kd9ONOtif-vXEoHssSusBZ48D3Ndntio';
  const supabase = createClient(supabaseUrl, supabaseKey);
  

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    
      setSelectedFile(event.target.files[0]);
    
    console.log(event.target.files[0])
  };
  

  const handleUpload = async (event) => {
    event.preventDefault()
    if (selectedFile) {
      const { data, error } = await supabase.storage
        .from('testbucket')
        .upload(`/${selectedFile.name}`, selectedFile);

      if (error) {
        console.error('Error uploading file:', error.message);
      } else {
        console.log('File uploaded successfully:', data);
        // You can perform additional actions after successful upload
      }
    }
  };   
  return (
    <div>
      
      <form>
        <input type="file" name="image" onChange={handleFileChange} />
        <button onClick= {handleUpload} >Nappi</button>
        
      </form>
    </div>
  )
};

export default FileUploadComponent