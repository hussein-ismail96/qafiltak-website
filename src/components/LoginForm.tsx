"use client";
import React from "react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { FormikValues } from "formik";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "username",
      label: "username",
      className: "mb-10",
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
  const onSubmit = async (values: FormikValues) => {
    // const result = await signIn("credentials", values);
    // console.log(result);
    console.log(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <DynamicForm
      className="auth-form"
      fields={fields}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      submitButton={{
        color: "primary",
        text: "Sign in",
        variant: "bordered",
      }}
    />
  );
};
