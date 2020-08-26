import * as React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import ScrollRenderer from "./scrollRenderer";

export default function App() {
  return (
    <div className="App">
      <ScrollBar />
      <ScrollRenderer min={300} max={1000}>
        <button>buttons</button>
      </ScrollRenderer>
      <ScrollRenderer min={1500} max={1800}>
        <button>buttons222</button>
      </ScrollRenderer>
    </div>
  );
}

const ScrollBar = styled.div`
  height: 200px;
  width: 1px;
  background-color: #fff;
  position: fixed;
  right: 100px;
  top: 40px;
`;
