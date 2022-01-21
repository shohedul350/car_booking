import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Navbar } from "../../components/navbar";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";
import {Marginer} from '../../components/marginer/index';


const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
          <Navbar/>
          <TopSection/>
          <Marginer direction="vertical" margin="4em" />
          <BookCard/>
          <Marginer direction="vertical" margin="4em" />
          <BookingSteps/>
    </PageContainer>
  );
}
