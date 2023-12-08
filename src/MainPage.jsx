import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './MainPage.css';
import myImage from './images/lapinamkLogo.png'

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-weight: bold;
  font-size: 20px;
`;

const ExternalLink = styled.a`
  color: blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-weight: bold;
  font-size: 20px;
`;



const MainPage = () => {
  const spacerStyle = {
    
    height: '100px', // Adjust the height as needed
  };

  return (
    <body>
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h1>Tervetuloa Lapin ammattikorkeakoulun tilojen katselmointi sovellukseen</h1>
        <h2>Katselmointisivut vievät sinut katselmointilomakkeisiin</h2>
        <p></p>
        



        {/* External Link */}
        <ExternalLink href="https://lucit-my.sharepoint.com/:p:/g/personal/dhaakila_edu_lapinamk_fi/EaLPAHL24LdCqF3FLcd-1BMBmQjXtah6TCs7h7nbN8KYAA?e=ZVbqgv" className="btn" target="_blank" rel="noopener noreferrer">
          LINKKI OHJEISTUKSEEN
        </ExternalLink>
 <p></p>
          <img src={myImage} alt="Description of the image" />
      <div style={spacerStyle}></div>
      <p></p>
         {/* Internal Links */}
         <StyledLink to='/tar_raportit/Form/approved' className='btn'>
          Hyväksytyt Jatkuvan katselmoinnin raportit
        </StyledLink>
        <StyledLink to='/tar_raportit/Form/notapproved' className='btn'>
          Tarkistettavat Jatkuvan katselmoinnin raportit
        </StyledLink>


        <StyledLink to='/tur_raportit/turvallisuuskatselmointi/approved' className='btn'>
          Turvallisuuskatselmoinnit 
        </StyledLink>

        <StyledLink to='/luk_raportit/vuosikausikatselmointi/approved' className='btn'>
           Lukuvuosi Raportit
        </StyledLink>
       
        
        <h2>Linkeistä pääset katselemaan entisten raporttien tuloksia</h2>
        <p></p>
             
      </div>
    </body>
  );
};

export default MainPage;
