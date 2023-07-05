import styled from "styled-components";

const Homepage = () => {
  return (
    <Container>
      <Title>React Design Patterns</Title>
    </Container>
  );
};

export default Homepage;
// Todo : Defining Styles here.
const Container = styled.div`
  height: 97vh;
  background-color: #c7d2fe;
`;
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
    font-size: 1.5rem;
  }
`;
