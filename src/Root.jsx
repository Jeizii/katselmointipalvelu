import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./services/supabase.js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import styled from "styled-components";
import { useResize } from "./hooks/resize.js";
 
const Nav = styled.nav`
  display: flex;
  height: 3em;
  background-color: grey;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
 
const NavButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.8em;
  &:hover {
    color: #a8fde8;
  }
`;
const NavLogout = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.8em;
  &:hover {
    color: #fa7070;
  }
`;
 
const DropDown = styled.div`
  height: 100px;
  flex-direction: column;
  width: 200px;
  background-color: #4a4a4a;
  position: absolute;
  top: 2em;
  gap: 1em;
  z-index: 100;
  padding: 1em;
  height: auto;
  visibility: visible;
  display: flex;
`;
 
export default function Root() {
  const location = useLocation();
  const [session, setSession] = useState(null);
 
  const { width } = useResize();
 
  const [isMenu, setIsMenu] = useState(false);
 
  const showMenu = () => {
    setIsMenu((status) => !status);
  };
 
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
 
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
 
    return () => subscription.unsubscribe();
  }, []);
 
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
 
  if (!session) {
    return (
      <div>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  }
 
  return (
    <div>
      {/* Jos pathname on indeksi, eli "/", vaihdetaan route eli URL sijaintiin /home */}
      {location.pathname === "/" && <Navigate to={"/home"}></Navigate>}
 
      {width < 1250 ? (
        <Nav>
          <NavButton to={"/home"}>Koti</NavButton>
          {/* Jos polku sisältää tekstin "page", piilotetaan allaolevat linkit näkyvistä */}
          <NavButton onClick={showMenu}>Menu</NavButton>
          {!location.pathname.includes("page") && isMenu && (
            <DropDown>
               <NavButton onClick={showMenu}> <small style={{color: "red"}}> Sulje menu X </small> </NavButton>
              <NavButton to={"/page_1"}>Jatkuva katselmointi</NavButton>
              <NavButton to={"/page_2"}>Luku- ja vuosi katselmointi</NavButton>
              <NavButton to={"/page_3"}>Turvallisuuskatselmointi</NavButton>
              <NavButton to={"/page_4"}>
                Toimintamallin ja johtamisen katselmointi{" "}
              </NavButton>
              <NavLogout onClick={handleSignOut}> Kirjaudu ulos </NavLogout>
            </DropDown>
          )}
        </Nav>
      ) : (
        <Nav>
          <NavButton to={"/home"}>Koti</NavButton>
          {/* Jos polku sisältää tekstin "page", piilotetaan allaolevat linkit näkyvistä */}
          {!location.pathname.includes("page") && (
            <>
             
              <NavButton to={"/page_1"}>Jatkuva katselmointi</NavButton>
              <NavButton to={"/page_2"}>Luku- ja vuosi katselmointi</NavButton>
              <NavButton to={"/page_3"}>Turvallisuuskatselmointi</NavButton>
              <NavButton to={"/page_4"}>
                Toimintamallin ja johtamisen katselmointi{" "}
              </NavButton>
              <NavLogout onClick={handleSignOut}> Kirjaudu ulos </NavLogout>
            </>
          )}
        </Nav>
      )}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}