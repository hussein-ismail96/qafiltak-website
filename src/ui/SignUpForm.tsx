"use client";
import React from "react";
import * as Yup from "yup";
import { FormikValues } from "formik";
import { signIn } from "next-auth/react";
import { FormSteps } from "@/components";

export const SignUpForm = () => {
  const fields = [
    [
      {
        name: "role",
        type: "select",
        label: "Continue as",
        options: ["user", "vendor", "HR", "influencer", "montij"],
        className: "mb-10",
        placeholder: "choose an option",
      },
    ],
    [
      {
        name: "username",
        type: "text",
        placeholder: "First and last name",
        label: "Your name",
        className: "mb-5 w-1/2",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        className: "mb-5 w-1/2",
      },
      {
        name: "mobile",
        type: "number",
        placeholder: "Enter number",
        label: "Mobile number",
        className: "mb-5 w-full",
      },
      {
        name: "password",
        type: "password",
        placeholder: "At least 6 characters",
        label: "Password",
        className: "mb-5 w-full",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Re-enter password",
        label: "Re-enter password",
        className: "mb-5 w-full",
      },
    ],
  ];

  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = async (values: FormikValues) => {
    // const result = await signIn("credentials", values);
    // console.log(result);
    alert(values);
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
      className="text-white"
      submitButton={{
        className: "text-white flex",
        text: "Sign in",
        variant: "bordered",
      }}
    />
  );
};
