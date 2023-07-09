/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state }); // Passing the user prop into the childrens of this component.
        }
        // Otherwise
        return child;
      })}
    </>
  );
};
export default ResourceLoader;
