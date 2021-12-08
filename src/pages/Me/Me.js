import React from "react";
import Layout from "../../components/Layout/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";

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
        <SectionTitle>Tech Stack</SectionTitle>
        <div>
          Frontend: HTML, CSS, JavaScript, Bootstrap, Jquery, React, Nextjs
        </div>
        <br />
        <div>Backend: Nodejs, Express, Nestjs</div>
        <br />
        <div>Others: Digital Ocean, AWS, Docker</div>
      </div>
      <div>
        <SectionTitle>Work</SectionTitle>
        <Paragraph>
          (01/2017 - 05/2019) - Former Programmer at{" "}
          <a target="_blank" href="https://www.myanmardcr.com/eng/index.html">
            Myanmar DCR Co., Ltd
          </a>{" "}
        </Paragraph>
        <br />
        <Paragraph>
          (06/2019 - 02/2020) - Former Software Engineer at{" "}
          <a target="_blank" href="https://hirokei-myanmar.com/home/">
            Herokei Myanmar Co., Ltd
          </a>{" "}
        </Paragraph>
        <br />
        <Paragraph>
          (03/2020 - 07/2021) - Former Senior Backend Developer at{" "}
          <a target="_blank" href="http://www.newwave-tech.com/">
            Global New Wave Technology Co., Ltd
          </a>{" "}
        </Paragraph>
      </div>
      <div>
        <SectionTitle>Contact</SectionTitle>
        <div>Email: yankyawmoe.dev@gmail.com</div>
        <br />
        <div>Whatsapp: +959450992920</div>
        <br />
        <div>Skype: live:.cid.f601ceb2c060cf7a</div>
      </div>
    </Layout>
  );
};

export default Me;
