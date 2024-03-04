import React from "react";

import tools from "../../assets/tools/tools.png";
import { ArrowRight } from "lucide-react";

const Tools = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
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
        <a href="/" className="flex items-center gap-2 text-blue-600 underline">
          <span>Learn more</span>
          <ArrowRight className="h-4" />
        </a>
      </div>
    </div>
  );
};

export default Tools;
