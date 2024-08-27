import React from "react";
import Link from "next/link";
import { Image } from "@/components";

export const MobileMonitin = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    experts: Array<{ name: string; description: string; imgSrc: string }>;
  };
}) => {
  return (
    <div className="mt-4">
      {data.experts.map((item, key) => (
        <div className="flex w-100 p-5" key={key}>
          <Image
            alt="expert"
            src={item.imgSrc}
            className="flex-grow-1"
            width={300}
            height={300}
          />
          <div className="flex-col-start gap-3">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <div className="flex gap-3">
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
      ))}
    </div>
  );
};
