import React from "react";

// A hook for tracking vertical scroll
export default (max?: number, min?: number): (number | boolean)[] => {
  const [scroll, setScroll] = React.useState<number>(0);

  // check if the screen scroll match the min and max
  const isOnScreen = (): boolean =>
    typeof max === "number" &&
    typeof min === "number" &&
    scroll >= min &&
    scroll < max;

  React.useEffect(() => {
    const handleScroll = (e: any): void =>
      setScroll(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scroll, isOnScreen()];
};
