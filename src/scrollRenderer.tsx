import * as React from "react";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
const setLimits = (limits: number[], condition: number) =>
  condition >= limits[0] && condition < limits[1];

type Props = {
  children: JSX.Element | JSX.Element[];
  max: number;
  min?: number;
  native?: boolean;
};
const ScrollRenderer = ({ children, max, min, native }: Props) => {
  const scrollTop = useScroll();
  return (
    <motion.div
      style={native ? {} : { position: "fixed", width: "100%", top: "44%" }}
      transition={{ type: "tween" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: setLimits([!!min ? min : 0, max], scrollTop) ? 1 : 0,
        y: (scrollTop - (!!min ? min : 0)) * 0.025
      }}
    >
      {children}
    </motion.div>
  );
};
export default ScrollRenderer;
