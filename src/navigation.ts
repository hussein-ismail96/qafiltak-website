import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["ar", "en"] as const;
export const localePrefix = "always";
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
