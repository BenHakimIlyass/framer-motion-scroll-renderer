import React from "react";
import styled from "styled-components";
import { Cluster, Stack, Button, H1, P } from "../components";
const Contact = () => {
  return (
    <Stack space={4} top={-8}>
      <Header1 style={{ color: "#1DA1F2" }}>Thanks for your attention</Header1>
      <P style={{ color: "#1DA1F2" }}>
        If you want me to be part of your team, please feel free to contact me.
      </P>

      <Cluster alignItems="center" justifyContent="center" space={1}>
        <a
          href="https://github.com/BenHakimIlyass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="github" title="Github" />
        </a>
        <a href="https://twitter.com/dinasso1" target="_blank">
          <Button icon="resume" title="Resume" />
        </a>
        <a href="https://twitter.com/dinasso1" target="_blank">
          <Button icon="twitter" title="Twitter" />
        </a>
      </Cluster>
    </Stack>
  );
};
const Header1 = styled(H1)`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    #1f374e 0%,
    #1f374e 0.01%,
    #e196bb 53.12%,
    #bd98c5 67.19%,
    #9b9acf 77.6%,
    #669ddd 92.19%,
    #1da1f2 100%
  );
`;
export default Contact;
