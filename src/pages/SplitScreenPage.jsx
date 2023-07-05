/* eslint-disable react/prop-types */
import styled from "styled-components";
import SplitScreen from "../components/SplitScreen";

const SplitScreenPage = () => {
  return (
    <div>
      <Title>Layout components</Title>
      <SplitScreen
        leftWeight={2} //Over-riding the default values.
        rightWeight={5}
      >
        <LeftComponent username="Montu Gohain" />
        <RightComponent quote="Roses are red sky is blue , oh my gawd you don't have a clue 😂😂😂" />
      </SplitScreen>
    </div>
  );
};

export default SplitScreenPage;

const LeftComponent = ({ username }) => {
  return <h1 style={{ backgroundColor: "green", padding: 10 }}>{username}</h1>;
};

const RightComponent = ({ quote }) => {
  return <h1 style={{ backgroundColor: "red", padding: 10 }}>{quote}</h1>;
};

// Todo :  Defining styles here ------------------------
const Title = styled.h1`
  font-size: 2rem;
  font-family: "system-ui";
  text-align: center;
  background-color: #2563eb;
  color: aliceblue;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  /* Media queries */
  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
  }
`;
