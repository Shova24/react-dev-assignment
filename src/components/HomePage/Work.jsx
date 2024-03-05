import React from "react";

import work from "../../assets/work/work.svg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="grid items-center justify-center h-full grid-cols-1 gap-8 lg:h-screen lg:grid-cols-2">
      <div className="space-y-8">
        <p className="text-4xl font-bold">Work together, wherever you work</p>
        <p className="text-zinc-600 text-normal">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
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
        <img src={work} alt="work" className="w-full" />
      </div>
    </div>
  );
};

export default Work;
