import { Button, Input } from "antd";
import { ArrowRight, RotateCcw, Star } from "lucide-react";
import React from "react";

import headimage from "../assets/hero_section/headimage.svg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-4 my-4 items-center gap-8">
      <div className=" space-y-4 ">
        <p className="font-bold text-4xl">Take ideas from better to best</p>
        <p className="text-sm text-zinc-600 font-semibold">
          Miro is your team's visual platform to connect, collaborate, and
          create — together.
        </p>
        <Input
          size="large"
          className="rounded-3xl"
          placeholder="Enter your work email"
        />
        <Button
          type="primary"
          size="large"
          shape="round"
          className="w-full flex items-center justify-center  bg-blue-600 text-white text-bold"
        >
          <span>Sign up here</span>
          <ArrowRight />
        </Button>

        <p className="text-xs text-zinc-400 font-normal">
          Collaborate with your team within minutes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-8 bg-slate-200  p-4 rounded-md justify-between  w-full gap-8">
          <div className="col-span-1 sm:col-start-1 sm:col-span-2 flex flex-col items-center justify-start sm:w-auto ">
            <div className="flex gap-2 justify-start">
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
            </div>
            <p className="text-xs">Based on 5149+ reviews:</p>
          </div>

          <div className="col-span-1 sm:col-span-6 items-center gap-2  flex justify-around font-bold  sm:w-auto ">
            <RotateCcw />
            <span>GetApp</span>
            <span>Capterra</span>
          </div>
        </div>
      </div>

      <div className="">
        <img src={headimage} alt="headimage" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
