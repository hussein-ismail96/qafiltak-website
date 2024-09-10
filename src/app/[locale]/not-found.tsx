import { Button } from "@/components";
import React from "react";

const Page = () => {
  return (
    <div className="not-found">
      <h1>page is not found</h1>
      <Button as={"a"} href={"/"} color="primary">
        back to home
      </Button>
    </div>
  );
};

export default Page;
