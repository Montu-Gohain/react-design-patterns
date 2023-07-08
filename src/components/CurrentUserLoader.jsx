/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("http://localhost:6060/api/currentuser");
      setUser(resp.data);
    })();
  }, []);

  return user ? (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  ) : (
    <h1>Testing data fetching</h1>
  );
};
export default CurrentUserLoader;
