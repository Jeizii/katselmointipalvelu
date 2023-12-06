// Page3.jsx
import React from 'react';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import Supabaseinit from '../components/SupabaseClient';
import FileUploadComponent from '../components/FileUploadComponent';
import ShowImage from '../components/ShowImage';
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
  background-color: #8d9bb3;
  
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

const Page3 = () => {
  const [selectedOptionsTila, setSelectedOptionsTila] = useState(["-"]);
  const [selectedOptionsValinta1, setSelectedOptionsValinta1] = useState(["-"]);
  const [selectedOptionsValinta2, setSelectedOptionsValinta2] = useState(["-"]);
  const [selectedOptionKampus, setSelectedOptionKampus] = useState("-");
  const [selectedOptionkatselmointiryhma, setSelectedOptionskatselmointiryhma] = useState(["-"])
  const [filesUploaded, setFilesUploaded] = useState([]);
  const [selectedOptionNotes, setSelectedOptionsNotes] = useState(["-"]);
  const [selectedOptionsOtherNotes, setSelectedOptionsOtherNotes] = useState(["-"])
  const [selectedOptionsDate, setSelectedOptionsDate] = useState(["-"])
  const [selectedOptionsCheckSafety, setSelectedOptionsCheckSafety] = useState(["-"])
  const [selectedOptionsCheckRisk, setSelectedOptionsCheckRisk] = useState(["-"])
  const [selectedOptionsCheckGear, setSelectedOptionsCheckGear] = useState(["-"])
  const [selectedOptionsCheckEmergency, setSelectedOptionsCheckEmergency] = useState(["-"])
  const [selectedOptionsCheckChemical, setSelectedOptionsCheckChemical] = useState(["-"])
  const [selectedOptionsCheckRad, setSelectedOptionsCheckRad] = useState(["-"])
  const [selectedOptionsCheckExplosive, setSelectedOptionsCheckExplosive] = useState (["-"])
  const [selectedOptionsCheckSafetyFind, setSelectedOptionsCheckSafetyFind] = useState (["-"])


  const handleChangeSafetyFind = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckSafetyFind((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeExplosion = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckExplosive((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeRad = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckRad((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeGear = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckGear((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeChemical = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckChemical((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleChangeEmergency = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckEmergency((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleChangeRisk = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckRisk((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  

  const handleChangeCheckSafety = (event) => {
    const option = event.target.value;
    setSelectedOptionsCheckSafety((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };


  const handleDropdownChangeTila = (event) => {
    setSelectedOptionsTila([event.target.value]);
  };

  const handleDropdownChangeKampus = (event) => {
    setSelectedOptionKampus(event.target.value);
  };
  const handleKatselmointiryhmaChange = (event) => {
    setSelectedOptionskatselmointiryhma(event.target.value);
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

  const handleNotesChange = (event) => {
    setSelectedOptionsNotes(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedOptionsDate(event.target.value);
  };

  const handleOtherNotesChange = (event) => {
    setSelectedOptionsOtherNotes(event.target.value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    
    const images = await handleUpload();

    console.log(images)
    
    const payload = {
      selectedOptionsTila,
      selectedOptionsValinta1,
      selectedOptionKampus,
      selectedOptionNotes,
      selectedOptionsOtherNotes,
      selectedOptionsDate,
      files: images,
      selectedOptionsCheckSafety,
      selectedOptionsCheckChemical,
      selectedOptionsCheckEmergency,
      selectedOptionsCheckGear,
      selectedOptionsCheckRisk,
      selectedOptionsCheckRad,
      selectedOptionsCheckExplosive,
      selectedOptionsCheckSafetyFind
    };
    console.log(payload);
    // Tässä lähetys supabasen tietokantaan

     const { data, error } = await supabase
      .from('Form').insert([{
          group: selectedOptionkatselmointiryhma,
          campus: selectedOptionKampus,
          space: selectedOptionsTila,
          condition: selectedOptionsValinta1,
          notes: selectedOptionNotes,
          images: images, // Tekee arraysa stringin: "kuva_abc.png,kuva_123.jpg"
          other_notes: selectedOptionsOtherNotes,
          date: selectedOptionsDate,
        },
      ])
      .select() 

      
      // Voidaan navigoida esim. sivulle jossa tehtyä katselmointia voidaan tarkastella 
      // id:n perusteella
      navigate("/home")
      
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
          <h2>Turvallisuuskatselmointi</h2>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Katselmointiryhmä:
              <StyledInput type="text" name="text"
              onChange={handleKatselmointiryhmaChange} />
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Päivämäärä:
              <StyledInput type="text" name="date"
              onChange={handleDateChange} />
              Katselmointi suoritetaan 1-4 kertaa kuussa
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Kampus:
              <StyledSelect
                value={selectedOptionKampus}
                onChange={handleDropdownChangeKampus}
              >
                <option value="-">-</option>
                <option value="LAY">Lapin yliopisto</option>
                <option value="LAMK Rovaniemi">Lapin ammattikorkeakoulu</option>
              </StyledSelect>
              Valittu Kampus: {selectedOptionKampus}
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Tila:
              <StyledSelect
                value={selectedOptionsTila[0]}
                onChange={handleDropdownChangeTila}
              >
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
                label="Yleisilme"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta1}
                handleCheckboxChange={handleCheckboxChangeValinta1}
              />
              <p></p>
              <p></p>
                <CheckboxGroup
                label="Turvallisuusohjeistukset, Ovatko ne saatavilla ja ajantasaiset, Noudetetaanko annettuja ohjeita?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckSafety}
                handleCheckboxChange={handleChangeCheckSafety}
              />
              <p></p>
              
              <p></p>
                <CheckboxGroup
                label="Toiminnan riskiarviointi, Onko riskiarviointi ajantasalla ja onko toiminnan riskiä mahdollisuus pienentää?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckRisk}
                handleCheckboxChange={handleChangeRisk}
              />
              <p></p>
              <p></p>

                <CheckboxGroup
                label="Suojavarusteet, Onko henkilökohtaiset suojavarusteet tunnistettu ja saatavilla? Käytetäänkö niitä?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckGear}
                handleCheckboxChange={handleChangeGear}
              />
                <p></p>
                <CheckboxGroup
                label="Ensiapu- ja palosammuttimet, Onko ensiaputarvikkeet ja palosammuttimet käytettävissä ja ajan tasalla?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckEmergency}
                handleCheckboxChange={handleChangeEmergency}
              />
              <p></p>
               <CheckboxGroup
                label="Kemikaalien hallinta, Onko kemikaaliluettelot ajan tasalla? Säilytetäänkö kemikaalit asianmukaisesti? Onko varoitusmerkit ja käyttöturvatiedotteet saatavilla?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckChemical}
                handleCheckboxChange={handleChangeChemical}
              />  
              <p></p>
              <CheckboxGroup
                label="Räjähdyssuoja-arviointi, Käsitelläänkö tilassa kemikaaleja tai pölyjä? Onko räjähdyssuoja-arviointi ajantasalla?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckExplosive}
                handleCheckboxChange={handleChangeExplosion}
              />  

              <p></p>

              <CheckboxGroup
                label="Säteilyturvallisuusdokumentit, Onko säteilyturvallisuusohjeet ja luvat ajantasalla?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckRad}
                handleCheckboxChange={handleChangeRad}
              />  
              <p></p>
              <CheckboxGroup
                label="Turvallisuushavainnot, Onko tilasta tullut turvallisuushavaintoja? Onko korjaavat toimenpiteet tehty?"
                options={["Puutteellinen", "Sitoutunut", "Edelläkävijä"]}
                selectedOptions={selectedOptionsCheckSafetyFind}
                handleCheckboxChange={handleChangeSafetyFind}
              />  

            </StyledLabel>

            <p></p>
            <p></p>

            <p></p>

            <StyledLabel>
              Muuta huomioita / kehitysideat:
              <StyledTextArea
                  type="text"
                  name="text"
                  onChange={handleOtherNotesChange}
              />
              <FileUploadComponent
                setFilesUploaded={setFilesUploaded}
              ></FileUploadComponent>

              {filesUploaded.map(f => f.name).join(" ")}
      
              <p>Mitä positiivista olet huomannut tarkastusjaksolla?</p>
              
              <StyledTextArea
                type="text"
                  name="text"
                  onChange={handleNotesChange}
              />
            </StyledLabel>

            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </FormBox>
      </Container>
    </div>
  );
};

export default Page3;

