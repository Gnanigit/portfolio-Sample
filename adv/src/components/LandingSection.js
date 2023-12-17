import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import GnaniImage from '../images/Gnani.jpg';
const greeting = "Hello, I am Gnaneswar Yalla!";
const bio="A Computer Science Engineer"
const bio1 = "FullStack developer";
const bio2 = "specialised in AI";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#a28089"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src={GnaniImage}
      />
      <p>{greeting}</p>
      <Heading>{bio}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
