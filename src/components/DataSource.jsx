/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

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
export default DataSource;
