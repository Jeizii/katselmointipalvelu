import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledTable = styled.table`
  align-self: center;
  max-width: 800px;
  width: 100%;
  border: none;
  overflow-x: auto;
  border-spacing: 0;
  & th,
  td {
    text-align: start;
    padding: 1em;
  }

  & tr {
    height: 50px;
  }

  & tbody > tr:nth-child(2n-1) {
    background-color: #f9e7d1;
  }

  & tbody > tr:hover {
    background-color: #ffe2be;
    cursor: pointer;
  }
`;

export default function Table({ head = {}, body = [], onRowClicked }) {
  const keys = Object.keys(head);
  useEffect(() => {}, [body])

  return (
    <StyledTable>
      <thead>
        <tr>
          {Object.values(head).map((item, i) => {
            return <th key={i}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((items, i) => {
          return (
            <tr onClick={() => onRowClicked({ index: i, data: items })} key={i}>
              {keys.map((key, j) => {
                return <td key={j}> {items[key]} </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
