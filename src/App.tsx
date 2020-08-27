import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "./scrollRenderer";
import Stack from "./stack";
import useScroll from "./useScroll";
import "./styles.css";

const makeDistance = (coefficient: number) => 500 * coefficient;
const makeGap = (coefficient: number) => 700 * coefficient;

const makeMin = (coefficient: number) =>
  coefficient === 0 ? 0 : makeDistance(coefficient) + makeGap(coefficient);
const makeMax = (coefficient: number) =>
  coefficient === 0
    ? makeDistance(coefficient + 1)
    : makeMin(coefficient) + 500;

const makeProps = (coefficient: number) => ({
  min: makeMin(coefficient),
  max: makeMax(coefficient)
});
export default function App() {
  const { isOnScreen } = useScroll({ min: makeMin(3), max: makeMax(5) });

  return (
    <Main animate={{ backgroundColor: isOnScreen ? "#000" : "#f96754" }}>
      <ScrollRenderer {...makeProps(0)}>
        <P>Hey SpaceX, my name is Ilyass Ben Hakim</P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(1)}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(2)}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate SpaceX team and try my best.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(3.5)}>
        <Stack space={1}>
          <P direction="left">So let's see</P>
          <H1>What i can do?</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(5)}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
    </Main>
  );
}

const P = styled.p`
  margin: 0 auto;
  color: #fff;
  text-align: ${({ direction }: { direction: "center" | "left" | "right" }) =>
    direction};
  max-width: 400px;
  line-height: 1.2rem;
`;
const H1 = styled.h1`
  font-size: 3.4rem;
  color: #fff;
  line-height: 3.8rem;
`;
const Main = styled(motion.div)`
  font-family: sans-serif;
  text-align: center;
  height: 16000px;
  background-color: #f96754;
`;
