// Page1.jsx
import React from 'react';
import { useState } from "react";
import styled from 'styled-components';


const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 16px;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 12px;
  font-weight: bold;
`;

const FormBox = styled.div`
  padding: 20px;
  border: 20px solid #ccc; /* Increase border thickness */
  border-radius: 8px;
  width: 300px; /* Adjust width as needed */
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

const Page1 = () => {
  const [selectedOptionTila, setSelectedOptionTila] = useState("-");

	const  handleDropdownChangeTila = (event) => {
		setSelectedOptionTila(event.target.value);
  }
  const [selectedOptionKampus, setSelectedOptionKampus] = useState("-");

	const  handleDropdownChangeKampus = (event) => {
		setSelectedOptionKampus(event.target.value);
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
     <Container> 
     <FormBox>
     <h2>Jatkuva katselmointi</h2>
      <StyledForm>
                <StyledLabel>
                    Katselmointiryhmä:
                    <StyledInput type="text" name="text" />
                    
                </StyledLabel>
                
                <p></p>
                <StyledLabel>
                   Päivämäärä:
                  <StyledInput type="text" name="date"/> 
                  Katselmointi suoritetaan 1-4 kertaa kuussa
                </StyledLabel>
                  
                <p></p>
                  <StyledLabel>
                  Kampus:
                      <StyledSelect  value={selectedOptionKampus} onChange={handleDropdownChangeKampus}>
                      <option  value="-">-</option>
                      <option  value="LAY">Lapin yliopisto</option>
                      <option  value="LAMK Rovaniemi">Lapin ammattikorkeakoulu</option>
                    </StyledSelect>
                  Valittu Kampus: {selectedOptionKampus} 
                  <p></p>
                    Tila:
                      <StyledSelect  value={selectedOptionTila} onChange={handleDropdownChangeTila}>
                      <option  value="-">-</option>
                      <option  value="A310">A310</option>
                      <option  value="A311">A311</option>
                      <option  value="A312">A312</option>
                      <option  value="A313">A313</option>
                      <option  value="A314">A314</option>
                      <option  value="A315">A315</option>
                    </StyledSelect>
                  </StyledLabel>
                 Valittu tila: {selectedOptionTila} 
                 <p></p>
                 <StyledLabel>Muuta huomioita:
                  <StyledTextArea>
                       
                  </StyledTextArea> 
                  <p>Mitä poisitiivista olet huomannut tarkastusjaksolla:</p>
                 <p> <StyledTextArea>
                        
                  </StyledTextArea> </p> 
                  
                  <StyledButton type="submit">Submit</StyledButton>

                  </StyledLabel> 
                  
    </StyledForm>
    </FormBox>
    </Container>        
      
    </div>
  );
};

export default Page1;