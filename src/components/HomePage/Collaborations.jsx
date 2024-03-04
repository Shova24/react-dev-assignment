import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import React from "react";

const constraints = [
  {
    id: 1,
    title: "Free forever",
    description: (
      <p>
        Our free plan gives you unlimited team members, 3 boards, and 300+
        expert-made templates. Signing up with your work email lets you bring in
        your team faster. See our{" "}
        <a href="/" className="text-blue-600">
          pricing plans
        </a>{" "}
        for more features.
      </p>
    ),
  },
  {
    id: 2,
    title: "Easy integrations",
    description: (
      <p>
        Miro has 100+ powerful integrations with tools you already use like G
        Suite, Slack, and Jira, so your workflow is seamless. View the full list
        in our{" "}
        <a href="/" className="text-blue-600">
          Marketplace
        </a>
        ,
      </p>
    ),
  },
  {
    id: 3,
    title: "Security first",
    description: (
      <p>
        We treat your data like you would — with the utmost care. We follow
        industry-leading security standards and give you tools to protect
        intellectual property. Learn more at our{" "}
        <a href="/" className="text-blue-600">
          Trust Center
        </a>
        .
      </p>
    ),
  },
];

const Collaborations = () => {
  return (
    <>
      <div className="flex flex-col gap-8 items-center">
        <div className="relative ">
          <p className="font-bold text-4xl p-6">
            Collaborate without constraints
          </p>
          <p className="text-end rotate-12 absolute top-0 right-0">
            <span className="text-xs font-bold bg-yellow-400 px-2 rounded-md">
              YOUR IDEA STARTS HERE
            </span>
          </p>
        </div>

        <div className="md:flex space-y-4 gap-8 ">
          {constraints?.map((content) => (
            <div key={content?.id} className="space-y-4 w-full md:w-1/3 ">
              <p className="font-bold text-xl">{content?.title}</p>
              <div className="text-zinc-600 text-sm">
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
            className="flex items-center justify-center  bg-blue-600 text-white text-bold"
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
