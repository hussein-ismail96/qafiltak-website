"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLProps } from "react";

export interface NavLinkProps {
  name: string;
  href: string;
  className?: string;
}
interface INavLinksProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  links?: Array<NavLinkProps>;
  shape?: "button" | "link";
}

export const NavLinks = (props: INavLinksProps) => {
  const pathname = usePathname();
  
  return (
    <nav className={props.className} {...props}>
      {props.shape === "link"
        ? props.links?.map((link) => (
            <Link href={link.href} className={link.className} key={link.name}>
              {link.name}
            </Link>
          ))
        : props.links?.map((link) => (
            <Button
              as="a"
              href={link.href}
              className={link.className}
              key={link.name}
            >
              {link.name}
            </Button>
          ))}
    </nav>
  );
};
