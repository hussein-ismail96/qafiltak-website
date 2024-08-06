"use client";
import React from "react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { FormikValues } from "formik";

export const LoginForm = () => {
  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      className: "p-10",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  const validationSchema = Yup.object().shape({});
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  
  return (
    <DynamicForm
      fields={fields}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  );
};
