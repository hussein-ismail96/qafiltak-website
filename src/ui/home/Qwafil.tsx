import React from "react";
import { Image, Button } from "@components";

export const Qwafil = ({
  data,
}: {
  data: {
    header: string;
    subHeader: string;
    description: string;
    cta?: string;
    departments: Array<{ name: string; description: string; imgSrc: string }>;
  };
}) => {
  return (
    <div className="py-36">
      <h1 className="text-heading text-3xl font-semibold rounded-underline mb-4 w-fit">
        {data.header}
      </h1>
      <div className="flex flex-col items-center gap-4 md:w-1/2 text-center mx-auto">
        <h2 className="text-secondary font-bold text-2xl ">{data.subHeader}</h2>
        <p>{data.description}</p>
        <Button className="bg-opacity-50 text-white bg-black w-fit flex items-center justify-between gap-10 rounded-s-md rounded-e-xl">
          <p>{data.cta}</p>
          <Image
            src={"/images/svgs/white-arrow.svg"}
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
      </div>
      <div className="flex items-center justify-between gap-14 mt-16 overflow-x-auto pb-36">
        {data.departments.map((item, key) => (
          <div className="w-1/4 relative overflow-visible" key={key}>
            <Image src={item.imgSrc} alt={item.name} className="rounded-full" />
            <div className="text-center absolute top-3/4 p-4 left-0 w-full bg-white border-1 border-gray">
              <h6 className="font-bold mb-3">{item.name}</h6>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
