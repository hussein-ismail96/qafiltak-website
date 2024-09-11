import { Button } from "@/components";
import Image from "next/image";
import React from "react";

export const MainBanner = ({
  data,
}: {
  data: { header: string; subHeader: string; cta?: string; bgImage?: string };
}) => {
  const { header, subHeader, cta, bgImage } = data;
  return (
    <div
      className="w-full pt-40 md:pt-30 lg:pt-34  relative main-banner"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      id=""
    >
      <div className="main-banner-content flex flex-col items-center md:w-2/3 xl:w-1/2 justify-center text-center container mx-auto">
        <h1 className="text-5xl font-bold my-8">{header}</h1>
        <p className="font-medium">{subHeader}</p>

        <Button className="bg-opacity-50 text-white bg-black flex items-center justify-between gap-10 rounded-s-md mt-12 rounded-e-xl">
          <p>{cta}</p>
          <Image
            src={"/images/svgs/white-arrow.svg"}
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
      </div>
    </div>
  );
};
