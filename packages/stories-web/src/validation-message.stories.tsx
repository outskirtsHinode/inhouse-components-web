import React from "react";
import { Meta, Story } from "@storybook/react";
import "@pepabo-inhouse/validation-message";

interface ValidationMessageProps {
  variant: "error" | "warning" | "info" | "success";
  children: string;
}

export default {
  title: "Components/Validation Message",
  component: ({ variant, children }: ValidationMessageProps) => (
    <div className={`inhouse-validation-message inhouse-validation-message--${variant}`}>
      {children}
    </div>
  ),
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["error", "warning", "info", "success"],
      },
    },
    children: {
      control: "text",
    },
  },
} as Meta<ValidationMessageProps>;

const Template: Story<ValidationMessageProps> = ({ variant, children }) => (
  <div className={`inhouse-validation-message inhouse-validation-message--${variant}`}>
    {children}
  </div>
);

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "エラーメッセージが表示されます",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "警告メッセージが表示されます",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  children: "情報メッセージが表示されます",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "成功メッセージが表示されます",
};
