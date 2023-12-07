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

const Page1 = () => {
  const [selectedOptionsTila, setSelectedOptionsTila] = useState(["-"]);
  const [selectedOptionsValinta1, setSelectedOptionsValinta1] = useState(["-"]);
  const [selectedOptionKampus, setSelectedOptionKampus] = useState("-");
  const [selectedOptionkatselmointiryhma, setSelectedOptionskatselmointiryhma] = useState(["-"])
  const [filesUploaded, setFilesUploaded] = useState([]);
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
          <h2>Jatkuva katselmointi</h2>
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
    <option value="A102">A102</option><option value="A106">A106</option><option value="A111">A111</option><option value="A111A">A111A</option>
    <option value="A111B">A111B</option><option value="A111C">A111C</option><option value="A111D">A111D</option><option value="A111E">A111E</option><option value="A130">A130</option>
    <option value="A132">A132</option> <option value="A134 ">A134 Ryhmätyötila</option><option value="A136a ">A136a Ryhmätyötila</option><option value="A136b ">A136b Ryhmätyötila</option>
    <option value="A136c ">A136c Ryhmätyötila</option><option value="A142">A142</option><option value="A147">A147</option>

    <option value="A202">A202</option><option value="A203">A203</option><option value="A204">A204</option><option value="A205">A205</option><option value="A206">A206</option>
    <option value="A214">A214</option><option value="A215">A215A</option><option value="A216">A216</option><option value="A217">A217</option><option value="A218">A218</option>

    <option value="A305">A305</option><option value="A306">A306</option><option value="A307">A307</option><option value="A308">A308</option><option value="A309">A309</option>
    <option value="A310">A310</option><option value="A318">A318</option><option value="A320">A320</option><option value="A321">A321</option>

    <option value="B108">B108</option><option value="B114">B114</option><option value="B115">B115</option><option value="B116">B116</option><option value="B117B">B117B</option>
    <option value="B118">B118</option><option value="B123">B123</option><option value="B124">B124</option><option value="B133A">B133A</option><option value="B146">B146</option>
    <option value="B149">B149</option><option value="B156">B156</option><option value="B166">B166 INFO</option><option value="B167">B167</option>

    <option value="B202">B202</option><option value="B203">B203</option><option value="B210">B210</option><option value="B211">B211</option><option value="B212">B212</option>
    <option value="B215">B215</option><option value="B217">B217</option><option value="B218">B218</option><option value="B219">B220</option><option value="B221">B221</option>
    <option value="B222A">B222A</option><option value="B222B">B222B</option><option value="B228">B228</option><option value="B233">B233</option><option value="B235">B202</option>
    <option value="B235A">B235A</option><option value="B235B">B235B</option><option value="B236A">B236A</option><option value="B236B">B236B</option><option value="B237">B237</option>
    <option value="B242">B243</option><option value="B243">B202</option><option value="B244">B244</option><option value="B247">B247</option>

    <option value="B302">B302</option><option value="B302A">B302A</option><option value="B303A">B303A</option><option value="B303B">B303B</option><option value="B303C">B303C</option>
    <option value="B305">B305</option><option value="B310A">B310A</option><option value="B310B">B310B</option><option value="B310C">B310C</option><option value="B312">B312</option>
    <option value="B313">B313</option><option value="B314A">B314A</option><option value="B314B">B314B</option><option value="B314C">B314C</option><option value="B315A">B315A</option>
    <option value="B315B">B315B</option><option value="B316">B316</option><option value="B320B">B320B</option><option value="B320C">B320C</option><option value="B321">B321</option>
    <option value="B322">B322</option><option value="B323">B323</option><option value="B323">B323</option><option value="B324">B324</option><option value="B329">B329</option>
    <option value="B330">B330</option><option value="B331">B331</option><option value="B334">B334</option><option value="B337">B337</option><option value="BIOLABRA">Biolabra</option>

    <option value="C033">C033</option><option value="C100">C100</option><option value="C102">C102</option><option value="C102D">C102D</option><option value="C103">C103</option>
    <option value="C106">C106</option><option value="C107">C107</option><option value="C115">C115</option><option value="C116">C116</option><option value="C117">C117</option>  
    <option value="C118">C118</option><option value="C119">C119</option><option value="C121">C121</option><option value="C125A">C125A</option><option value="C126">C126</option> <option value="C155C">C155C</option>

    <option value="C202">C202</option><option value="C203">C203</option><option value="C206">C206</option><option value="C206A">C206A</option><option value="C215">C215</option>
    <option value="C215B">C215B</option><option value="C216">C216</option><option value="C217">C217</option><option value="C219">C219</option><option value="C222">C222</option>
    <option value="C227">C227</option><option value="C228">C228</option><option value="C229">C229</option><option value="C230">C230</option><option value="C231">C231</option>
    <option value="C232">C232</option><option value="C236">C237</option><option value="C237">C237</option><option value="C238">C238</option><option value="C239">C239</option>

    <option value="C302">C302</option><option value="C303">C303</option><option value="C306">C306</option><option value="C306A">C306A</option><option value="C309">C309</option>
    <option value="C313">C313</option><option value="C313A">C313A</option><option value="C314">C314</option><option value="C315">C315</option><option value="C317">C317</option>
    <option value="C318">C318</option><option value="C319">C319</option><option value="C320">C320</option><option value="C326">C326</option><option value="C328">C328</option>
    <option value="C329">C329</option><option value="C330">C330</option><option value="C331">C331</option><option value="C335">C335</option><option value="C336">C336</option><option value="C337">C337</option><option value="C338">C338</option> 

    <option value="C402">C402</option><option value="C403A">C403A</option><option value="C403B">C403B</option><option value="C403C">C403C</option><option value="C406">C406</option>
    <option value="C407">C407</option><option value="C408">C408</option><option value="C411">C411</option><option value="C414A">C414A</option><option value="C414B">C414B</option>
    <option value="C415">C415</option><option value="C416">C416</option><option value="C417">C417</option><option value="C418">C418</option><option value="C419">C419</option>
    <option value="C420">C420</option><option value="C421">C421</option><option value="C421">C421</option><option value="C422">C422</option><option value="C423">C423</option>
    <option value="C424">C424</option><option value="C429">C429</option><option value="C431">C431</option><option value="C432">C432</option><option value="C433">C433</option>
    <option value="C438">C438</option><option value="C439">C439</option><option value="C440">C440</option>

    <option value="C501">C501</option><option value="C520">C520</option><option value="CAFE LUMEN">CAFE LUMEN</option>
    
    <option value="CB103">CB103</option> <option value="CB104">CB104</option> <option value="CB105">CB105</option> <option value="CB106">CB106</option> <option value="CB107">CB107</option>
    <option value="CB107B">CB107B</option> <option value="CB108">CB108</option> <option value="CB119">CB119</option> <option value="CB121">CB121</option> <option value="CB122">CB122</option>
    <option value="CB127">CB127</option> <option value="CB131">CB131</option>

    <option value="CB204">CB204</option> <option value="CB209">CB209</option> <option value="CB210">CB210</option> <option value="CB211">CB211</option> <option value="CB212">CB212</option>
    <option value="CB224">CB224</option> <option value="CB231">CB231</option> <option value="CB232">CB232</option> <option value="CB233">CB233</option>

    <option value="CB304">CB304</option> <option value="CB305">CB305</option> <option value="CB306">CB306</option> <option value="CB307">CB307</option> <option value="CB308">CB308</option>
    <option value="Ravintola Tekuila">Ravintola Tekuila</option> <option value="ROTKO">ROTKO</option>

            </StyledSelect>
             Valittu tila: {selectedOptionsTila.join(", ")}
            </StyledLabel>

            <p></p>

            <StyledLabel>
            <CheckboxGroup
              label="Tilan Yleisilme"
              options={['Hyvä', 'Tyydyttävä', 'Huono']}
              selectedOptions={selectedOptionsValinta1}
              handleCheckboxChange={handleCheckboxChangeValinta1}
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

export default Page1;
