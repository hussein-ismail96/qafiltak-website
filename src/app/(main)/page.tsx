import React from "react";
import { About, Influencers, MainBanner, Qwafil } from "@/ui";
import data from "public/home.json";

export default function Home() {
  return (
    <React.Fragment>
      <MainBanner data={data.mainBanner.en} />
      <div className="container mx-auto">
        <Qwafil data={data.qwafil.en} />
        <Influencers data={data.influencers.en} />
        <div className="py-24">
          <About data={data.about.en} />
        </div>
      </div>
    </React.Fragment>
  );
}
