// MainPage.jsx
import React from 'react';
import './MainPage';
import './KatselmointiSivut/Page1.jsx';
import './KatselmointiSivut/Page2.jsx';
import './KatselmointiSivut/Page3.jsx';
import './KatselmointiSivut/Page4.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './MainPage.css'

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

const MainPage = () => {
  

  return (
    <body>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    
      <h1>Etusivu</h1>
      <h2>Tähän tulee router linkit katlsemointisivuille:</h2>
        <h3>Jatkuva katselmointi (Henkilökunta ja oppilaat) </h3>
        <h3>Lukuvuosi- ja vuosikatselmointi (Henkilökunta)</h3>
        <h3>Turvallisuuskatselmointi (Henkilökunta) </h3>
        <h3>Toimintamallin ja johtamisen katselmointi (Henkilökunta) </h3>
        <h4>Raportit (kaikille) </h4>
        <StyledLink to ='/page_1'className='btn'>
          Page1
        </StyledLink>

        <StyledLink to ='/page_2'>
          Page2
        </StyledLink>

        <StyledLink to ='/page_3'>
          Page3
        </StyledLink>

        <StyledLink to ='/page_4'>
          Page4
        </StyledLink>

        <h3>tämä on lapin ammattikorkeakoulun tilojen katselmointi sovellus, voit jättää päällä olevista napeista palautetta</h3>
        <h3></h3>
    </div>
    </body>
    
  );
};

export default MainPage;
