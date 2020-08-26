import * as React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import styled from "styled-components";

const setLimits = (limits: number[], condition: number) =>
  condition > limits[0] && condition < limits[1];

export default function App() {
  return (
    <div className="App">
      {/* <ScrollBar
        animate={{
          opacity: setLimits(300, scrollTop) ? 1 : 0,
          y: scrollTop * 0.025
        }}
      /> */}
      <ScrollRenderer min={300} max={1000}>
        <button>buttons</button>
      </ScrollRenderer>
      <ScrollRenderer min={1500} max={1800}>
        <button>buttons222</button>
      </ScrollRenderer>
    </div>
  );
}
const TextWrapper = styled(motion.div)`
  position: fixed;
  text-align: center;
  left: calc(50% - 32px);
  top: 40%;
  transform: translate3d(-50%, -50%, 0);
`;
const ScrollBar = styled.div`
  height: 200px;
  width: 1px;
  background-color: #fff;
  position: fixed;
  right: 100px;
  top: 40px;
`;
type Props = {
  children: JSX.Element | JSX.Element[];
  max: number;
  min: number;
};
const ScrollRenderer = ({ children, max, min }: Props) => {
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = (e: any) =>
      setScrollTop(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <TextWrapper
      transition={{ type: "tween" }}
      animate={{
        opacity: setLimits([min, max], scrollTop) ? 1 : 0,
        y: scrollTop * 0.025
      }}
    >
      {children}
    </TextWrapper>
  );
};
