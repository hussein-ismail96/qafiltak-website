"use client";
import React from "react";
import * as Yup from "yup";
import { FormikValues } from "formik";
import { signIn } from "next-auth/react";
import { DynamicForm, FormSteps } from "@/components";
import Image from "next/image";

export const LoginForm = () => {
  const fields = [
    {
      name: "userName",
      type: "text",
      placeholder: "userName",
      label: "userName",
      className: "mb-10",
      startContent: (
        <Image
          src="/images/svgs/email.svg"
          alt="email"
          width={24}
          height={24}
        />
      ),
    },

    {
      name: "password",
      type: "password",
      placeholder: "At least 6 characters",
      label: "Password",
      className: "mb-5",
      startContent: (
        <Image
          src="/images/svgs/password.svg"
          alt="email"
          width={20}
          height={20}
        />
      ),
    },
    {
      name: "remember",
      type: "checkbox",
      label: "remember me",
      size: "sm" as "sm",
      className: "mb-5 text-white",
      id: "remember",
      startContent: (
        <Image
          src="/images/svgs/password.svg"
          alt="email"
          width={20}
          height={20}
        />
      ),
    },
  ];

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = async (values: FormikValues) => {
    const res = await signIn("credentials", {
      username: values.userName,
      password: values.password,
      callbackUrl: "/",
      redirect: false,
    });
    if (res?.ok) {
      location.href = "/";
    } else {
      document.querySelector(".invalid")?.classList.remove("hidden");
    }
  };

  const initialValues = {
    userName: "",
    password: "",
  };

  return (
    <div>
      <p className="invalid hidden text-red-500 text-center pb-8">
        Invaild username or password
      </p>
      <DynamicForm
        fields={fields}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        className="text-white"
        submitButton={{
          className: "text-white w-full",
          text: "Login to your account",
          radius: "sm",
          color: "primary",
        }}
      />
    </div>
  );
};
