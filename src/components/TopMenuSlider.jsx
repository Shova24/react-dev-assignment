import React from "react";

function TopMenuSlider({ contents = [] }) {
  return (
    <div className="grid items-center justify-center w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ">
      {contents?.map((work) => (
        <div key={work} className="h-auto ">
          <p className="px-4 py-2 text-sm text-center border cursor-pointer hover:bg-zinc-100 rounded-3xl opacity-90">
            {work}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TopMenuSlider;
