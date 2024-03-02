import {
  ConteinAbout,
  ImageAbout,
  StyledH1,
  LinkedInIcon,
  GithubInIcon,
} from "../styled/AboutStyled";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SearchStyled } from "../styled/searchStyled";

const About = () => {
  return (
    <ConteinAbout>
      <StyledH1>
        hola mi nombre es andres y soy psicólogo y pronto sere full stack
        developer,{" "}
      </StyledH1>
      <StyledH1>
        soy un apasionado por la tecnologia y espero les guste este proyecto de
        Rick y Morty,
      </StyledH1>
      <StyledH1>
        abajo les dejo los links de mis diferentes redes sociales para cualquier
        contacto.
      </StyledH1>
      <SearchStyled>
        <LinkedInIcon
          href="https://www.linkedin.com/in/andres-castro-flechas-39a0ba186/"
          target="_blank"
        >
          <FaLinkedin />
        </LinkedInIcon>
        <GithubInIcon href="https://github.com/afradenburg">
          <FaGithub />
        </GithubInIcon>
      </SearchStyled>
    </ConteinAbout>
  );
};
export default About;
