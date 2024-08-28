import React from "react";
import Link from "next/link";
import { Button, Image } from "@/components";

export const Montij = ({ data }: { data: any }) => {
  return (
    <div className="flex montij-card items-end">
      <Image alt="montij" src={data.imgSrc} className="montij-img" />
      <div className="montij-data text-black flex-col">
        <h5 className="font-bold">{data.name}</h5>
        <p>{data.description}</p>
        <Button className="bg-opacity-50 text-black bg-black w-fit flex items-center justify-between gap-10 rounded-s-md rounded-e-xl">
          <p>Visit Montij</p>
          <Image
            src={"/images/svgs/black-arrow.svg"}
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
        <div className="flex gap-3 mt-2">
          <Link href="https://www.facebook.com" target="_blank">
            <Image
              alt="montij"
              src="/images/home/montij/facebook.svg"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <Image
              alt="montij"
              src="/images/home/montij/linkedin.svg"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
