import { Button } from "@/components";
import { AuthGlobe } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = { children: React.ReactNode };
const layout = (props: props) => {
  const { children } = props;
  return (
    <div className="auth-page">
      <div className="container h-100 mx-auto">
        <div className="mb-32 header-wrapper">
          <header className="header flex gap-x-4 md:gap-20 ">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={140}
              height={70}
            />
            <Button as={"a"} href={"/"} className="bg-white text-black">
              Home
            </Button>
          </header>
        </div>
        <div className="galaxy"></div>
        <div className="flex flex-row gap-4 items-center h-full">
          <div className="flex-1">
            <div className="globe">
              <AuthGlobe />
            </div>
          </div>
          <div className="flex-1 auth-side">
            <div className="auth-form">{children}</div>
          </div>
        </div>
        <div className="footer flex justify-between mt-32 mb-10 flex-wrap">
          <div className="flex gap-4">
            <a href="https://www.youtube.com/" target="_blank">
              <Image
                src={"/images/svgs/youtube.svg"}
                alt={"x"}
                width={28}
                height={28}
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <Image
                src={"/images/svgs/x.svg"}
                alt={"x"}
                width={28}
                height={28}
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src={"/images/svgs/instagram.svg"}
                alt={"x"}
                width={28}
                height={28}
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                src={"/images/svgs/facebook.svg"}
                alt={"x"}
                width={28}
                height={28}
              />
            </a>
          </div>
          <div className="flex gap-4 text-white underline">
            <Link href={"/"}>Help center</Link>
            <Link href={"/"}>Privacy policy</Link>
            <Link href={"/"}>Terms & conditions</Link>
            <Link href={"/"}>Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
