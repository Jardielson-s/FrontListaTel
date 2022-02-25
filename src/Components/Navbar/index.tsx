import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' /*activeStyle*/>
            Listar Contatos
          </NavLink>
          <NavLink to='/criar'/*activeStyle*/>
            Criar contato
          </NavLink>
          <NavLink to='/telefones' /*activeStyle*/>
            Listar Telefones
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;