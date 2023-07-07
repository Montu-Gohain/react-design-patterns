/* eslint-disable react/prop-types */

const LargerProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <p>{rating}</p>
    </div>
  );
};

export default LargerProductListItem;
