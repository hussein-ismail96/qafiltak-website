"use client";
import React from "react";
import * as Yup from "yup";
import { DynamicForm } from "../components/DynamicForm";
import { FormikValues } from "formik";
import { signIn } from "next-auth/react";
import { FormSteps } from "@/components";

export const LoginForm = () => {
  const fields = [
    [{
      name:"role",
      type: "select",
      label: "Continue as",
      options: ["admin", "user"],
      className: "mb-10 max-w-xs",
      placeholder: "choose an option",
    }],
    [{
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
    }]
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
    <FormSteps
      fields={fields}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      submitButton={{
       className:"text-white",
        text: "Sign in",
        variant: "bordered",
      }}
    />
  );
};
