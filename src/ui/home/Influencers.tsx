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
      className=""
      style={{
        backgroundImage: `url("/images/home/influencers/bg-img.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="col-span-1 relative">
          <Image src={data.imgSrc} className="absolute" alt="" />
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center px-14 text-white">
          <h1 className="text-white text-3xl rounded-underline  mb-4 w-fit">
            {data.header}
          </h1>
          <p>{data.description}</p>
          <Button className="bg-opacity-50 text-white bg-black flex items-center justify-between gap-10 rounded-s-md rounded-e-xl">
            <p>{data.cta}</p>
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
