import React from "react";
import Layout from "../../components/Layout/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = () => {
  return (
    <Layout>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {/* {user.projects.map((project, i) => ( */}
          <ProjectItem>
            <ProjectTitle>project.name</ProjectTitle>
            <p>summary</p>
            <SkillContainer>
              {/* {[...project.languages, ...project.libraries].map((item, j) => ( */}
              <Pill>item</Pill>
              {/* ))} */}
            </SkillContainer>
          </ProjectItem>
          {/* ))} */}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
