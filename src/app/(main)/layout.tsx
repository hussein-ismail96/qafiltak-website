import React from "react";
import Image from "next/image";
import { NavLinks } from "@components";
import navlinks from "public/navlinks.json";
import { Footer } from "@ui";
type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <>
      <header className="container mx-auto">
        <div className="main-header-wrapper container">
          <div className="header flex gap-x-5 lg:gap-20 justify-between">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={140}
              height={70}
            />
            <NavLinks
              links={navlinks.en}
              shape="link"
              className="hidden lg:flex md:gap-2 justify-between flex-1 items-center"
            />
            <Image
              src={"/images/burger.png"}
              alt="burger-menu"
              width={40}
              height={24}
              className="lg:hidden"
            />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default layout;
