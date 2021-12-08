import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SideNavItems,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";

import { StyledSideNav } from "./styles";

const items = [
  { name: "Me", path: "/yan-react-pages/" },
  { name: "Education", path: "/yan-react-pages/education" },
  { name: "Work", path: "/yan-react-pages/work" },
  { name: "Projects", path: "/yan-react-pages/projects" },
];

const Sidebar = () => {
  const location = useLocation();
  console.log("location ", location);

  return (
    <StyledSideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <SideNavItems>
        {items.map((i) => (
          <SideNavLink
            isActive={
              location.pathname === "/yan-react-pages/" &&
              i.path === "/yan-react-pages/"
                ? true
                : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
