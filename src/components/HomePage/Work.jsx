import React from "react";

import work from "../../assets/work/work.svg";
import { ArrowRight } from "lucide-react";

const Work = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
      <div className="space-y-8">
        <p className="text-4xl font-bold">Work together, wherever you work</p>
        <p className="text-zinc-600 text-normal">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <a href="/" className="flex items-center gap-2 text-blue-600 underline">
          <span>Learn more</span>
          <ArrowRight className="h-4" />
        </a>
      </div>
      <div>
        <img src={work} alt="work" className="w-full" />
      </div>
    </div>
  );
};

export default Work;
