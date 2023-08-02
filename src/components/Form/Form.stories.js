import { Form } from ".";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {
    type: {
      options: ["code", "textfiled", "password", "select"],
      control: { type: "select" },
    },
    state: {
      options: ["filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "code",
    state: "filled",
    className: {},
    frameClassName: {},
    text: "0",
    text1: "Password",
    text2: "example@e-mail.com",
  },
};
