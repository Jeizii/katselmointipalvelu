import { useState, useEffect } from "react";

export function useResize() {

  // Asetetaan lähtöarvoksi selainikkunan leveys, kun tätä hookia käyttävä komponentti renderöityy
  const [width, setWidth] = useState(window.innerWidth)

  // Käytetään useEffect hookia tilan muutoksen seuraamiseen
  useEffect(() => {
    // Esitellään handleResize funktio lähelle tapahtumankuuntelijoita.
    function handleResize() {
        setWidth(window.innerWidth)
    }

    // Kiinnitetään handleResize funktio window-objektin tapahtumankuuntelijaan.
    // Suorittaa handleResize funktion kun selainikkunan kokoa muutetaan 
    window.addEventListener('resize', handleResize);

    // Poistaa tapahtumankuuntelijan window-objektista kun useResize hookia käyttävä komponentti "kuolee" 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Paluuarvona hookia kutsuva komponentti saa reaktiivisen width-muuttujan.
  // Eli tässä tapauksessa useEffect laukaisee hookia kutsuneen komponentin 
  // uudelleen renderöinnin, kun useEffectin sisällä oleva tila muuttuu.
  return { width };
}