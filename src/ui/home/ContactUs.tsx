"use client";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { Button, DynamicForm, IFieldProps, Image } from "@/components";

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
    contactDetails: IContactDetailsProps;
    map?: any;
  };
}) => {
  const fields: Array<IFieldProps> = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      className: "mb-4",
    },

    {
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      className: "mb-4",
    },
    {
      name: "subject",
      type: "text",
      label: "Subject ",
      className: "mb-4",
      id: "remember",
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
  });
  const initialValues = {
    name: "",
    email: "",
    subject: "",
  };

  const clickMove = () => {
    const submit = document.querySelector(".contact-submit");
    submit?.classList.add("move");
  };
  const actionComponent = ({ children }: { children: any }) => (
    <Button
      className="w-full flex items-center  bg-btn p-1 relative"
      type="submit"
    >
      <div className="contact-submit flex justify-between items-center h-4/5 mt-1">
        <p className="text-neutral-100 w-1/2">Done</p>
        <div className="w-1/2 flex justify-between items-center h-full">
          <p className="bg-neutral-200 justify-center text-neutral-400 px-4 mx-1 rounded-lg h-full flex items-center w-1/3">
            SUBMIT
          </p>
          <Image src={"/images/svgs/arrows.svg"} width={70} height={24} />
        </div>
      </div>
    </Button>
  );
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center md:w-2/3">
            <h1 className="font-semibold text-3xl text-center">
              {data.header}
            </h1>
            <DynamicForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              className="w-3/4"
              fields={fields}
              onSubmit={() => clickMove()}
              ActionComponent={actionComponent}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:w-2/3">
            <div className="flex gap-2 mb-4">
              <Image src={"/images/svgs/location.svg"} alt="location" />
              <p>{data.contactDetails.location}</p>
            </div>
            <div className="flex gap-2 mb-4">
              <Image src={"/images/svgs/phone.svg"} alt="phone" />
              <p>{data.contactDetails.phoneNumber}</p>
            </div>
            <div className="flex gap-2 mb-4">
              <Image src={"/images/svgs/location.svg"} alt="email" />
              <p>{data.contactDetails.email}</p>
            </div>
            <div className="flex gap-2 mb-4">
              <Image src={"/images/svgs/location.svg"} alt="website" />
              <p>{data.contactDetails.website}</p>
            </div>
            <Image src={"/images/home/map.jpg"} alt="map" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center mt-16">
          <div className="w-2/3 h-full">
            <div className="py-8 flex h-full flex-col justify-between">
              <h2 className="text-2xl font-semibold">
                GET THE APP FOR MORE EXPERIENCE
              </h2>
              <div className="flex gap-4 my-8">
                <Image
                  src={"/images/home/qr.png"}
                  width={105}
                  height={105}
                  alt=""
                />
                <div className="flex flex-col justify-between">
                  <p>Scan QR code</p>
                  <p>Track your order</p>
                  <p>Fast delivery</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Get the app</p>
                <div className="flex gap-4 mt-4">
                  <Image
                    src={"/images/home/app-store.png"}
                    width={135}
                    height={40}
                    alt=""
                  />
                  <Image
                    src={"/images/home/google-play.png"}
                    width={135}
                    height={40}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16">
          <Image src={"/images/home/mobiles.png"} />
        </div>
      </div>
    </div>
  );
};
