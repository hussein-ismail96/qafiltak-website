"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { ReactNode } from "react";
import { Button } from "./button/Button";
import { Input } from "./Input";
import { IButtonProps } from "./button/buttonProps";

interface IFieldProps {
  type?: string;
  as?: string;
  name: string;
  id?: string;
  value?: string;
  onChange?: any;
  label?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  options?: Array<string>;
  labelPlacement?: "outside" | "inside" | "outside-left";
  startContent?: JSX.Element;
  endContent?: JSX.Element;
}

interface IDynamicFormProps {
  className?: string;
  fields: Array<IFieldProps>;
  validationSchema?: any;
  onSubmit: any;
  initialValues?: any;
  submitButton?: IButtonProps;
  ActionComponent?: React.ComponentType<any>;
}

export const DynamicForm = (props: IDynamicFormProps) => {
  const {
    className,
    fields,
    validationSchema,
    onSubmit,
    initialValues,
    submitButton,
    ActionComponent,
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
              {/* {!labelInsideInput && (
                <label htmlFor={field.id}>{field.label}</label>
              )} */}
              <Field
                label={field.label}
                className="w-full p-2 rounded"
                placeholder={field.placeholder}
                type={field.type}
                options={field.options}
                name={field.name}
                labelPlacement={field.labelPlacement ?? "outside"}
                id={field.id}
                size={field.size}
                as={field.as}
                startContent={field.startContent}
                endContent={field.endContent}
              />
              <ErrorMessage name={field.name} />
            </div>
          ))}
          {ActionComponent ? (
            <ActionComponent>
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
            </ActionComponent>
          ) : (
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
          )}
        </Form>
      )}
    </Formik>
  );
};
