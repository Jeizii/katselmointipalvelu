import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 16px;
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const FormBox = styled.div`
  padding: 20px;
  border: 20px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 2px;
  font-size: 16px;
  margin-top: 8px;
  border: 1px solid #808080;
  border-radius: 4px;
  outline: none;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-top: 8px;
  border: 1px solid #808080;
  border-radius: 4px;
  outline: none;
`;

export const StyledTextArea = styled.textarea`
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

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;