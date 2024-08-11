import { Button } from "@/components";
import { AuthGlobe } from "@/ui";
import Image from "next/image";
import React from "react";

type props = { children: React.ReactNode };
const layout = (props: props) => {
  const { children } = props;
  return (
    <div className="auth-page">
      <div className="container mx-auto mb-32 header-wrapper">
        <header className="header flex gap-20 ">
          <Image src={"/images/logo.png"} alt="logo" width={140} height={70} />
          <Button as={"a"} href={"/"} className="bg-white text-black">
            Home
          </Button>
        </header>
      </div>
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
