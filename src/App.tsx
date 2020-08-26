import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "./scrollRenderer";
import Stack from "./stack";
import useScroll from "./useScroll";
import "./styles.css";

const makeDistance = (coefficient: number) => {
  const currentValue = 0;
  return (currentValue + 700) * coefficient;
};

export default function App() {
  const [scroll] = useScroll();

  return (
    <Main animate={{ backgroundColor: scroll > 3700 ? "#000" : "#f96754" }}>
      <ScrollRenderer max={1000}>
        <P>Hey SpaceX, my name is Ilyass Ben Hakim</P>
      </ScrollRenderer>
      <ScrollRenderer min={makeDistance(2)} max={makeDistance(3)}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
      <ScrollRenderer min={makeDistance(4)} max={makeDistance(5)}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate SpaceX team and try my best.
        </P>
      </ScrollRenderer>
      <ScrollRenderer min={makeDistance(6)} max={makeDistance(7)}>
        <Stack space={1}>
          <P direction="left">So let's see</P>
          <H1>What i can do?</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer min={makeDistance(8)} max={makeDistance(9)}>
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
