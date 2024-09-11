"use client";
import { useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";

export const LanguageSwitch = ({
  className,
  arComponent,
  enComponent,
}: {
  className?: string;
  arComponent: React.ReactNode;
  enComponent: React.ReactNode;
}) => {
  const locale = useLocale();
  const route = useRouter();

  const handleLocaleChange = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    route.push(newLocale);
  };

  return (
    <div className={className} onClick={handleLocaleChange}>
      {locale === "en" ? enComponent : arComponent}
    </div>
  );
};
