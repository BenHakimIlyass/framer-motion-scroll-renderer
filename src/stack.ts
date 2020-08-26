import styled from "styled-components";

const VStack = styled.div`
  * + * {
    margin-top: ${({ space }: { space: number }) => space}rem;
  }
`;
export default VStack;
