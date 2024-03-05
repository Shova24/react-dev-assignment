import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import React from "react";

import { constraints } from "../../utils/helpers";

const Collaborations = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full gap-8 lg:h-screen lg:gap-12">
        <div className="relative ">
          <p className="p-6 text-4xl font-bold">
            Collaborate without constraints
          </p>
          <p className="absolute top-0 right-0 text-end rotate-12">
            <span className="px-2 text-xs font-bold bg-yellow-400 rounded-md">
              YOUR IDEA STARTS HERE
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {constraints?.map((content) => (
            <div key={content?.id} className="w-full py-4 space-y-4">
              <p className="text-xl font-bold">{content?.title}</p>
              <div className="text-sm text-zinc-600">
                {content?.description}
              </div>
            </div>
          ))}
        </div>

        <div>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="flex items-center justify-center text-white bg-blue-600 text-bold"
          >
            <span>Sign up here</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Collaborations;
