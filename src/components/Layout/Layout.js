import React from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import MobileNav from "../MobileNav";

import { StyledContent } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
