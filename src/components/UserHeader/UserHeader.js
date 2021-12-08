import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, Header, Image } from "./styles";
import Picture from "./yanPhoto.jpg";
import {
  LogoGithub32,
  LogoLinkedin32,
  LogoFacebook32,
} from "@carbon/icons-react";

const UserHeader = () => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={Picture} />
        <div>
          <h2>Yan Kyaw Moe</h2>
          <br />
          <a
            href="https://github.com/yankyaw-moe"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoGithub32 />
          </a>
          {"  "}
          <a
            href="https://www.linkedin.com/in/yan-kyaw-moe-597b98175/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoLinkedin32 />
          </a>
          {"  "}
          <a
            href="https://www.facebook.com/yankyaw.moe/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoFacebook32 />
          </a>
          <hr />
          <br />
          <p>Software Developer</p>
          <p>Based in Yangon, Myanmar.</p>
          <p>Over 4 years of experience as a developer.</p>
          <p>### Also Available: part time & freelance ###</p>
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;
