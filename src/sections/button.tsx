import React from "react";
import styled from "styled-components";
import label from "./icons";

type Props = {
  icon: "github" | "twitter" | "download";
  title: "string";
};

const Button = ({ icon, title }: Props) => {
  const Icon = label[icon];
  return (
    <Thumbnail>
      <Icon />
      <span>{title}</span>
    </Thumbnail>
  );
};

const Thumbnail = styled.button`
  border-width: 2px;
  border-style: solid;
  border-color: #c42d78;
`;

export default Button;
