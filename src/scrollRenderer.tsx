import { motion } from "framer-motion";
import styled from "styled-components";
import * as React from "react";

const setLimits = (limits: number[], condition: number) =>
  condition > limits[0] && condition < limits[1];

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
const TextWrapper = styled(motion.div)`
  position: fixed;
  text-align: center;
  left: calc(50% - 32px);
  top: 40%;
  transform: translate3d(-50%, -50%, 0);
`;

export default ScrollRenderer;
