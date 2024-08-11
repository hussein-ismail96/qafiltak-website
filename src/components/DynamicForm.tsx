"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "./button/Button";
import { Input } from "./Input";
import { IButtonProps } from "./button/buttonProps";

interface IFieldProps {
  type?: string;
  as?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: any;
  label?: string;
  placeholder?: string;
  className?: string;
  options?: Array<string>;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
}

interface IDynamicFormProps {
  className?: string;
  fields: Array<IFieldProps>;
  validationSchema?: any;
  onSubmit?: any;
  initialValues?: any;
  labelInsideInput?: boolean;
  submitButton?: IButtonProps;
}

export const DynamicForm = (props: IDynamicFormProps) => {
  const {
    className,
    fields,
    validationSchema,
    onSubmit,
    initialValues,
    labelInsideInput,
    submitButton,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, errors }) => (
        <Form
          onSubmit={handleSubmit}
          className={`my-4 ${className}`}
          autoComplete="off"
        >
          {fields.map((field) => (
            <div className={field.className} key={field.id}>
              {!labelInsideInput && (
                <label htmlFor={field.id}>{field.label}</label>
              )}
              <Field
                label={labelInsideInput ? field.label : undefined}
                placeholder={field.placeholder}
                component={Input}
                type={field.type}
                options={field.options}
                name={field.name}
                id={field.id}
                as={field.as}
                value={field.value}
                startContent={field.startContent}
                endContent={field.endContent}
              />
              {/* {errors[field.name!] && <small>error</small>} */}
            </div>
          ))}
          <div className="flex justify-end mt-10">
            <Button
              type="submit"
              color={submitButton?.color}
              size={submitButton?.size}
              variant={submitButton?.variant}
              radius={submitButton?.radius}
              className={submitButton?.className}
            >
              {submitButton?.text || submitButton?.children}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
