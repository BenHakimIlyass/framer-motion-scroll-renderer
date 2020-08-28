import styled, { css } from "styled-components";
const alignement = css`
  text-align: ${({ direction }: { direction: "left" | "right" }) =>
    direction ? direction : "center"};
`;
export const P = styled.p`
  margin: 0 auto;
  color: #fff;
  font-size: 1.6rem;
  ${alignement}
  max-width: 600px;
  line-height: 2rem;
`;
export const H1 = styled.h1`
  margin: 0 auto;
  font-size: 3.4rem;
  max-width: 690px;
  color: #fff;
  line-height: 3.8rem;
  ${alignement}
`;
export const H3 = styled.h3`
  margin: 0 auto;
  font-size: 2.2rem;
  max-width: 400px;
  color: #fff;
  line-height: 2.4rem;
  ${alignement}
`;
