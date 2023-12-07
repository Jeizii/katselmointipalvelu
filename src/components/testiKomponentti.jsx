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
                <option value="LAY">Lapin yliopisto</option>
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
                <option value="A310">A310</option>
                <option value="A311">A311</option>
                <option value="A312">A312</option>
                <option value="A313">A313</option>
                <option value="A314">A314</option>
                <option value="A315">A315</option>
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