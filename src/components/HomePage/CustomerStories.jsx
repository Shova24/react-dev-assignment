import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import React from "react";

import docusign from "../../assets/customer_stories/docusign.png";
import frog from "../../assets/customer_stories/frog.png";
import person_1 from "../../assets/customer_stories/person_1.png";
import person_2 from "../../assets/customer_stories/person_2.png";
import person_3 from "../../assets/customer_stories/person_3.png";
import vmware from "../../assets/customer_stories/vmware.png";

const stories = [
  {
    id: 1,
    logo: vmware,
    description: `“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”`,
    customer_image: person_1,
    customer_name: "Roxanne Mustafa",
    customer_designation: "Design Team Lead at VMware",
  },
  {
    id: 2,
    logo: docusign,
    description: `“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”`,
    customer_image: person_2,
    customer_name: "Jane Ashley ",
    customer_designation: "Head of Design at DocuSign",
  },
  {
    id: 3,
    logo: frog,
    description: `“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”`,
    customer_image: person_3,
    customer_name: "Laura Baird",
    customer_designation: "Associate Design Director at frog",
  },
];

const CustomerStories = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex items-center flex-col gap-8">
        <p className="font-bold text-4xl">Loved by the world's best teams</p>
        <div>
          <Button
            size="large"
            shape="round"
            className="flex items-center justify-center border-blue-600 text-blue-600 text-bold"
          >
            <span>Sign up here</span>
            <ArrowRight className="h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
        {stories?.map((story) => (
          <div key={story?.id} className="flex flex-col justify-between gap-8 ">
            <div className="space-y-8  ">
              <img src={story?.logo} alt="logo" className="h-10" />
              <p className=" text-zinc-600 font-medium">{story?.description}</p>
            </div>

            <div className="flex gap-4">
              <img
                src={story?.customer_image}
                alt="customer"
                className="h-12 w-12"
              />

              <div className="text-sm text-zinc-500 font-medium">
                <p>{story?.customer_name}</p>
                <p>{story?.customer_designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;
