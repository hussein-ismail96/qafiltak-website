"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Button, Input, IButtonProps } from "@components";

export interface IFieldProps {
  type: string;
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
      {({ values, handleSubmit, errors, handleBlur, }) => (
        <Form
          onSubmit={handleSubmit}
          className={`my-4 ${className}`}
          autoComplete="off"
        >
          {fields.map((field, index) => (
            <React.Fragment key={index}>
              <Field
                label={field.label}
                className={field.className}
                placeholder={field.placeholder}
                as={Input}
                type={field.type}
                options={field.options}
                onBlur={handleBlur}
                name={field.name}
                labelplacement={field.labelPlacement ?? "outside"}
                id={field.id}
                size={field.size}
                value={field.value}
                startContent={field.startContent} 
                endContent={field.endContent}
              />
              <span className="text-red-500">
                <ErrorMessage name={field.name} />
              </span>
            </React.Fragment>
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
