"use client";
import React from "react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { FormikValues } from "formik";

export const LoginForm = () => {
  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "username",
      label: "username",
      className: "p-10",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const initialValues = {
    username: "",
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
