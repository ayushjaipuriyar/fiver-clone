import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const Everything = () => {
  const data = [
    {
      title: "Stick to you budget",
      subtitle:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Get quality work done quickly",
      subtitle:
        "Hand your project over to a talented freelancer in minutes, get long-lasting reverse",
    },
    {
      title: "Pay when you&apos;re happy",
      subtitle:
        "Upfront quotes mean no suprises. Payments only get release when you apply",
    },
    {
      title: "Count on 24/7 support",
      subtitle:
        "Out roiunt-the-clock support team is available to help anytime, anywhere",
    },
  ];
  return (
    <div className="bg-[#f1fdf7] flex py-20 justify-between px-24">
      <div>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          The best part? Everything
        </h2>
        <ul className="flex flex-col gap-10">
          {data.map(({ title, subtitle }, index) => (
            <li key={index}>
              <div className="flex gap-2 items-center text-xl">
                <BsCheckCircle className="text-[#62646a]" />
                <h4>{title}</h4>
              </div>
              <p className="text-[#62646a]">{subtitle}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-96 w-2/4">
        {/**<Image src="" fill alt="everyting" />*/}
      </div>
    </div>
  );
};

export default Everything;
