/* eslint-disable react/prop-types */

import styled from "styled-components";

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 3,
}) => {
  return (
    <Wrapper>
      <SideWrapper weight={leftWeight}>
        <Left />
      </SideWrapper>
      <SideWrapper weight={rightWeight}>
        <Right />
      </SideWrapper>
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
