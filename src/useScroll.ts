import React from "react";

// A hook for tracking vertical scroll
export default () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = (e: any): void =>
      setScrollTop(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollTop;
};
