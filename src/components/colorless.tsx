import * as React from "react";
import styled from "styled-components";
import { useSpring, useChain, animated } from "react-spring";

export default function Colorless({ yPosition }: { yPosition: number }) {
  const imgStyle = useSpring({
    delay: 300,
    from: {
      filter: "grayscale(0%)",
      transform: `translate3d(200%,${yPosition}px,0) scale(1)`
    },
    to: async (next, cancel) => {
      await next({
        filter: "grayscale(0%)",
        transform: `translate3d(90%,${yPosition}px,0) scale(1.3)`
      });
      await next({
        filter: "grayscale(100%)",
        transform: `translate3d(100%,${yPosition}px,0) scale(1)`
      });
    }
  });
  const backgroundStyle = useSpring({
    delay: 600,
    from: { transform: `translate3d(200%,${yPosition}px,0) scale(0.8)` },
    to: async (next, cancel) => {
      await next({
        transform: `translate3d(-10%,${yPosition}px,0) scale(0.9)`
      });
      await next({ transform: `translate3d(0%,${yPosition}px,0) scale(1)` });
    }
  });
  const paragraphStyle = useSpring({
    delay: 1500,
    from: {
      opacity: 0,
      transform: `translate3d(0,${
        yPosition + window.innerHeight * 0.46 + 60
      }px,0) scale(1.3)`
    },
    to: async (next, cancel) => {
      await next({
        opacity: 1,
        transform: `translate3d(0,${
          yPosition + window.innerHeight * 0.46
        }px,0) scale(1.3)`
      });
      await next({
        transform: `translate3d(0%,${
          yPosition + window.innerHeight * 0.46
        }px,0) scale(1)`
      });
    }
  });
  const header1Style = useSpring({
    delay: 1200,
    from: {
      opacity: 0,
      transform: `translate3d(0,-${
        yPosition + window.innerHeight * 0.46 + 60
      }px,0) scale(1.3)`
    },
    to: async (next, cancel) => {
      await next({
        opacity: 1,
        transform: `translate3d(0,${
          yPosition + window.innerHeight * 0.46
        }px,0) scale(1.3)`
      });
      await next({
        transform: `translate3d(0%,${
          yPosition + window.innerHeight * 0.46
        }px,0) scale(1)`
      });
    }
  });

  return (
    <>
      <Img style={imgStyle} src={url} />
      <P style={paragraphStyle}>And also </P>
      <H1 style={header1Style}>Colorless design</H1>
      <Background style={backgroundStyle} />
    </>
  );
}
const H1 = styled(animated.h1)`
  font-size: 4.6rem;
  color: #fff;
  position: absolute;
  z-index: 99;
  left: 20%;
  top: calc(46% + 30px);
`;
const P = styled(animated.p)`
  font-size: 1.2rem;
  color: #fff;
  position: absolute;
  z-index: 99;
  left: 20%;
  top: 46%;
`;

const Img = styled(animated.img)`
  width: 50%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  top: 0;
  left: 0px;
  position: fixed;
`;
const Background = styled(animated.div)`
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: #000;
`;
const url = `https://images.unsplash.com/photo-1515375380578-a0587184cedd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1976&q=80`;
