import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import { IButtonProps } from "./buttonProps";
export const Button = (props: IButtonProps) => {
  const { className, children, ...rest } = props;
  return <NextUIButton {...rest}>{children}</NextUIButton>;
};
