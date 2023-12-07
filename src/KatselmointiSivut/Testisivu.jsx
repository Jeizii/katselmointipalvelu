import React, { useRef, useState } from "react";
import styled from "styled-components";
import FileUploadComponent from "../components/FileUploadComponent";
import { supabase } from "../services/supabase";
import { useNavigate } from 'react-router-dom';
import ContinousAudit from "../components/testiKomponentti";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 16px;
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 12px;
  font-weight: bold;
`;

const FormBox = styled.div`
  padding: 20px;
  border: 20px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 2px;
  font-size: 16px;
  margin-top: 8px;
  border: 1px solid #808080;
  border-radius: 4px;
  outline: none;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-top: 8px;
  border: 1px solid #808080;
  border-radius: 4px;
  outline: none;
`;

const StyledTextArea = styled.textarea`
  width: 250px;
  padding: 8px;
  font-size: 14px;
  resize: none;
  line-height: 1.5;
  margin-top: 8px;
  border: 1px solid #808080;
  border-radius: 4px;
  outline: none;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const publicImageBaseURL =
  "https://ozvupwelqotiudtrymxk.supabase.co/storage/v1/object/public/testbucket/";

const CheckboxGroup = ({
  label,
  options,
/*   selectedOptions,
  handleCheckboxChange, */
}) => {
  return (
    <div>
      <StyledLabel>{label}:</StyledLabel>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name={"condition"}
            value={option}
            id={`${option}_${label}_checkbox`}
/*             value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange} */
          />
          <label htmlFor={`${option}_${label}_checkbox`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

const Testisivu = () => {

  
  const navigateTo = useNavigate();


  const handleUpload = async () => {

    if (filesUploaded.length > 0) {
      const filePromises = filesUploaded.map((file) => {
        return supabase.storage
          .from("testbucket")
          .upload(`/${file.name}`, file);
      });

      const files = await Promise.allSettled(filePromises);

      return files.map((response) => {

      

        if(response.status === 'rejected'){
          console.log(response.reason)
          return null
        }

        const {data, error} = response.value

        if (error) {
          console.error("Error uploading file:", error.message);
          return null
        } else {
          console.log("File uploaded successfully:", data);
          return data.path;
        }
      });
    }
  };

    const formElement = useRef()

    const [filesUploaded, setFilesUploaded] = useState([]);
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formElement.current)
    const payload = Object.fromEntries(formData)
    const images = await handleUpload();
    payload.images = images ? images.join():""
    /* console.log(payload) */
    
/*     const payload = {
      selectedOptionsTila,
      selectedOptionsValinta1,
      selectedOptionKampus,
      selectedOptionNotes,
      selectedOptionsOtherNotes,
      selectedOptionsDate,
      files: images,
    };
    console.log(payload); */

    // Tässä lähetys supabasen tietokantaan

      const { data, error } = await supabase
      .from('Form').insert([payload,]).select()
        console.log(data)
      
      // Voidaan navigoida esim. sivulle jossa tehtyä katselmointia voidaan tarkastella 
      // id:n perusteella
/*       navigateTo('/GoodbyePage') */
      
      /* 
      
      Relaatiot.

      Tässä esimerkissä image on omassa taulussa. Imagella on formin id jolle se kuuluu,
      joten se voidaan hakea mukaan dataan yhdellä queryllä seuraavasti:*/
/*
      const { data, error } = await supabase.from('Form').select(`
        *,
        image ( path )
      `).eq("id", 1) 
      */
      
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Container>
        <FormBox>
          <h2>Jatkuva katselmointi</h2>
          <StyledForm ref={formElement} onSubmit={handleSubmit}>
            
            <ContinousAudit>
                
            <FileUploadComponent
                setFilesUploaded={setFilesUploaded}
            ></FileUploadComponent>

            {filesUploaded.map(f => f.name).join(" ")}

            </ContinousAudit>




          </StyledForm>
        </FormBox>
      </Container>
    </div>
  );
};

export default Testisivu;
