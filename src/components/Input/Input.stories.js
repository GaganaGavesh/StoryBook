import React from "react";
import Input from "./Input";
//import Center from "../center/Center";

export default {
  title: "Form/Input",
  component: Input,
  //decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => (
  <Input size="small" placeholder="Small size input" />
);
export const Medium = () => (
  <Input size="medium" placeholder="Medium size input" />
);
export const Large = () => (
  <Input size="large" placeholder="Large size input" />
);
