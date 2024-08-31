import React from "react";
import { Image, Button } from "@components";

export const Influencers = ({
  data,
}: {
  data: {
    imgSrc: string;
    header: string;
    description: string;
    cta?: string;
  };
}) => {
  return (
    <div
      className="py-6 md:py-0 my-12"
      style={{
        backgroundImage: `url("/images/home/influencers/bg-img.png")`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-1 relative">
          <Image src={data.imgSrc} className="absolute" alt="" />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-start ps-14 text-white pt-24">
          <h1 className="text-white text-2xl rounded-underline  mb-4">
            {data.header}
          </h1>
          <p>{data.description}</p>
          <Button className="bg-opacity-50 mt-4 text-black w-1/2 bg-white flex items-center justify-between gap-10 rounded-s-md rounded-e-xl">
            <p className="font-semibold">{data.cta}</p>
            <Image
              src={"/images/svgs/black-arrow.svg"}
              width={24}
              height={24}
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
