import * as React from "react";
import { motion } from "framer-motion";
import useScroll from "./useScroll";

type Props = {
  children: JSX.Element | JSX.Element[];
  max: number;
  min?: number;
  native?: boolean;
};

const ScrollRenderer = ({ children, max, min, native }: Props) => {
  const { scroll, isOnScreen } = useScroll({ max: max, min: min ? min : 0 });
  return (
    <motion.div
      style={native ? {} : { position: "fixed", width: "100%", top: "44%" }}
      transition={{ type: "tween" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: isOnScreen ? 1 : 0,
        y: (scroll - (!!min ? min : 0)) * 0.025
      }}
    >
      {children}
    </motion.div>
  );
};
export default ScrollRenderer;
