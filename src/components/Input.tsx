import React from "react";
import {
  Input as NextUIInput,
  Select as NextUISelect,
  SelectItem as Select,
  Radio as NextUIRadio,
  checkbox as NextUICheckbox,
} from "@nextui-org/react";

interface InputProps {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "select"
    | "radio"
    | "checkbox";
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  onChange?: any;
  value?: string;
  options?: Array<string>;
  defaultValue?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

export const Input = (props: InputProps) => {
  const { type, options, ...rest } = props;
  let input = null;

  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
      input = <NextUIInput type={type} {...rest} />;
      break;
    case "select":
      input = (
        <NextUISelect {...rest}>
          {options ? (
            options.map((option) => (
              <Select key={option} value={option}>
                {option}
              </Select>
            ))
          ) : (
            <Select key={0}>default</Select>
          )}
        </NextUISelect>
      );
      break;
    //    case "radio":
    //       input = <NextUIRadio {...rest} >kkk</NextUIRadio>;
    //       break;
    //    case "checkbox":
    //       input = <NextUICheckbox {...rest} />;
    //       break;
  }

  return <React.Fragment>{input}</React.Fragment>;
};
