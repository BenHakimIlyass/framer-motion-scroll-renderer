import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "./scrollRenderer";
import Stack from "./stack";
import useScroll from "./useScroll";
import "./styles.css";
import { makeProps, makeMin, makeMax } from "./helpers";
import { Colorless, Colorful } from "./components";

type Position = {
  [key: number]: Metadata;
  color: string;
};
interface Metadata {
  key: number;
  value: string;
}
const colors = {
  300: "#fff",
  600: "#000"
};
const changeColorAtPosition = (scroll: number, positions: Position) => {
  Object.keys(positions).map((key) => ({
    color: scroll > key ? positions[key] : ""
  }));
};
export default function App() {
  const { scroll, isOnScreen } = useScroll({
    min: makeMin(3.2),
    max: makeMax(7)
  });

  return (
    <Main animate={{ backgroundColor: isOnScreen ? "#fff" : "#f96754" }}>
      <ScrollRenderer {...makeProps(0)}>
        <Stack space={1}>
          <P direction="center">Hey there! my name is</P>
          <H1 direction="center">Ilyass Ben Hakim</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(1)}>
        <P>
          A <b>clean design </b>minded young software engineer and web designer.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(2)}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate your team, be a part of the journey and try my best.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(3.4)}>
        <Stack space={1}>
          <P direction="left">So let's see</P>
          <H1>What i can do?</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(4, 6)} native>
        <Colorful yPosition={scroll} />
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(6, 7)} native>
        <Colorless yPosition={scroll} />
      </ScrollRenderer>
    </Main>
  );
}

const P = styled.p`
  margin: 0 auto;
  color: #fff;
  text-align: ${({ direction }: { direction: "left" | "right" }) =>
    direction ? direction : "center"};
  max-width: 400px;
  line-height: 1.2rem;
`;
const H1 = styled.h1`
  margin: 0 auto;
  font-size: 3.4rem;
  max-width: 400px;
  color: #fff;
  line-height: 3.8rem;
  text-align: ${({ direction }: { direction: "left" | "right" }) =>
    direction ? direction : "center"};
`;
const Main = styled(motion.div)`
  font-family: sans-serif;
  height: 16000px;
  background-color: #f96754;
`;
