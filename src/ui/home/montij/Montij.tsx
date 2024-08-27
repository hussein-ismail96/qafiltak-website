import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";

export const Montij = ({ data }: { data: any }) => {
  return (
    <div className="flex expert-card items-end">
      <Image alt="expert" src={data.imgSrc} width={300} height={300} />
      <div className="expert-data text-black flex-col">
        <h5 className="font-bold">{data.name}</h5>
        <p>{data.description}</p>
        <Button className="flex p-0 gap-4 mt-2">
          <p>Visit Montij</p>
          <Image
            alt="arrow"
            src={"/images/home/arrow.svg"}
            width={20}
            height={20}
          />
        </Button>
        <div className="flex gap-3 mt-2">
          <Link href="https://www.facebook.com" target="_blank">
            <Image
              alt="expert"
              src="/images/about/facebook.svg"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <Image
              alt="expert"
              src="/images/about/in.svg"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
