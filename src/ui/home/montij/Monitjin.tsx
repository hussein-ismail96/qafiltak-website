import React from "react";

import { Montij } from "./Montij";

export const Monitjin = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    montijin: Array<{ name: string; description: string; imgSrc: string }>;
  };
}) => {
  return (
    <div className="montij-section container mx-auto">
      <h1 className="text-heading text-3xl font-semibold rounded-underline mb-4 w-fit">
        {data.title}
      </h1>
      <p className="text-black py-4">{data.description}</p>
      <div className="container mx-auto flex">
        {data.montijin.map((item, key) => (
          <Montij key={key} data={item} />
        ))}
      </div>
    </div>
  );
};
