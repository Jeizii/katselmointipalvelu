// Page3.jsx
import React from 'react';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import Supabaseinit from '../components/SupabaseClient';
import FileUploadComponent from '../components/FileUploadComponent';



const Page3 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Page 1</h2>
    <FileUploadComponent></FileUploadComponent>
    <FileUploadComponent></FileUploadComponent>
      
      <p>
                Tälle sivulle tulee turvallisuuskatselmointi
      </p>
    </div>
  );
};

export default Page3;
