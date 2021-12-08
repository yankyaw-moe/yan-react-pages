import React, { useState, useEffect } from "react";
import Pages from "./pages/index";

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // NOTE: Use your username below
  //   fetch('https://gitconnected.com/v1/portfolio/treyhuffine')
  //     .then(res => res.json())
  //     .then(user => {
  //       setUser(user);
  //     });
  // }, []);

  // if (!user) {
  //   return <div />;
  // }

  return <Pages />;
}

export default App;
