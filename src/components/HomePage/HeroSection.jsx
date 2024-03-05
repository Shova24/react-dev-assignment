import { Button, Input } from "antd";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import React from "react";
import ReactStars from "react-stars";

import headimage from "../../assets/hero_section/headimage.svg";

const HeroSection = () => {
  return (
    <div className="grid items-center justify-between h-full grid-cols-1 gap-8 lg:h-screen  lg:grid-cols-5">
      <div className="space-y-4 lg:col-span-2">
        <p className="text-4xl font-bold">Take ideas from better to best</p>
        <p className="text-sm font-semibold text-zinc-600">
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
          className="flex items-center justify-center w-full text-white bg-blue-600 text-bold"
        >
          <span>Sign up here</span>
          <ArrowRight />
        </Button>

        <p className="text-xs font-normal text-zinc-400">
          Collaborate with your team within minutes
        </p>

        <div className="items-start justify-between gap-8 p-4 space-y-4 rounded-md sm:flex bg-slate-200">
          <div className="flex flex-col items-center justify-center sm:items-start ">
            <ReactStars count={5} size={24} color2={"#FF9D48"} />
            <p className="text-xs ">Based on 5149+ reviews:</p>
          </div>

          <div className="flex items-center justify-around flex-1 gap-2 font-bold ">
            <p>
              <RotateCcw />
            </p>
            <p>GetApp</p>
            <p>Capterra</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <motion.img
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }} //if you don't want it to happen again and again
          transition={{ duration: 1.0 }}
          src={headimage}
          alt="headimage"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
