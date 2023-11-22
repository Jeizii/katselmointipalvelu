import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'
import {supabase} from './services/supabase.js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  height: 3em;
  background-color: black;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const NavButton = styled(Link)`

  color: white;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.8em;
  &:hover{
    color: blue;
  }
`



export default function Root() {
  const location = useLocation();
  const [session, setSession] = useState(null)



  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if(!session){

    return <div>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>

  }

  return (
    <div>
      {/* Jos pathname on indeksi, eli "/", vaihdetaan route eli URL sijaintiin /home */}
      {location.pathname === "/" && <Navigate to={"/home"}></Navigate>}
      <header>
        <Nav>
          <NavButton to={"/home"}>Koti</NavButton>
          {/* Jos polku sisältää tekstin "page", piilotetaan allaolevat linkit näkyvistä */}
          {!location.pathname.includes("page") && (
            <>
              <NavButton to={"/page_1"}>Sivu 1</NavButton>
              <NavButton to={"/page_2"}>Sivu 2</NavButton>
            </>
          )}

          <NavButton onClick={handleSignOut}> Kirjaudu ulos </NavButton>
        </Nav>
      </header>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
