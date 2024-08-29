import { Button, DynamicForm, IFieldProps, Image } from "@/components";
import React from "react";

interface IContactDetailsProps {
  location: string;
  phoneNumber: string | number;
  email: string;
  website: string;
}

export const ContactUs = ({
  data,
}: {
  data: {
    header: string;
    formFields: Array<IFieldProps>;
    contactDetails: IContactDetailsProps;
    map: any;
  };
}) => {
  const actionComponent = ({ children }: { children: any }) => (
    <Button className="flex w-full justify-between bg-button p-1" type="submit">
      <p className="bg-slate-300 px-4 py-1">SUBMIT</p>
      <Image src={"/images/svgs/arrows.svg"} width={70} height={24} />
    </Button>
  );
  return (
    <div className="">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="font-semibold text-3xl">{data.header}</h1>
          <DynamicForm
            fields={data.formFields}
            onSubmit={() => {}}
            ActionComponent={actionComponent}
          />
        </div>
        <div>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </div>
  );
};
