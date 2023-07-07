/* eslint-disable react/prop-types */
const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => {
        return <ItemComponent key={i} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};

export default RegularList;
