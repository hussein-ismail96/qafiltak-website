"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, IButtonProps, Input } from "@components";

interface IFieldProps {
  type?: string;
  as?: string;
  name: string;
  id?: string;
  value?: string;
  onChange?: any;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  options?: Array<string>;
}

interface IDynamicFormProps {
  className?: string;
  fields: Array<Array<IFieldProps>>;
  validationSchema?: any;
  onSubmit?: any;
  initialValues?: any;
  labelInsideInput?: boolean;
  submitButton?: IButtonProps;
  nextButton?: IButtonProps;
}

export const FormSteps = (props: IDynamicFormProps) => {
  const {
    className,
    fields,
    validationSchema,
    onSubmit,
    initialValues,
    labelInsideInput,
    submitButton,
    nextButton,
  } = props;

  const [step, setStep] = useState(0);

  const field = fields.map((stepFields, index) =>
    index === step
      ? stepFields.map((field, innerIndex) => (
          <div className={field.className} key={innerIndex}>
            {!labelInsideInput && (
              <label htmlFor={field.id}>{field.label}</label>
            )}
            <Field
              label={labelInsideInput ? field.label : undefined}
              className={field.inputClassName}
              placeholder={field.placeholder}
              component={Input}
              type={field.type}
              options={field.options}
              name={field.name}
              id={field.id}
              as={field.as}
              value={field.value}
            />
          </div>
        ))
      : null
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleSubmit,
        errors,
        touched,
        validateField,
        handleBlur,
        handleChange,
      }) => (
        <Form
          onSubmit={handleSubmit}
          className={`my-4 ${className}`}
          autoComplete="off"
        >
          {fields.map((stepFields, index) =>
            index === step
              ? stepFields.map((field, innerIndex) => (
                  <div className={field.className} key={innerIndex}>
                    {!labelInsideInput && (
                      <label htmlFor={field.id}>{field.label}</label>
                    )}
                    <Field
                      label={labelInsideInput ? field.label : undefined}
                      placeholder={field.placeholder}
                      component={Input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={field.type}
                      options={field.options}
                      name={field.name}
                      id={field.id}
                      as={field.as}
                      value={values.field}
                      touched={touched.field}
                      validateField={validateField}
                      error={errors.field}
                    />
                    {touched[field.name] && errors[field.name] ? (
                      <span className="text-red-500">
                        {errors[field.name]!.toString()}
                      </span>
                    ) : null}
                  </div>
                ))
              : null
          )}

          <div className="flex justify-end mt-10">
            {step === fields.length - 1 ? (
              <Button
                type="submit"
                color={submitButton?.color}
                size={submitButton?.size}
                variant={submitButton?.variant}
                radius={submitButton?.radius}
                className={submitButton?.className}
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={async () => {
                  const error = await validateField("role");
                  console.log(error);
                  !error && setStep((step) => step + 1);
                  // setStep((step) => step + 1);
                }}
              >
                Next
              </Button>
            )}
          </div>
          <span className="text-red-500">{step}</span>
        </Form>
      )}
    </Formik>
  );
};
