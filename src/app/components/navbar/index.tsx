import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";


const NavbarContainer = styled.div`
  ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    m-1
  `}
`

export function Navbar() {
  return (
    <NavbarContainer>
         <LogoContainer>
         <Logo/>
         </LogoContainer>
      <NavItems/>
    </NavbarContainer>
  );
}
