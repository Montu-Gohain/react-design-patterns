import styled from "styled-components";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <Container>
      <Title>React Design Patterns</Title>
      <Contents>
        <StyledLink to="/layout">Split-Screen</StyledLink>
      </Contents>
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
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  font-family: Arial, Helvetica, sans-serif;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  padding: 10px;
  width: 30vw;
  border-radius: 30px;
  text-align: center;
  transition: box-shadow 400ms ease-out;
  &:hover {
    box-shadow: 5px 5px 30px green;
  }
  font-size: 1.8rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    width: 60vw;
  }
`;
