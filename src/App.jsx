import SplitScreen from "./SplitScreen";

const LeftComponent = () => {
  return (
    <h1 style={{ backgroundColor: "green", padding: 10 }}>I am Leftside</h1>
  );
};

const RightComponent = () => {
  return (
    <h1 style={{ backgroundColor: "red", padding: 10 }}>I am RightSide</h1>
  );
};

const App = () => {
  return (
    <div>
      <SplitScreen
        left={LeftComponent}
        right={RightComponent}
        leftWeight={2} //Over-riding the default values.
        rightWeight={8}
      />
    </div>
  );
};

export default App;

// Todo :  Defining styles here ------------------------
