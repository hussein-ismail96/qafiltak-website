"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, IButtonProps, Input } from "@components";


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
  options?:Array<string>;
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
    nextButton
  } = props;
   
  const [ step , setStep ]= useState(0);

  const field =fields.map((stepFields,index)=>
    index === step? stepFields.map((field,innerIndex)=>
     <div className={field.className} key={innerIndex}>
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
      />
      {/* {errors[field.name!] && <small>error</small>} */}
    </div>
    ):null
)

const currentButton= step === fields.length-1 ? 
<Button
    type="submit"
    color={submitButton?.color}
    size={submitButton?.size}
    variant={submitButton?.variant}
    radius={submitButton?.radius}
    className={submitButton?.className}
>
    {submitButton?.text || submitButton?.children}
</Button> :
 <Button type="button"
    color={nextButton?.color}
    size={nextButton?.size}
    variant={nextButton?.variant}
    radius={nextButton?.radius}
    className={nextButton?.className}
    onClick={()=>setStep(prev=>prev+1)}>Next</Button>

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
          {field}
          <div className="flex justify-end mt-10">
            {currentButton}
          </div>
        </Form>
      )}
    </Formik>
  );
};
