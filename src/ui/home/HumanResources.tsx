import { Button, Image } from "@/components";
import React from "react";

export const HumanResources = ({
  data,
}: {
  data: { header: string; description: string; cta: string };
}) => {
  return (
    <div
      className="py-36"
      style={{
        backgroundImage: `url("/images/home/hr/bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-heading text-3xl font-semibold rounded-underline mb-4 w-fit">
          {data.header}
        </h1>
        <p className="my-8">{data.description}</p>
        <div className="grid grid-cols-12">
          <Button className="text-black w-full mb-8 bg-tertiary flex items-center justify-between gap-10 rounded-s-md rounded-e-xl col-span-12 md:col-span-5">
            <p>{data.cta}</p>
            <Image
              src={"/images/svgs/black-arrow.svg"}
              width={24}
              height={24}
              alt="arrow"
            />
          </Button>
          <Image
            src={"/images/home/hr/laptop.png"}
            alt="human-resources"
            className="col-span-12 md:col-span-7"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="text-xl font-medium">Connect with them directly</p>
            <Image src={"/images/home/hr/qr.jpg"} alt="connect" />
            <p>Scan QR Code</p>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex flex-col items-center">
              <Image src={"/images/home/hr/question-mark.png"} alt="connect" />
              <p className="text-xl font-medium">Support 7/11</p>
              <p>100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/images/home/hr/question-mark.png"} alt="connect" />
              <p className="text-xl font-medium">Support 7/11</p>
              <p>100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/images/home/hr/question-mark.png"} alt="connect" />
              <p className="text-xl font-medium">Support 7/11</p>
              <p>100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
