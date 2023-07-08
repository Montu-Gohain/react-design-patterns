/* eslint-disable react/prop-types */
const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  console.log(user);
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age : {age}</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading userinfo...</p>
  );
};
export default UserInfo;
