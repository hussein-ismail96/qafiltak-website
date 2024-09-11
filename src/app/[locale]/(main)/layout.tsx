import React from "react";
import { Footer, Header } from "@ui";
type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <header className="container mx-auto">
        <Header/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default layout;
