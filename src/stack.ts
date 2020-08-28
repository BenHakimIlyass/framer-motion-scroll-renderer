import styled from "styled-components";

const VStack = styled.div`
  ${({ top }: { top?: number }) => `margin-top:${top}rem`};
  * + * {
    margin-top: ${({ space }: { space: number }) => space}rem;
  }
`;
export default VStack;
