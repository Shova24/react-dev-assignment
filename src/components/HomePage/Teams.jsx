import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import checkmark from "../../assets/teams/checkmark.png";
import icon_1 from "../../assets/teams/icon_1.png";
import icon_2 from "../../assets/teams/icon_2.png";
import icon_3 from "../../assets/teams/icon_3.png";
import icon_4 from "../../assets/teams/icon_4.png";
import teams_img from "../../assets/teams/teams.png";
import { team_lists } from "../../utils/helpers";
import TopMenuSlider from "../TopMenuSlider";

const Teams = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-8 lg:h-screen lg:gap-12">
      <p className="text-4xl font-bold ">Built for all kinds of teams</p>
      <TopMenuSlider contents={team_lists} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-around">
          <div className="space-y-8 text-sm font-medium text-zinc-600">
            <ul
              className={`list-image-[url(${checkmark})] text-zinc-600 text-sm space-y-2`}
            >
              <li>Build low-fi wireframes</li>
              <li>Involve stakeholders in the design process</li>
              <li>Run engaging design workshops</li>
            </ul>

            <Link to="#" className="flex items-center gap-2 text-blue-600 ">
              <span>Learn more</span>
              <ArrowRight className="h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-medium text-zinc-600">
              Integrate your favorite tools
            </p>

            <div className="flex gap-4 ">
              <img src={icon_1} alt="icon" className="w-6 h-6" />
              <img src={icon_2} alt="icon" className="w-6 h-6" />
              <img src={icon_3} alt="icon" className="w-6 h-6" />
              <img src={icon_4} alt="icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="h-full">
          <img src={teams_img} alt="image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Teams;
