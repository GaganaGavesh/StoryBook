import React from "react";
import Button from "./Button";
//import Center from "../center/Center";
export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
  //decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const secondary = () => <Button variant="secondary">Secondary</Button>;
export const success = () => <Button variant="success">Success</Button>;
export const danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = "Primary Button";

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //children: "Primary args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  //children: "Long Primary args",
};
