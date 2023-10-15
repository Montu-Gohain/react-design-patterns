import styled from "styled-components";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <Container>
      <Title>React Design Patterns</Title>
      <Contents>
        <StyledLink to="/layout">Split-Screen</StyledLink>
        <StyledLink to="/lists">Displaying List</StyledLink>
        <StyledLink to="/modal">Modal Page</StyledLink>
        <StyledLink to="/container">Container Component</StyledLink>
      </Contents>
    </Container>
  );
};

export default Homepage;
// Todo : Defining Styles here.
const Container = styled.div`
  height: 97vh;
  background-color: #222831;
  border-radius: 10px 10px 0px 0px;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-family: "Inter", sans-serif;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  padding: 10px;
  width: 30vw;
  border-radius: 30px;
  color: #212121;
  text-align: center;
  transition: box-shadow 400ms ease-out;
  margin-bottom: 3vh;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 5px 5px 30px green;
  }
  font-size: 18px;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    width: 60vw;
  }
`;
