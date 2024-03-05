import React from "react";
import brainstorming_img from "../../assets/brainstorming/brainstorming.png";
import { ArrowRight } from "lucide-react";
import TopMenuSlider from "../TopMenuSlider";
import { Link } from "react-router-dom";

const BrainStorming = () => {
  return (
    <div className="space-y-8">
      <p className="text-4xl font-bold ">Built for the way you work</p>
      <TopMenuSlider />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="font-semibold text-md">Brainstorming</p>
          <p className="text-zinc-600 ">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>

          <Link
            to="#"
            className="flex items-center gap-2 text-blue-600 underline"
          >
            <span>Learn more</span>
            <ArrowRight className="h-4" />
          </Link>
        </div>

        <div>
          <img src={brainstorming_img} alt="image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BrainStorming;