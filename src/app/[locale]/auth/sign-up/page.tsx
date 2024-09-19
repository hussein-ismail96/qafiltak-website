import { AuthGlobe, LoginForm, SignUpForm } from "@/ui";
import React from "react";

const Page = () => {
  return (
    <React.Fragment>
      <h2 className="text-white text-2xl mb-4">Welcome To Company name !!</h2>
      <p className="text-white">start explore now</p>
      <SignUpForm />
    </React.Fragment>
  );
};

export default Page;
