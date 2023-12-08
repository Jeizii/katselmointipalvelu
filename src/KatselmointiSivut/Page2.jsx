import React, { useState } from "react";
import styled from "styled-components";
import FileUploadComponent from "../components/FileUploadComponent";
import { supabase } from "../services/supabase";
import { useNavigate } from 'react-router-dom';

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

const Page2 = () => {
  const [selectedOptionsTila, setSelectedOptionsTila] = useState(["-"]);
  const [selectedOptionsValinta1, setSelectedOptionsValinta1] = useState(["-"]);
  const [selectedOptionsValinta2, setSelectedOptionsValinta2] = useState(["-"]);
  const [selectedOptionsValinta3, setSelectedOptionsValinta3] = useState(["-"]);
  const [selectedOptionsValinta4, setSelectedOptionsValinta4] = useState(["-"]);
  const [selectedOptionsValinta5, setSelectedOptionsValinta5] = useState(["-"]);
  const [selectedOptionsValinta6, setSelectedOptionsValinta6] = useState(["-"]);
  const [selectedOptionsValinta7, setSelectedOptionsValinta7] = useState(["-"]);
  const [selectedOptionKampus, setSelectedOptionKampus] = useState("-");
  const [selectedOptionkatselmointiryhma, setSelectedOptionskatselmointiryhma] = useState(["-"])
  const [filesUploaded, setFilesUploaded] = useState(["-"]);
  const [selectedOptionNotes, setSelectedOptionsNotes] = useState(["-"]);
  const [selectedOptionsOtherNotes, setSelectedOptionsOtherNotes] = useState(["-"])
  const [selectedOptionsDate, setSelectedOptionsDate] = useState(["-"])
  
  const navigateTo = useNavigate();

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

  const handleCheckboxChangeValinta3 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta3((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleCheckboxChangeValinta4 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta4((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleCheckboxChangeValinta5 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta5((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleCheckboxChangeValinta6 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta6((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [option];
      }
    });
  };

  const handleCheckboxChangeValinta7 = (event) => {
    const option = event.target.value;
    setSelectedOptionsValinta7((prevSelectedOptions) => {
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
      .from('vuosikausikatselmointi').insert([{
          group: selectedOptionkatselmointiryhma,
          campus: selectedOptionKampus,
          space: selectedOptionsTila,
          condition: selectedOptionsValinta1,
          condition2: selectedOptionsValinta2,
          condition3: selectedOptionsValinta3,
          condition4: selectedOptionsValinta4,
          condition5: selectedOptionsValinta5,
          condition6: selectedOptionsValinta6,
          condition7: selectedOptionsValinta7,
          notes: selectedOptionNotes,
          images: images, // Tekee arraysa stringin: "kuva_abc.png,kuva_123.jpg"
          other_notes: selectedOptionsOtherNotes,
          date: selectedOptionsDate
        },
      ])
      .select() 

      
      // Voidaan navigoida esim. sivulle jossa tehtyä katselmointia voidaan tarkastella 
      // id:n perusteella
      navigateTo('/GoodbyePage')
      
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
          <h2>Lukuvuosi katselmointi</h2>
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
              Katselmointi suoritetaan 1-2 kertaa vuodessa
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
                label="Yleisilme: Onko yleisilme siisti? Millä tasolla päivittäiskatselmointien tulokset on? Onko havaittuihin poikkeamiin reagoitu?"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta1}
                handleCheckboxChange={handleCheckboxChangeValinta1}
              />
            </StyledLabel>

            <p></p>
            <p></p>

            <StyledLabel>
              <CheckboxGroup
                label="Ohjeistukset: Onko ohjeistukset saatavilla ja ajantasaiset? Noudatetaanko annettuja ohjeita?"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta2}
                handleCheckboxChange={handleCheckboxChangeValinta2}
              />
            </StyledLabel>
            <p></p>

            <StyledLabel>
              <CheckboxGroup
                label="Turvallisuus Turvallisuushavaitojen läpikäynti, koneiden ja laitteiden kunto ja turvallisuus, henkilösuojaimet"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta3}
                handleCheckboxChange={handleCheckboxChangeValinta3}
              />
            </StyledLabel>

            <p></p>

          <StyledLabel>
            <CheckboxGroup
              label="Kiertotalous Onko syntyvät erityisjätteet tunnistettu? Onko tarpeelliset kierrätysastiat saatavilla? Huolehditaanko tarvittavat tyhjennykset?"
              options={["Hyvä", "Tyydyttävä", "Huono"]}
              selectedOptions={selectedOptionsValinta4}
              handleCheckboxChange={handleCheckboxChangeValinta4}
            />
          </StyledLabel>


          <p></p>

            <StyledLabel>
              <CheckboxGroup
                label="Kemikaalien hallinta Onko kemikaaliluettelot ajantasalla? Säilytetäänkö kemikaalit asianmukaisesti? Onko varoitusmerkit ja käyttöturvatiedotteet saatavilla?"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta5}
                handleCheckboxChange={handleCheckboxChangeValinta5}
              />
            </StyledLabel>

            <p></p>

            <StyledLabel>
              <CheckboxGroup
                label="Trail - kalustonhallinta Onko laitteet ajantasalla kalustonhallintajärjestelmässä? "
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta6}
                handleCheckboxChange={handleCheckboxChangeValinta6}
              />
            </StyledLabel>

            <p></p>

            <StyledLabel>
              <CheckboxGroup
                label="Tilakohtaiset erityistarkasteltavat asiat (Erikseen nimettävät)"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                selectedOptions={selectedOptionsValinta7}
                handleCheckboxChange={handleCheckboxChangeValinta7}
              />
            </StyledLabel>

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

export default Page2;