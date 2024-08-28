import { Button, Image } from "@/components";
import React from "react";

export const HumanResources = () => {
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
          Our Human resources
        </h1>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur. Non nunc mollis id in
          fringilla sit. Curabitur rhoncus mattis felis purus in eros
          pellentesque. Ipsum id sem pellentesque elit vel. Sit sed sit non
          rhoncus enim est at aliquam netus. Nulla non tellus risus massa. Dui
          nibh ut tincidunt tincidunt non aliquam ultricies. Vitae scelerisque
          quis eu velit diam dictumst sed. Amet sapien amet lectus sed.
          Pellentesque nibh dui quam ac magna enim et vel convallis. Lobortis
          est in feugiat porttitor. Ac aliquam elementum tellus a nisl euismod
          orci. A lacus viverra est duis. At rhoncus urna orci rhoncus vel amet
          odio risus.
        </p>
        <div className="grid grid-cols-12">
          <Button className="text-black w-full bg-tertiary flex items-center justify-between gap-10 rounded-s-md rounded-e-xl col-span-5">
            <p>Read More</p>
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
            className="col-span-7"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <p className="text-xl font-medium">Connect with them directly</p>
            <Image src={"/images/home/hr/qr.jpg"} alt="connect" />
            <p>Scan QR Code</p>
          </div>
          <div className="flex items-center gap-5">
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
