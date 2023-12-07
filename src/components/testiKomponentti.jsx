import { StyledButton, StyledInput, StyledLabel, StyledSelect, StyledTextArea } from "./StyledComponents";

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

export default function ContinousAudit({children}){



    return   <>
            <StyledLabel>
              Katselmointiryhmä:
              <StyledInput type="text" name="group" />
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Päivämäärä:
              <StyledInput type="date" name="date"/>
              Katselmointi suoritetaan 1-4 kertaa kuussa
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Kampus:
              <StyledSelect
                name="campus"
              >
              
                <option value="LAMK Rovaniemi">Lapin ammattikorkeakoulu</option>
              </StyledSelect>
              {/* Valittu Kampus: {selectedOptionKampus} */}
            </StyledLabel>

            <p></p>
            <StyledLabel>
              Tila:
              <StyledSelect
              name="space"
              >
                <option value="-">-</option>
                <option value="016">016</option>
                <option value="A102">A102</option>
                <option value="A106">A106</option>
                <option value="A111">A111</option>
                <option value="A111A">A111A</option>
                <option value="A111B">A111B</option>
                <option value="A111C">A1111</option>
            

              </StyledSelect>
            {/*Valittu tila: {selectedOptionsTila.join(", ")} */}
            </StyledLabel>

            <p></p>
            <StyledLabel>
              <CheckboxGroup
                label="Yleisilme"
                options={["Hyvä", "Tyydyttävä", "Huono"]}
                /* selectedOptions={selectedOptionsValinta1}
                handleCheckboxChange={handleCheckboxChangeValinta1} */
              />
            </StyledLabel>

            <p></p>
            <p></p>

            <p></p>

            <StyledLabel>
              Muuta huomioita / kehitysideat:
              <StyledTextArea
                  type="text"
                  name="notes"
              />

                {children}

              <p>Mitä positiivista olet huomannut tarkastusjaksolla?</p>
              
              <StyledTextArea
                type="text"
                name="other_notes"
              />
            </StyledLabel>

            <StyledButton type="submit">Submit</StyledButton>
          </>
}