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
    <div className="experts-section container mx-auto">
      <h3 className="text-primary font-bold title">{data.title}</h3>
      <p className="text-black py-4">{data.description}</p>
      <div className="container mx-auto flex">
        {data.montijin.map((item, key) => (
          <Montij key={key} data={item} />
        ))}
      </div>
    </div>
  );
};
