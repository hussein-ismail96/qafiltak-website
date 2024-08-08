import { AuthGlobe, LoginForm } from "@/ui";
import React from "react";

const Page = () => {
 
  return (
    <div className="auth-page">
      <div className="galaxy"></div>
      <div className="container mx-auto flex flex-row gap-4 items-center h-full">
        <div className="flex-1">
          <div className="globe">
           <AuthGlobe/>
          </div>
        </div>
        <div className="flex-1 mb-10 auth-side">
          <div className="auth-form">
          <h2 className="text-white text-2xl mb-4">
            Welcome To Company name !!
          </h2>
          <p>start explore now</p>
          <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
