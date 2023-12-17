import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "AUTORACT",
    description:
      "Automatically extracts data from Aadhar/PAN card and fills the details to a KYC form. Technologies used: Python,Tesseract ocr, Django.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: " STUDY EASY",
    description:
      "It is a centralized platform where students can access diverse education resources for various subjects. It has Student and admin functionality.Administrators have exclusive ebility to add courses and topics.A student can enroll a course and can view the entire course . Teachnology Stack: HTML,CSS,JS,EJS,Node.js,ExpressJS,MongoDB 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "PROJECT MANAGEMENT SYSTEM",
    description:
      " Website that Skilled in task allocation, progress tracking, communication within cross-functional teams ,Using HTML,CSS,Javascript,PHP",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "CONTENT MANAGEMENT SYSTEM",
    description:
      "Website that enable users to upload their thoughts,posts and vivid type of blogs. Technologies use:Javascript,Node.js,ExpressJS,MongoDB",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#e1b382"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8} 
      > 
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
