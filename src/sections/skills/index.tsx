import React from "react";
import data from "./data";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

type TSkill = {
  d: string;
  key: number;
};
const Skill = ({ d, key, ...rest }: TSkill) => (
  <>
    <rect {...rest} height="37" rx="4" stroke="#C42D78" stroke-width="2" />
    <path fill="#C42D78" d={d} />
  </>
);
type Props = {
  style: React.CSSProperties;
  scroll: number;
};
const Skills = ({ style, scroll }: Props) => {
  const [state, toggle] = React.useState(false);
  const [{ x, y }, move] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  return (
    <div
      style={{
        ...style,
        backgroundColor: "transparent",
        textAlign: "center",
        position: "relative"
      }}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onMouseMove={({ clientX, clientY }) => move({ x: clientX, y: clientY })}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 210 }}
        style={{ overflow: "hidden", zIndex: 99 }}
        transition={{ delay: 0.4 }}
      >
        <svg
          width="394"
          height="210"
          viewBox="0 0 394 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((item, key) => (
            <>
              <Skill {...item} key={key} />
            </>
          ))}
        </svg>
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {state && (
          <Cursor
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: x - 20, top: y - 380 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
const Cursor = styled(motion.div)`
  width: 40px;
  height: 40px;
  z-index: -1;
  position: absolute;
  background-color: #ffe0f0;
  border-radius: 40px;
`;
export default Skills;
