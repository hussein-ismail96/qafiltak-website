import { ReactNode } from 'react';
import { Metadata } from 'next';

import "./globals.css";
import "@style";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: `%s | Qafiltak`,
    default: 'TOT',
  },
};

// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.3.0 where link clicks that switch
// the locale would otherwise be ignored.
const RootLayout = ({ children }: Props) => {
  return children;
};
export default RootLayout;
