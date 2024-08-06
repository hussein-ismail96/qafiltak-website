import React from "react";
import { ButtonProps, Button as NextUIButton } from "@nextui-org/react";
interface IButtonProps extends ButtonProps {}
export const Button = (props: IButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <NextUIButton className={className} {...rest}>
      {children}
    </NextUIButton>
  );
};
