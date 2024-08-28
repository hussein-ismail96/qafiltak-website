import { Image } from "@/components";
import React from "react";

export const About = ({
  data,
}: {
  data: { imgSrc: string; header: string; description: string };
}) => {
  return (
    <div
      className="grid grid-cols-2 py-36 gap-12"
      style={{
        backgroundImage: `url("/images/home/about/earth.png")`,
        backgroundSize: "cover",
      }}
    >
      <Image src={data.imgSrc} className="col-span-1" alt="" />
      <div className="flex flex-col justify-center col-span-1">
        <h2 className="text-2xl text-heading font-bold mb-4">{data.header}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
