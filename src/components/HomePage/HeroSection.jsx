import { Button, Input } from "antd";
import { ArrowRight, RotateCcw } from "lucide-react";
import React from "react";
import ReactStars from "react-stars";

import headimage from "../../assets/hero_section/headimage.svg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 justify-between py-4 my-4 items-center gap-8">
      <div className=" space-y-4 lg:col-span-2">
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

        <div className="sm:flex bg-slate-200 space-y-4 p-4 rounded-md justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start justify-center ">
            <ReactStars count={5} size={24} color2={"#FF9D48"} />
            <p className="text-xs ">Based on 5149+ reviews:</p>
          </div>

          <div className="flex-1 flex justify-around items-center gap-2 font-bold ">
            <p>
              <RotateCcw />
            </p>
            <p>GetApp</p>
            <p>Capterra</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <img src={headimage} alt="headimage" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
