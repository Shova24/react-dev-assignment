import React from "react";
import report_img from "../../assets/report/report.jpeg";
import { Button } from "antd";
import { ArrowRight } from "lucide-react";
const Report = () => {
  return (
    <div
      className="bg-auto xl:bg-cover w-full  bg-no-repeat bg-center h-[32rem] xl:h-[50rem] bg-[image:var(--image-url)]  flex justify-center  items-center md:justify-end md:relative"
      style={{ "--image-url": `url(${report_img})` }}
    >
      <div className="flex justify-center items-center  flex-col bg-zinc-300 opacity-80 md:bg-transparent p-4 rounded-lg gap-2 md:absolute md:right-5 lg:right-20 xl:right-40">
        <p className="text-xl font-bold">The Ways We Work</p>
        <p className="font-medium">
          How has our relationship with work changed?
        </p>
        <Button
          type="primary"
          size="large"
          shape="round"
          className=" flex items-center justify-center  bg-blue-600 text-white text-bold"
        >
          <span>Sign up here</span>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Report;
