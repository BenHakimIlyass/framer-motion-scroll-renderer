import * as React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "./scrollRenderer";
import Stack from "./stack";
import useScroll from "./useScroll";
import "./styles.css";
import { makeProps, makeMax, makeMin } from "./helpers";
import { Button, Colorless, Colorful, Skills } from "./sections";

export default function App() {
  const { scroll } = useScroll({});

  return (
    <Main
      animate={{
        backgroundColor:
          scroll >= makeMax(2.5)
            ? "#fff"
            : scroll >= makeMax(0)
            ? "#B2F1F1"
            : scroll >= 0
            ? "#f96754"
            : "#000"
      }}
    >
      <ScrollRenderer {...makeProps(0)}>
        <Stack space={1}>
          <P direction="center">Hey there! my name is</P>
          <H1 direction="center">Ilyass Ben Hakim</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(0.8)}>
        <P>
          A <b>clean design </b>minded young software engineer and web designer.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(1.6)}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate your team, be a part of the journey and try my best.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(2.4)}>
        <Stack space={1}>
          <P>So let's see</P>
          <H1>What i can do?</H1>
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(3)}>
        <Stack space={2} top={-8}>
          <H3 style={{ color: "#C42D78" }}>Skills</H3>
          <Skills style={{ textAlign: "center" }} scroll={scroll} />
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(3.8, 4.8)} native>
        <Colorful yPosition={scroll} min={makeMin(3.8)} />
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(4.8, 5.8)} native>
        <Colorless yPosition={scroll} min={makeMin(4.6)} />
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(6.2, 7)}>
        <Stack space={3}>
          <H1 style={{ color: "#1DA1F2" }}>Thanks for your attention</H1>
          <P style={{ color: "#1DA1F2" }}>
            If you want me to be part of your team, please feel free to contact
            me.
          </P>
          <Button icon="twitter" />
        </Stack>
      </ScrollRenderer>
    </Main>
  );
}
const alignement = css`
  text-align: ${({ direction }: { direction: "left" | "right" }) =>
    direction ? direction : "center"};
`;
const P = styled.p`
  margin: 0 auto;
  color: #fff;
  font-size: 1.6rem;
  ${alignement}
  max-width: 600px;
  line-height: 2rem;
`;
const H1 = styled.h1`
  margin: 0 auto;
  font-size: 3.4rem;
  max-width: 690px;
  color: #fff;
  line-height: 3.8rem;
  ${alignement}
`;
const H3 = styled.h3`
  margin: 0 auto;
  font-size: 2.2rem;
  max-width: 400px;
  color: #fff;
  line-height: 2.4rem;
  ${alignement}
`;
const Main = styled(motion.div)`
  font-family: sans-serif;
  height: 16000px;
  background-color: #f96754;
`;
