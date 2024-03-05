import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import tools from "../../assets/tools/tools.png";

const Tools = () => {
  return (
    <div className="grid items-center justify-center h-full grid-cols-1 gap-8 lg:h-screen  lg:grid-cols-2">
      <div>
        <img src={tools} alt="tools" className="w-full" />
      </div>

      <div className="space-y-8">
        <p className="text-4xl font-bold">
          Connect your tools, close your tabs
        </p>
        <p className="text-zinc-600 text-normal">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <Link
          to="#"
          className="flex items-center gap-2 text-blue-600 underline"
        >
          <span>Learn more</span>
          <ArrowRight className="h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Tools;
