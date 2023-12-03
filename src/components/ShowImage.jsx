// ImageUploader.js
import React, { useState } from 'react';

const ShowImage = () => {
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

  const handleImageDelete = () => {
    // Delete image logic goes here
    setImage(null); // Reset the image state after deletion
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <button onClick={handleImageDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ShowImage;