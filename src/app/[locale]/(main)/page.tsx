import React from "react";
import {
  About,
  ContactUs,
  HumanResources,
  Influencers,
  MainBanner,
  Monitjin,
  Qwafil,
} from "@/ui";
import data from "public/home.json";
import { unstable_setRequestLocale } from "next-intl/server";
import "@/ui/home/_home.scss";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

const Page = ({ params }: { params: { locale: string; path?: string } }) => {
  unstable_setRequestLocale(params.locale);
  return (
    <React.Fragment>
      <MainBanner data={data.mainBanner[params.locale as "en" | "ar"]} />
      <div className="container mx-auto" id="qwafil">
        <Qwafil data={data.qwafil[params.locale as "en" | "ar"]} />
      </div>
      <div className="container mx-auto">
        <Monitjin data={data.montijin[params.locale as "en" | "ar"]} />
      </div>
      <HumanResources
        data={data.humanResources[params.locale as "en" | "ar"]}
      />
      <Influencers data={data.influencers[params.locale as "en" | "ar"]} />
      <div className="container mx-auto">
        <div className="py-24">
          <About data={data.about[params.locale as "en" | "ar"]} />
        </div>
      </div>
      <ContactUs data={data.contact} />
    </React.Fragment>
  );
};
export default Page;
