// Page4.jsx
import React from 'react';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import Supabaseinit from '../components/SupabaseClient';

import { useState } from "react";
import styled from 'styled-components';
import { supabase } from "../services/supabase";


const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 16px;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 12px;
  font-weight: bold;
  center: align;
`;

const FormBox = styled.div`
  padding: 20px;
  border: 20px solid #ccc; /* Increase border thickness */
  border-radius: 8px;
  border: center;
  width: 300px; /* Adjust width as needed */
  background-color: #DFC5FE
  ;
  
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
  selectedOptions,
  handleCheckboxChange,
}) => {
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

const Page4 = () => {
  const [selectedOptionsResponsiblePerson, setSelectedOptionsResponsiblePerson] = useState(["-"]); //
  const [selectedOptionNotes, setSelectedOptionsNotes] = useState(["-"]);
  const [selectedOptionsOtherNotes, setSelectedOptionsOtherNotes] = useState(["-"])
  const [selectedOptionsDate, setSelectedOptionsDate] = useState(["-"])
  const [selectedOptionsCheckRule, setSelectedOptionsCheckRule] = useState(["-"]) //
  const [selectedOptionsCheckOnTime, setSelectedOptionsCheckOnTime] = useState(["-"]) //
  const [selectedOptionsCheckReport, setSelectedOptionsCheckReport] = useState(["-"]) //
  const [selectedOptionsCheckDocument, setSelectedOptionsCheckDocument] = useState(["-"]) //
  const [selectedOptionsCheckMessage, setSelectedOptionsCheckMessage] = useState(["-"]) //
  const [selectedOptionsCheckResource, setSelectedOptionsCheckResource] = useState(["-"]) //
  const [selectedOptionsCheckTarget, setSelectedOptionsCheckTarget] = useState (["-"]) //
  const [selectedOptionsCheckRequisites, setSelectedOptionsCheckRequisites] = useState (["-"])
  

  const handleChangeRequisites = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckRequisites((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeTarget = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckTarget((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeResource = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckResource((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeReport = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckReport((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeMessage = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckMessage((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeDocument = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckDocument((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeOnTime = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckOnTime((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  

  const handleChangeCheckRule = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckRule((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  

 

  const handleCheckboxChangeResponsiblePerson = (event) => {
    const option = event.target.value;
    setSelectedOptionsResponsiblePerson((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleNotesChange = (event) => {
    setSelectedOptionsNotes(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedOptionsDate(event.target.value);
  };

  const handleOtherNotesChange = (event) => {
    setSelectedOptionsOtherNotes(event.target.value);
  };
  const handleKatselmoijaChange = (event) => {
    setSelectedOptionsKatselmoija(event.target.value);
  };






  const handleSubmit = async (event) => {
    event.preventDefault();
 
    
    const images = await handleUpload();

    console.log(images)
    
    const payload = {
      selectedOptionsResponsiblePerson, 
      selectedOptionNotes,
      selectedOptionsOtherNotes,
      selectedOptionsDate,
      selectedOptionsCheckRule, 
      selectedOptionsCheckMessage, 
      selectedOptionsCheckDocument, 
      selectedOptionsCheckReport, 
      selectedOptionsCheckOnTime, 
      selectedOptionsCheckResource, 
      selectedOptionsCheckTarget, 
      selectedOptionsCheckRequisites 
    };
    console.log(payload);
    // Tässä lähetys supabasen tietokantaan

     const { data, error } = await supabase
      .from('Form').insert([{
          group: selectedOptionkatselmointiryhma,
          campus: selectedOptionKampus,
          space: selectedOptionsTila,
          condition: selectedOptionsResponsiblePerson,
          notes: selectedOptionNotes,
          images: images, // Tekee arraysa stringin: "kuva_abc.png,kuva_123.jpg"
          other_notes: selectedOptionsOtherNotes,
          date: selectedOptionsDate,
        },
      ])
      .select() 

    
      navigate("/home")
         
      
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Container>
        <FormBox>
          <h2>Toimintamallin ja johtamisen katselmoinnit</h2>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Katselmoija:
              <StyledInput type="text" name="text"
              onChange={handleKatselmoijaChange} />
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Päivämäärä:
              <StyledInput type="text" name="date"
              onChange={handleDateChange} />
              Katselmointi suoritetaan kerran vuodessa
            </StyledLabel>

  
            

            <p></p>
            <StyledLabel>
              <CheckboxGroup
                label="onko vastuu henkilö nimetty?"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsResponsiblePerson}
                handleCheckboxChange={handleCheckboxChangeResponsiblePerson}
              />

              <p></p>
              <p></p>

                <CheckboxGroup
                label="Noudetetaanko annettuja ohjeita?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckRule}
                handleCheckboxChange={handleChangeCheckRule}
              />

              <p></p>
              <p></p>
                <CheckboxGroup
                label="Onko katselmointi ja raportti ajallaan vuosikellon mukaisesti?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckOnTime}
                handleCheckboxChange={handleChangeOnTime}
              />

              <p></p>
              <p></p>

                <CheckboxGroup
                label="onko 6s raportit säännöllisiä?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckReport}
                handleCheckboxChange={handleChangeReport}
              />
                <p></p>
                <p></p>
                <CheckboxGroup
                label="onko dokumenttipankki ajantasalla?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckDocument}
                handleCheckboxChange={handleChangeDocument}
              />
              <p></p>
              <p></p>
               <CheckboxGroup
                label="Onko viestintä suunnitelman mukaisesti?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckMessage}
                handleCheckboxChange={handleChangeMessage}
              />  
              <p></p>
              <p></p>
              <CheckboxGroup
                label="onko tavoitteet on tunnistettu?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckTarget}
                handleCheckboxChange={handleChangeTarget}
              />  

              <p></p>
              <p></p>
              <CheckboxGroup
                label="onko resursointi riittävä?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckResource}
                handleCheckboxChange={handleChangeResource}
              />  
              <p></p>
              <p></p>
              <CheckboxGroup
                label="onko periaatteet, tarpeet ja vaatimukset tunnistettu sekä kirjattu?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckRequisites}
                handleCheckboxChange={handleChangeRequisites}
              />
              
                

            </StyledLabel>

            <p></p>
            <p></p>

            <p></p>

          

            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </FormBox>
      </Container>
    </div>
  );
};

export default Page4;

