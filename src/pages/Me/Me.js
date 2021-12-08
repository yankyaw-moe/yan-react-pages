import React from "react";
import Layout from "../../components/Layout/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink } from "./styles";

const Me = () => {
  return (
    <Layout>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>
          I’m graduated Computer Science Degree (B.C.Sc) from Computer
          University in 2016. I have started my coding journey in 2017 until
          now. I have experienced many projects like Enterprise Resource
          Planning(ERP system), Customer Relationship Management(a CRM system),
          E-commerce, and News.
        </Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>skills</div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul></ul>
      </div>
    </Layout>
  );
};

export default Me;
