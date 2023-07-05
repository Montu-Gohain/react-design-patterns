/* eslint-disable react/prop-types */

import SplitScreen from "../components/SplitScreen";

const SplitScreenPage = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "4rem",
        }}
      >
        Layout Components
      </h1>
      <SplitScreen
        leftWeight={2} //Over-riding the default values.
        rightWeight={8}
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
