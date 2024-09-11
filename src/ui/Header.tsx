import { Image, NavLinks } from "@/components";
import React from "react";
import navlinks from "public/navlinks.json";
import { LanguageSwitch } from "@/components/language-switch/LanguageSwitch";
import { useLocale } from "next-intl";

export const Header = () => {
  const locale = useLocale();
  return (
    <div className="main-header-wrapper container">
      <div className="header flex items-center gap-x-5 lg:gap-20 justify-between">
        <Image src={"/images/logo.png"} alt="logo" width={140} height={70} />
        <NavLinks
          links={navlinks[locale as "en" | "ar"]}
          shape="link"
          className="hidden lg:flex md:gap-2 justify-between flex-1 items-center"
        />
        <LanguageSwitch
          arComponent={
            <Image
              src={"/images/ar.png"}
              alt="ar"
              width={30}
              height={24}
              className="pointer"
            />
          }
          enComponent={
            <Image
              src={"/images/uk.png"}
              alt="ar"
              width={30}
              height={24}
              className="pointer"
            />
          }
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
  );
};
