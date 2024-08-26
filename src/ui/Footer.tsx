import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "public/footer.json";

export const Footer = () => {
  return (
    <div className="container mx-auto flex justify-center md:justify-between py-3 flex-wrap gap-4">
      <div className="flex gap-4">
        {data.en.socialData.map((item, key) => (
          <Link href={item.href} key={key}>
            <Image
              src={item.src}
              alt={item.alt}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
        {data.en.footerLinks.map((item, key) => (
          <Link
            key={key}
            href={item.href}
            className="underline font-bold text-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
