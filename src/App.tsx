import * as React from "react";
import "./styles.css";
import styled from "styled-components";
import ScrollRenderer from "./scrollRenderer";

export default function App() {
  return (
    <div className="App">
      <ScrollRenderer max={1000}>
        <P>Hey SpaceX, my name is Ilyass Ben Hakim</P>
      </ScrollRenderer>
      <ScrollRenderer min={1500} max={2200}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
      <ScrollRenderer min={2700} max={3400}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate SpaceX team and give my best.
        </P>
      </ScrollRenderer>
    </div>
  );
}

const ScrollBar = styled.div`
  position: fixed;
  left: 100px;
  top: 40px;
  height: 200px;
  width: 1px;
  background-color: #fff;
`;
const P = styled.p`
  margin: 0 auto;
  color: #fff;
  text-align: center;
  max-width: 400px;
`;
