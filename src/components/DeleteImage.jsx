// ImageUploader.js
import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && 
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}
          <button onClick={handleImageDelete}>Delete</button>
    </div>
  );
};

export default ImageUploader;