"use client";
import { error } from "console";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "./Button";

interface IFieldProps {
  type: string;
  as?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: any;
  label?: string;
  placeholder?: string;
  className?: string;
}

interface IDynamicFormProps {
  className?: string;
  fields: Array<IFieldProps>;
  validationSchema?: any;
  onSubmit?: any;
  initialValues?: any;
}

export const DynamicForm = (props: IDynamicFormProps) => {
  const { className, fields, validationSchema, onSubmit, initialValues } =
    props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, errors }) => (
        <Form onSubmit={handleSubmit} className={className} autoComplete="off">
          {fields.map((field) => (
            <div className={field.className} key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <Field
                type={field.type}
                name={field.name}
                id={field.id}
                as={field.as}
                value={field.value}
                placeholder={field.placeholder}
              />
              {/* {errors[field.name!] && <small>error</small>} */}
            </div>
          ))}
          {JSON.stringify(values)}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
