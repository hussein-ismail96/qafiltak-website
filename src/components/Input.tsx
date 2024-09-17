import React from "react";
import {
  Input as NextUIInput,
  Select as NextUISelect,
  SelectItem as Select,
  Radio as NextUIRadio,
  Checkbox as NextUICheckbox,
  Textarea,
} from "@nextui-org/react";

interface InputProps {
  type:
    | "text"
    | "number"
    | "email"
    | "tel"
    | "password"
    | "select"
    | "radio"
    | "checkbox"
    | "textarea";
  name: string;
  id?: string;
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
  const { type, options, label, className, ...rest } = props;
  let input = null;

  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
    case "tel":
      input = (
        <NextUIInput
          type={type}
          className={`input ${className}`}
          label={label}
          {...rest}
        />
      );
      break;
    case "textarea":
      input = (
        <Textarea {...rest} className={`input ${className}`} label={label} />
      );
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
    case "checkbox":
      input = (
        <NextUICheckbox {...rest} id={props.id}>
          <label className={className} htmlFor={props.id}>
            {label}
          </label>
        </NextUICheckbox>
      );
      break;
  }

  return <React.Fragment>{input}</React.Fragment>;
};
