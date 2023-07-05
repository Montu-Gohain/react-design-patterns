/* eslint-disable react/prop-types */

import styled from "styled-components";

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 3 }) => {
  const [left, right] = children; // Here left and right became elements not components.
  return (
    <Wrapper>
      <SideWrapper weight={leftWeight}>{left}</SideWrapper>
      <SideWrapper weight={rightWeight}>{right}</SideWrapper>
    </Wrapper>
  );
};

export default SplitScreen;
// Todo : ---------- Designs are written here.
const Wrapper = styled.div`
  display: flex;
`;
const SideWrapper = styled.div`
  flex: ${(props) => props.weight};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
