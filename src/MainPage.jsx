import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './MainPage.css';

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

const ExternalLink = styled.a`
  color: blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

const MainPage = () => {
  return (
    <body>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Tämä on Lapin ammattikorkeakoulun tilojen katselmointi sovellus</h1>

        {/* External Link */}
        <ExternalLink href="https://lucit-my.sharepoint.com/:p:/g/personal/dhaakila_edu_lapinamk_fi/EaLPAHL24LdCqF3FLcd-1BMBmQjXtah6TCs7h7nbN8KYAA?e=ZVbqgv" className="btn" target="_blank" rel="noopener noreferrer">
          LINKKI OHJEISTUKSEEN
        </ExternalLink>
<p></p>
         {/* Internal Links */}
         <StyledLink to='/hyv_raportit' className='btn'>
          Hyväksytyt Raportit
        </StyledLink>
        <StyledLink to='/tar_raportit' className='btn'>
          Tarkistettavat raportit
        </StyledLink>

        <h3></h3>
        <h3></h3>
      </div>
    </body>
  );
};

export default MainPage;
