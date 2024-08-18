import { Button, NavLinks } from "@/components";
import { NavLinkProps } from "@/components/NavLinks";
import Image from "next/image";
import React from "react";

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  const links: Array<NavLinkProps> = [
    { name: "Home", href: "/" },
    { name: "Qawafil", href: "#qawafil" },
    { name: "Montij", href: "#montij" },
    { name: "Human Resources", href: "#hr" },
    { name: "Influencer", href: "#influencer" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];
  return (
    <>
      <header className="header-wrapper">
        <div className="header flex gap-x-4 md:gap-20">
          <Image src={"/images/logo.png"} alt="logo" width={140} height={70} />
          <NavLinks
            links={links}
            shape="link"
            className="hidden md:flex md:gap-2 justify-between flex-1 bg-white"
          />
        </div>
      </header>

      <main>{children}</main>

      <footer></footer>
    </>
  );
};

export default layout;
