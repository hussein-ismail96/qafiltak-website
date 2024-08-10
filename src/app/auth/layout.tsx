import { AuthGlobe } from "@/ui";
import React from "react";

type props = { children: React.ReactNode };
const layout = (props: props) => {
  const { children } = props;
  return (
    <div className="auth-page">
      <div className="galaxy"></div>
      <div className="container mx-auto flex flex-row gap-4 items-center h-full">
        <div className="flex-1">
          <div className="globe">
            <AuthGlobe />
          </div>
        </div>
        <div className="flex-1 auth-side">
          <div className="auth-form">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
