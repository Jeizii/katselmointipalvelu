import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  align-items: centet;
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




const CheckboxGroup = ({ label, options, selectedOptions, handleCheckboxChange }) => {
  return (
    <div>
      <StyledLabel>{label}:</StyledLabel>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={`${option}_${label}_checkbox`}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={`${option}_${label}_checkbox`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

const Page2 = () => {
  const [selectedOptionsTila, setSelectedOptionsTila] = useState(["-"]);
  const [selectedOptionsValinta1, setSelectedOptionsValinta1] = useState(["-"]);
  const [selectedOptionsValinta2, setSelectedOptionsValinta2] = useState(["-"]);
  const [selectedOptionKampus, setSelectedOptionKampus] = useState("-");
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    navigateTo('/GoodbyePage')
  };

  const handleDropdownChangeTila = (event) => {
    setSelectedOptionsTila([event.target.value]);
  };

  const handleDropdownChangeKampus = (event) => {
    setSelectedOptionKampus(event.target.value);
  };

  const handleCheckboxChangeValinta1 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta1((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleCheckboxChangeValinta2 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta2((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Container>
        <FormBox>
          <h2>Luku- ja vuosi katselmointi</h2>
          <StyledForm>
            <StyledLabel>
              Katselmointiryhmä:
              <StyledInput type="text" name="text" />
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Päivämäärä:
              <StyledInput type="text" name="date" />
              Katselmointi suoritetaan 1-4 kertaa kuussa
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Kampus:
              <StyledSelect value={selectedOptionKampus} onChange={handleDropdownChangeKampus}>
                <option value="-">-</option>
                <option value="LAY">Lapin yliopisto</option>
                <option value="LAMK Rovaniemi">Lapin ammattikorkeakoulu</option>
              </StyledSelect>
              Valittu Kampus: {selectedOptionKampus}
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Tila:
              <StyledSelect value={selectedOptionsTila[0]} onChange={handleDropdownChangeTila}>
                <option value="-">-</option>
                <option value="A310">A310</option>
                <option value="A311">A311</option>
                <option value="A312">A312</option>
                <option value="A313">A313</option>
                <option value="A314">A314</option>
                <option value="A315">A315</option>
              </StyledSelect>
              Valittu tila: {selectedOptionsTila.join(", ")}
            </StyledLabel>

            <p></p>
            <StyledLabel>
            <CheckboxGroup
              label="Yleisilme
              Onko yleisilme siisti? Millä tasolla päivittäiskatselmointien tulokset on? Onko havaittuihin poikkeamiin reagoitu?"
              options={['Edelläkävijä', 'Sitoutunut', 'Puutteellinen']}
              selectedOptions={selectedOptionsValinta1}
              handleCheckboxChange={handleCheckboxChangeValinta1}
            />
            </StyledLabel>

            <p></p>
            <p></p>
            <StyledLabel>
            <CheckboxGroup
              label="Ohjeistukset
              Onko ohjeistukset saatavilla ja ajantasaiset? Noudatetaanko annettuja ohjeita?"
              options={['Edelläkävijä', 'Sitoutunut', 'Puutteellinen']}
              selectedOptions={selectedOptionsValinta2}
              handleCheckboxChange={handleCheckboxChangeValinta2}
            />
            </StyledLabel>

            <p></p>

            <StyledLabel>
              Muuta huomioita:
              <StyledTextArea></StyledTextArea>
              <p>Mitä positiivista olet huomannut tarkastusjaksolla:</p>
              <StyledTextArea></StyledTextArea>
            </StyledLabel>

            <StyledButton type="button" onClick={handleSubmit}> Submit </StyledButton>
          </StyledForm>
        </FormBox>
      </Container>
    </div>
  );
};

export default Page2;
